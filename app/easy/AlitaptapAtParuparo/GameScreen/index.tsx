import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Si Alitaptap At Si Paru-Paro';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "lalaki",
      definition: "Sa kwento, ito ang batang nagulantang sa Paruparo at nag-iwan sa kanya na nakabaligtad sa lupa.",
      syllables: "la-LA-ki",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/LALAKI.aac') // Adjust the path to your audio file
    },
    {
      word: "maganda",
      definition: "Ito ay isang katangian o kalagayan na may kaaya-aya o kariktan. Sa kwento, ito ang sinabi ni Langgam kay Araw patungkol sa sikat nito.",
      syllables: "ma-gan-DÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/MAGANDA.aac') // Adjust the path to your audio file
    },
    {
      word: "gagamba",
      definition: "Ito ay isang uri ng insekto na may walong mga binti at karaniwang tumatakas sa mga sapot.",
      syllables: "ga-gam-BÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/GAGAMBA.aac') // Adjust the path to your audio file
    },
    {
      word: "bathala",
      definition: "Ito ay ang katawagan sa pinakamataas na diyos o espiritu sa mitolohiya ng mga Pilipino.",
      syllables: "bat-HA-lá",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/BATHALA.aac') // Adjust the path to your audio file
    },
    {
      word: "sikat",
      definition: "Ito ay ang katangian ng araw na nasa itaas na bahagi ng kalangitan at nagbibigay liwanag sa mundo.",
      syllables: "si-KÁT",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/SIKAT.aac') // Adjust the path to your audio file
    },
    {
      word: "bulaklak",
      definition: "Ito ay mga bahagi ng halaman na karaniwang may mga kulay na maganda at maamoy. Sa kwento, ang Paruparo ay naghanap ng nektar dito bago siya hinuli ng batang lalaki.",
      syllables: "bu-lak-LÁK",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/BULAKLAK.aac') // Adjust the path to your audio file
    },
    {
      word: "araw",
      definition: "Ito ay isang anyong himpapawid na nagbibigay liwanag at init sa mundo.",
      syllables: "A-raw",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/ARAW.aac') // Adjust the path to your audio file
    },
    {
      word: "lupa",
      definition: "Ito ay ang pook o lugar kung saan tumutubo ang mga halaman at nabubuhay ang mga hayop.",
      syllables: "LU-pá",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/LUPA.aac') // Adjust the path to your audio file
    },
    {
      word: "liwanag",
      definition: "Ito ay isang salitang makatutulong sa pagpapakita ng kalinawan.",
      syllables: "li-WA-nag",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/LIWANAG.aac') // Adjust the path to your audio file
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
          storyId="alitaptapatparuparo"
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

