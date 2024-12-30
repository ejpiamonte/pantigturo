import createKvStore from 'expo-sqlite/kv-store';
import { Audio } from "expo-av";
import ConfettiCannon from 'react-native-confetti-cannon';
import { useFocusEffect, router } from "expo-router";
import React, { useState, useRef, useEffect, FC } from "react";
import { View, TouchableOpacity, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";

interface WordGuessingGameProps {
    WORDS: Word[]; // Unique words array for each screen
    storyId: string; // Unique storyId for each screen
    congratulationsText: string;
    stylesOverride?: {
      congratulationsContainer?: object;
      congratulations?: object;
      goBackButton?: object;
      goBackButtonText?: object;
    };
  }

const ALPHABET = 'ABKDEGHILMNOPRSTUWY'.split('');

interface Word {
  word: string;
  definition: string;
  syllables: string;
  pronunciationClip: any; // You can use a more specific type if needed
}

const WordGuessingGame: FC<WordGuessingGameProps> = ({ WORDS, storyId, stylesOverride,congratulationsText }) => {
  const [randomizedWords, setRandomizedWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [allLettersGuessed, setAllLettersGuessed] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const confettiRef = useRef<ConfettiCannon | null>(null);
  const [allGamesCompleted, setAllGamesCompleted] = useState<boolean>(false);
  const [showSyllableQuestion, setShowSyllableQuestion] = useState(false);
  const [syllableAnswerSelected, setSyllableAnswerSelected] = useState(false);
  const [failCount, setFailCount] = useState(0); // Track fail attempts
  
  const WORD = randomizedWords[currentWordIndex];
  const isLastGame = currentWordIndex === randomizedWords.length - 1;

  
  const getUnplayedWords = async (storyId: string): Promise<Word[]> => {
    try {
      const completedEasy = await fetchCompletedGames(storyId);
      if (!Array.isArray(completedEasy)) {
          console.error(`Completed games for story ${storyId} is not an array:`, completedEasy);
          return WORDS; // Return all words if there is an error
      }
      return WORDS.filter((_, index) => !completedEasy.includes(index));
    } catch (error) {
      console.error(`Failed to fetch unplayed words for story ${storyId}:`, error);
      return WORDS; // Return all words in case of error
    }
  };

  // Save completed games for a specific story
  const saveCompletedGames = async (storyId: string, completedEasy: number[]) => {
    try {
      console.log(`Saving for storyId: ${storyId}, data: ${JSON.stringify(completedEasy)}`); // Debugging
      await createKvStore.setItem(`completedEasy_${storyId}`, JSON.stringify(completedEasy));
      console.log(`Saved completed games for story ${storyId}:`, completedEasy);
    } catch (error) {
      console.error(`Failed to save game progress for story ${storyId}:`, error);
    }
  };

  const updateCompletedGames = async (storyId: string, completedIndex: number) => {
    try {
      const completedEasy = await fetchCompletedGames(storyId);
      if (!completedEasy.includes(completedIndex)) {
          const updatedGames = [...completedEasy, completedIndex];
          await saveCompletedGames(storyId, updatedGames);
          console.log(`Updated completed games for story ${storyId}:`, updatedGames);
      } else {
          console.log(`Game already marked as completed for story ${storyId}, index:`, completedIndex);
      }
    } catch (error) {
      console.error(`Error updating completed games for story ${storyId}:`, error);
    }
  };

  // Fetch completed games for a specific story
  const fetchCompletedGames = async (storyId: string): Promise<number[]> => {
    try {
      const savedData = await createKvStore.getItem(`completedEasy_${storyId}`);
      const completedEasy = savedData ? JSON.parse(savedData) : [];
      console.log(`Fetched completed games for story ${storyId}:`, completedEasy); // Debugging

      if (!Array.isArray(completedEasy)) {
        console.error(`Fetched completed games for story ${storyId} is not an array:`, completedEasy);
        return [];
      }

      return completedEasy;
    } catch (error) {
      console.error(`Error fetching completed games for story ${storyId}:`, error);
      return [];
    }
  };



  useEffect(() => {
    if (WORD && WORD.word.split('').every((letter) => correctLetters.includes(letter.toUpperCase()))) {
      setAllLettersGuessed(true);
      setShowSyllableQuestion(true); // Show syllable question after guessing
    }
  }, [correctLetters]);
  
  useEffect(() => {
    const initializeGame = async () => {
      const unplayedWords = await getUnplayedWords(storyId);
      if (unplayedWords.length > 0) {
        const shuffledWords = unplayedWords.sort(() => 0.5 - Math.random());
        setRandomizedWords(shuffledWords);
        setCurrentWordIndex(0); // Ensure you start from the first word of the shuffled set
      } else {
        setAllGamesCompleted(true);
      }
    };
    initializeGame();
  }, [storyId, WORDS, setAllGamesCompleted]);


    // console.log('Received storyId:', storyId); // Debugging log
    // console.log('Received words:', WORDS); // Optional: Verify words as well

  useEffect(() => {
    return () => {
      sound?.stopAsync();
      sound?.unloadAsync();
    };
  }, [sound]);

  useEffect(() => {
    if (allLettersGuessed) {
      confettiRef.current?.start();
    }
  }, [syllableAnswerSelected]);

  useFocusEffect(
    React.useCallback(() => {
      // When the screen comes into focus, do nothing.
      return async () => {
        // When the screen goes out of focus (i.e., navigating away)
        if (allLettersGuessed && WORD) {
          const currentGameIndex = WORDS.findIndex((word) => word.word === WORD.word);
          console.log("Updating game as completed on navigation, index:", currentGameIndex);
          await updateCompletedGames(storyId, currentGameIndex); // Save the game progress
        }
      };
    }, [allLettersGuessed, WORD])
  );
  
  const handleLetterPress = (letter: string) => {
  if (!WORD) return;
  const isCorrect = WORD.word.toUpperCase().includes(letter);
  const newGuessedLetters = [...guessedLetters, letter];
  setGuessedLetters(newGuessedLetters);

  if (isCorrect) {
    setCorrectLetters([...correctLetters, letter]);
  } else {
    // Check if the user has reached 5 incorrect guesses
    const incorrectGuesses = newGuessedLetters.filter(
      (guessed) => !WORD.word.toUpperCase().includes(guessed)
    ).length;

    if (incorrectGuesses >= 5) {
      // Automatically reveal the correct answer
      setCorrectLetters(WORD.word.toUpperCase().split(""));
      setAllLettersGuessed(true);
      setShowSyllableQuestion(true); // Show syllable question immediately
    }
  }
};

  useEffect(() => {
    if (WORD && WORD.word.split('').every((letter) => correctLetters.includes(letter.toUpperCase()))) {
      setAllLettersGuessed(true);
    }
  }, [correctLetters]);

  
  const renderBoxes = () => {
    if (!WORD) return null;
    return WORD.word.split('').map((letter, index) => (
      <View key={index} style={styles.box}>
        <Text style={styles.letter}>
          {correctLetters.includes(letter.toUpperCase()) ? letter : '  '}
        </Text>
      </View>
    ));
  };

  const renderAlphabet = () => {
    return ALPHABET.map((letter) => {
      const isCorrect = correctLetters.includes(letter);
      const isGuessed = guessedLetters.includes(letter);

      return (
        <TouchableOpacity
          key={letter}
          style={[
            styles.letterButton,
            isGuessed && (isCorrect ? styles.correctLetter : styles.incorrectLetter)
          ]}
          onPress={() => handleLetterPress(letter)}
          disabled={isGuessed}
        >
          <Text style={[styles.letter, isGuessed && styles.guessedLetterText]}>
            {letter}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const playPronunciation = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    if (WORD) {
      const { sound: playbackObject } = await Audio.Sound.createAsync(WORD.pronunciationClip);
      setSound(playbackObject);
      await playbackObject.playAsync();
    }
  };

  const nextGame = async () => {
    if (allLettersGuessed) {
      const currentGameIndex = WORDS.findIndex((word) => word.word === WORD?.word);
      await updateCompletedGames(storyId, currentGameIndex);
    }
    
    const unplayedWords = await getUnplayedWords(storyId);
    if (unplayedWords.length > 0) {
      setRandomizedWords(unplayedWords);
      setCurrentWordIndex(currentWordIndex + 1); // Move to the next word
      setGuessedLetters([]);
      setCorrectLetters([]);
      setAllLettersGuessed(false);
      setSyllableAnswerSelected(false);
    } else {
      setAllGamesCompleted(true);
      setSyllableAnswerSelected(true); // Set completion flag
    }
    };

  const goBackThreeSteps = () => {
    router.back()
    router.back()
    router.back(); // This will go back three steps in the navigation stack
  };

  const countSyllables = (syllables: string): number => {
    return syllables.split("-").length; // Split by "-" and count the parts
  };

  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  
  const handleSyllableAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setSyllableAnswerSelected(true); // Lock the answer
    }
  };
  
  const renderSyllableQuestion = () => {
    if (!WORD || !showSyllableQuestion || syllableAnswerSelected) return null;
  
    const correctSyllables = countSyllables(WORD.syllables);
  
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          Ilan ang pantig sa salitang "{WORD.word}"?
        </Text>
        <View style={styles.syllableOptions}>
          {[...Array(10).keys()].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.syllableButton}
              onPress={() => handleSyllableAnswer(num + 1 === correctSyllables)}
            >
              <Text style={styles.syllableButtonText}>{num + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  
  return (
  <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
    <SafeAreaView style={styles.container}>
      {allGamesCompleted ? (
        <View style={styles.congratulationsContainer}>
          <Text style={styles.congratulations}>{congratulationsText}</Text>
          <TouchableOpacity style={styles.goBackButton} onPress={goBackThreeSteps}>
            <Text style={styles.goBackButtonText}>Bumalik Sa Ibang Istorya</Text>
          </TouchableOpacity>
        </View>
        ) : (
        WORD && (
          <>
            <Text style={styles.header}>Hulaan Ang Salita!</Text>
            {/* Display Definition */}
            <Text style={styles.definition}>{WORD.definition}</Text>

            {/* Render Alphabet Boxes */}
            <View style={styles.boxesContainer}>
              {!allLettersGuessed ? renderBoxes() : 
              <Text style={styles.syllables}>{WORD.syllables}</Text>}
            </View>
            <View style={styles.alphabetContainer}>{renderAlphabet()}</View>

            {allLettersGuessed && (
              <>
                {/* Syllable Question */}
                
                {!syllableAnswerSelected ? renderSyllableQuestion() : null}

                {syllableAnswerSelected && (
                  <>
                    {/* Pronunciation and Next Game Buttons */}
                    <Text style={styles.answer}>
                      Tama may {WORD.syllables.split('-').length} pantig ang salitang {WORD.word}
                    </Text>
                    <TouchableOpacity style={styles.ttsButton} onPress={playPronunciation}>
                      <Text style={styles.ttsButtonText}>Hear Word Pronunciation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={nextGame}>
                      <Text style={styles.nextButtonText}>Next Game</Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
            <ConfettiCannon
              ref={confettiRef}
              count={200}
              origin={{ x: screenWidth / 2, y: screenHeight / -1 }}
              autoStart={false}
            />
          </>
        )
      )}
    </SafeAreaView>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'IrishGrover-Regular',
  },
  definition: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Inika-Regular',
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 5,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    backgroundColor: '#282546',
    paddingHorizontal: 10,
    paddingVertical: 1,
    margin: 2,
  },
  letter: {
    fontSize: 24,
    color: '#ffffff',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: '#ffffff',
  },
  letterButton: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    margin: 5,
    backgroundColor: '#282546',
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  guessedLetter: {
    backgroundColor: '#ffff00',
    borderColor: '#000000', // Change border color to black
    borderWidth: 1,
  },
  correctLetter: {
    backgroundColor: '#ffff00', // Yellow for correct
    borderColor: '#000000', // Change border color to black
  },
  incorrectLetter: {
    backgroundColor: 'red', // Red for incorrect
    borderColor: '#000000', // Change border color to black
  },
  guessedLetterText: {
    color: '#000000',
  },
  
  ttsButton: {
    padding: 10,
    backgroundColor: '#ffff00',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  ttsButtonText: {
    fontFamily: 'Inika-Regular',
    color: 'black',
  },
  syllables: {
    fontFamily: 'Inika-Regular',
    fontSize: 24,
  },
  congratulationsContainer: {
    alignItems: 'center',
    marginTop: 125,
  },
  congratulations: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    textShadowColor: 'aqua', // Outline color
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
  nextButton: {
    padding: 10,
    backgroundColor: 'rgba(134, 202, 215, 1)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  nextButtonText: {
    fontFamily: 'Inika-Regular',
    color: 'black',
  },
  goBackButtonText: {
    fontSize: 24,
    color: '#ffffff',
    textShadowColor: 'aqua', // Outline color
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontFamily: 'Inika-Regular',
  },
  goBackButton: {
    padding: 10,
    backgroundColor: 'rgba(134, 202, 215, 1)',
    borderRadius: 5,
    marginTop: 125,
  },
  questionContainer: {
    marginTop: 16,
    backgroundColor: '',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inika-Regular',
  },
  answer: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Inika-Regular',
  },
  syllableOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  syllableButton: {
    margin: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: '#282546',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  syllableButtonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default WordGuessingGame;

function executeSql(arg0: string) {
  throw new Error("Function not implemented.");
}
