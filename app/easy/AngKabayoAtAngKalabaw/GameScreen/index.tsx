import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Kabayo at Ang Kalabaw!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "bayan",
      definition: "Ito ang lugar kung saan naninirahan ang magsasaka at kung saan siya nagsimula ng kanyang paglalakbay.",
      syllables: "BA-yan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/BAYAN.aac') // Adjust the path to your audio file
    },
    {
      word: "gamit",
      definition: "Ito ang mga bagay na dala ng magsasaka sa kanyang paglalakbay.",
      syllables: "GA-mit",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/GAMIT.aac') // Adjust the path to your audio file
    },
    {
      word: "namatay",
      definition: "Ito ang naging resulta ng pagbigay ng kalabaw sa bigat ng dala at init ng araw.",
      syllables: "na-ma-TÁY",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/NAMATAY.aac') // Adjust the path to your audio file
    },
    {
      word: "init",
      definition: "Ito ang kondisyon ng panahon na nagdulot ng pagod at panghihina sa kalabaw.",
      syllables: "I-nit",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/INIT.aac') // Adjust the path to your audio file
    },
    {
      word: "pagod",
      definition: "Ito ang nararamdaman ng kalabaw dahil sa bigat ng dala at init ng araw.",
      syllables: "pa-GÒD",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/PAGOD.aac') // Adjust the path to your audio file
    },
    {
      word: "bumigay",
      definition: "Ito ang nangyari sa kalabaw dahil sa sobrang bigat ng dala at init ng panahon.",
      syllables: "bu-mi-GÁY",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/BUMIGAY.aac') // Adjust the path to your audio file
    },
    {
      word: "bigat",
      definition: "Ito ang dahilan ng pagbagsak ng kalabaw at ng pagdurusa ng kabayo dahil sa paglipat ng gamit na dala ng kalabaw sa kanya.",
      syllables: "bi-GÁT",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/BIGAT.aac') // Adjust the path to your audio file
    },
    {
      word: "araw",
      definition: "Ito ang panahon ng paglalakbay ng magsasaka at ng kanyang mga alagang hayop.",
      syllables: "A-raw",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/ARAW.aac') // Adjust the path to your audio file
    },
    {
      word: "kalabaw",
      definition: "Ito ang isa pang alagang hayop na ginamit ng magsasaka, ngunit bumigay ito sa bigat ng dala at namatay.",
      syllables: "ka-la-BÁW",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG KABAYO AT ANG KALABAW/KALABAW.aac') // Adjust the path to your audio file
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
          storyId="angkabayoatangkalabaw"
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

