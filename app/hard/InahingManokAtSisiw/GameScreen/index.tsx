import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Inahing Manok At Ang Kanyang Mga Sisiw!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "InahingManok",
      definition: "Siya ang pangunahing karakter sa kwento, isang mapagmahal na ina na nag-aalaga sa kanyang mga sisiw at nagpapahalaga sa kaligtasan nila.",
      syllables: "i-na-HÎNG ma-NÒK",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/INAHING MANOK.aac') // Adjust the path to your audio file
    },
    {
      word: "Sisiw",
      definition: "Sila ang mga batang manok na anak ng inahing manok.",
      syllables: "SI-siw",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/SISIW.aac') // Adjust the path to your audio file
    },
    {
      word: "Aksyon",
      definition: "Ito ay ang pagkilos o hakbang na isinagawa ng isang tao batay sa kanyang desisyon o layunin.",
      syllables: "ak-SYÒN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/AKSYON.aac') // Adjust the path to your audio file
    },
    {
      word: "Paglipat",
      definition: "Ito ay ang pag-alis ng isang tao o grupo ng tao mula sa isang lugar patungo sa ibang lugar.",
      syllables: "pag-LI-pat",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/PAGLIPAT.aac') // Adjust the path to your audio file
    },
    {
      word: "Magsasaka",
      definition: "Ito ay isang taong nagtatrabaho sa sakahan o taniman upang magtanim at mag-ani ng mga halaman o bunga.",
      syllables: "mag-sa-sa-KÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/MAGSASAKA.aac') // Adjust the path to your audio file
    },
    {
      word: "Tawagin",
      definition: "Ang paghingi ng atensyon o pag-anyaya sa isang tao na pumunta o sumama.",
      syllables: "ta-WA-gin",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/TAWAGIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Kamaganak",
      definition: "Ito ay ang mga taong may ugnayan sa isa`t isa sa pamamagitan ng dugo o pamilya.",
      syllables: "ka-mag-A-nak",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/KAMAGANAK.aac') // Adjust the path to your audio file
    },
    {
      word: "Sundin",
      definition: "Ang pagtupad sa isang utos, patakaran, o payo.",
      syllables: "sun-DÎN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/SUNDIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagani",
      definition: "Ito ay ang proseso ng pagkuha o pagkolekta ng mga bunga o ani sa isang taniman.",
      syllables: "pag-A-ni",
      pronunciationClip: require('../../../../assets/SALITA/HARD/INAHING MANOK AT SISIW/PAGANI.aac') // Adjust the path to your audio file
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
          storyId="inahingmanokatsisiw"
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

