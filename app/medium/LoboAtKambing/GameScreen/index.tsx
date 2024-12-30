import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Lobo At Ang Kambing!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "lobo",
      definition: "Ang karakter na hayop na nanglilinlang sa kambing.",
      syllables: "LO-bo",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/LOBO.aac') // Adjust the path to your audio file
    },
    {
      word: "bilanggo",
      definition: "Ang sitwasyon ng pagkakulong o pagkabihag, na naranasan ng lobo at ng kambing sa loob ng balon.",
      syllables: "bi-lang-GÒ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/BILANGGO.aac') // Adjust the path to your audio file
    },
    {
      word: "kambing",
      definition: "Ang karakter na hayop na naapektuhan ng panlilinlang ng lobo.",
      syllables: "kam-BÎNG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/KAMBING.aac') // Adjust the path to your audio file
    },
    {
      word: "tulungan",
      definition: "Ang pagtulong o pagtutulungan ng dalawang tao o hayop upang malampasan ang isang suliranin.",
      syllables: "tu-LU-ngan",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/TULUNGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "malungkot",
      definition: "Ang damdamin na kabaliktaran ng pagiging masaya.",
      syllables: "ma-lung-KÒT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/MALUNGKOT.aac') // Adjust the path to your audio file
    },
    {
      word: "tinig",
      definition: "Ang boses o tunog na narinig ng kambing mula sa loob ng balon.",
      syllables: "TI-nig",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/TINIG.aac') // Adjust the path to your audio file
    },
    {
      word: "uhaw",
      definition: "Ang pangangailangan ng katawan sa pag-inom ng tubig.",
      syllables: "U-haw",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/UHAW.aac') // Adjust the path to your audio file
    },
    {
      word: "manloloko",
      definition: "Ang taong nagdudulot ng panloloko o pang-aabuso sa iba.",
      syllables: "man-lo-LO-ko",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/MANLOLOKO.aac') // Adjust the path to your audio file
    },
    {
      word: "balon",
      definition: "Ang lugar kung saan nahulog ang lobo at ang kambing, na walang tubig.",
      syllables: "ba-LÒN",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/LOBO AT KAMBING/BALON.aac') // Adjust the path to your audio file
    },
    // Add more words here
  ];

  const goBackThreeSteps = () => {
    router.back()
    router.back()
    router.back(); // This will go back three steps in the navigation stack
  };
  
  return (
      <ImageBackground source={require("../../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
        <WordGuessingGame
          WORDS={WORDS}
          storyId="loboatkambing"
          congratulationsText={customCongratulations}
          stylesOverride={{
            congratulationsContainer: { backgroundColor: '#FFF000' },
            congratulations: { color: '#ff0' },
            goBackButton: { backgroundColor: '#444' },
            goBackButtonText: { fontSize: 20 },
          }}
        />
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
  congratulationsContainer: {
    alignItems: 'center',
    marginTop: 125,
  },
  congratulations: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'IrishGrover-Regular',
  },
  goBackButton: {
    padding: 10,
    backgroundColor: 'rgba(144, 240, 144, 0.8)',
    borderRadius: 5,
    marginTop: 125,
  },
  goBackButtonText: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Inika-Regular',
  }
});

