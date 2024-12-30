import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Mangga!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Mangpangga",
      definition: "Ang ama sa pamilya na nagmamahal at nag-aalaga sa kanilang bakuran.",
      syllables: "mang pang-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/MANG PANGGA.aac') // Adjust the path to your audio file
    },
    {
      word: "Bakuran",
      definition: "Ang lugar sa paligid ng bahay na kung saan itinatanim ang mga halaman o iba pang bagay.",
      syllables: "ba-KU-ran",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/BAKURAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Biboy",
      definition: "Ang panganay sa tatlong anak na nagtulungan sa paghahanap ng gintong bunga sa kanilang bakuran.",
      syllables: "BI-boy",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/BIBOY.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagkamalikhain",
      definition: "Ang kakayahan na lumikha o magbuo ng bagong mga bagay.",
      syllables: "pag-KÁ-ma-lik-HÁ-in",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/PAGKAMALIKHAIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Sakripisyo",
      definition: "Ang pagbibigay ng kaginhawahan o kasiyahan sa kapakanan ng iba.",
      syllables: "sak-ri-PI-syo",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/SAKRIPISYO.aac') // Adjust the path to your audio file
    },
    {
      word: "Alingmanggita",
      definition: "Ang ina sa pamilya na may malasakit at pagmamahal sa kanilang mga anak.",
      syllables: "A-ling mang-GI-ta",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/ALING MANGGITA.aac') // Adjust the path to your audio file
    },
    {
      word: "Namumunga",
      definition: "Ang proseso ng pagbuo at paglaki ng bunga sa isang halaman.",
      syllables: "na-mu-MU-nga",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/NAMUMUNGA.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagaani",
      definition: "Ang proseso ng pagkuha o pagkuha ng mga produkto mula sa kalikasan o pagsasaka.",
      syllables: "pa-a-A-ni",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/PAGAANI.aac') // Adjust the path to your audio file
    },
    {
      word: "Mangga",
      definition: "Isang uri ng prutas na kilala sa kanyang matamis na lasa at kakaibang pabango.",
      syllables: "mang-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/MANGGA.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagkain",
      definition: "Ito ay sustansya na kinakain o iniinom upang mapanatili ang buhay at kalusugan.",
      syllables: "pag-KA-in",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG MANGGA/PAGKAIN.aac') // Adjust the path to your audio file
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
          storyId="alamatngmangga"
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

