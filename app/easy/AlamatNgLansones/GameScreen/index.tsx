import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Lansones!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "bayan",
      definition: "Ito ay tumutukoy sa isang komunidad ng mga tao na magkakasama sa isang lugar.",
      syllables: "BA-yan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/BAYAN.aac') // Adjust the path to your audio file
    },
    {
      word: "laman",
      definition: "Ito ay ang bahagi ng halaman o hayop na nasa loob at nagbibigay ng sustansya o lasa.",
      syllables: "la-MÁN",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/LAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "lason",
      definition: "Ito ay ang masamang sangkap na maaaring magdulot ng pinsala o kamatayan.",
      syllables: "LA-son",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/LASON.aac') // Adjust the path to your audio file
    },
    {
      word: "puno",
      definition: "Ito ay ang halaman na may matatag na tangkay, sanga, at dahon, at naglalabas ng bunga o prutas.",
      syllables: "PU-nò",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/PUNO.aac') // Adjust the path to your audio file
    },
    {
      word: "masaya",
      definition: "Ito ay ang emosyon ng kasiyahan o kagalakan. Sa kwento, ang babae na kumain ng bunga ng puno ng lansones ay nagdulot ng kagalakan sa sarili at sa iba dahil hindi siya naapektuhan ng lason.",
      syllables: "ma-sa-YÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/MASAYA.aac') // Adjust the path to your audio file
    },
    {
      word: "pagod",
      definition: "Ito ay ang pagkaubos ng lakas o enerhiya dahil sa paggawa o pagkilos.",
      syllables: "pa-GÒD",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/PAGOD.aac') // Adjust the path to your audio file
    },
    {
      word: "bata",
      definition: "Sa kwento, ito ang unang sumubok kumain ng bunga ng puno ng lansones matapos na makita ang babae na kumain nito nang walang pinsala.",
      syllables: "BA-tá",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/BATA.aac') // Adjust the path to your audio file
    },
    {
      word: "likod",
      definition: "Sa kwento, ito ang bahagi ng bunga ng puno ng lansones kung saan matatagpuan ang nakakalasong lason.",
      syllables: "li-KÒD",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/LIKOD.aac') // Adjust the path to your audio file
    },
    {
      word: "bunga",
      definition: "Ito ay ang produktong lumalabas mula sa puno at maaaring maging pagkain o iba pang bagay.",
      syllables: "BU-nga",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG LANSONES/BUNGA.aac') // Adjust the path to your audio file
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
          storyId="alamatnglansones"
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

