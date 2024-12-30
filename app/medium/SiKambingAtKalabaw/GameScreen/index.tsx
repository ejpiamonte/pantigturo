import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Magkapitbahay Na Si Kambing At Kalabaw!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "kambing",
      definition: "Ang karakter na hayop na kaibigan ng kalabaw na sumama sa kanya sa paglalakbay.",
      syllables: "kam-BÎNG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/KAMBING.aac') // Adjust the path to your audio file
    },
    {
      word: "nagpahinga",
      definition: "Ang pagtigil mula sa paggawa o pagkilos.",
      syllables: "nag-pa-hi-NGÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/NAGPAHINGA.aac') // Adjust the path to your audio file
    },
    {
      word: "nainip",
      definition: "Ang pakiramdam ng pagkabagot o pagkairita dahil sa paghihintay o kakulangan ng gawaing ginagawa.",
      syllables: "na-i-NÎP",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/NAINIP.aac') // Adjust the path to your audio file
    },
    {
      word: "busog",
      definition: "Ang nararamdaman ng kambing kapag siya ay nakakain na ng sapat na pagkain.",
      syllables: "bu-SÒG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/BUSOG.aac') // Adjust the path to your audio file
    },
    {
      word: "inutusan",
      definition: "Ang pagpapagawa o pagbibigay ng utos sa iba.",
      syllables: "i-nu-TU-san",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/INUTUSAN.aac') // Adjust the path to your audio file
    },
    {
      word: "kalabaw",
      definition: "Ang karakter na hayop na naglakbay kasama ang kambing.",
      syllables: "ka-la-BÁW",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/KALABAW.aac') // Adjust the path to your audio file
    },
    {
      word: "nalunod",
      definition: "Ang trahedya na nangyari sa kambing dahil sa kanyang hindi pagkakaingat sa tubig.",
      syllables: "na-LU-nod",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/NALUNOD.aac') // Adjust the path to your audio file
    },
    {
      word: "hampas",
      definition: "Ang pag-untog ng isang bagay sa ibang bagay o sa katawan ng tao.",
      syllables: "ham-PÁS",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/HAMPAS.aac') // Adjust the path to your audio file
    },
    {
      word: "ilog",
      definition: "Ang lugar kung saan nagpunta ang kalabaw at ang kambing upang maghanap ng pagkain.",
      syllables: "I-log",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/SI KAMBING AT KALABAW/ILOG.aac') // Adjust the path to your audio file
    }
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
          storyId="sikambingatkalabaw"
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

