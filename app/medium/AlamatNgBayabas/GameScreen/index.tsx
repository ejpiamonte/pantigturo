import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Bayabas!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "sulta",
      definition: "Isang matataas na pinuno sa isang lugar, tulad ng isang hari o pangulo.",
      syllables: "sul-TÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/SULTA.aac') // Adjust the path to your audio file
    },
    {
      word: "pagbabanta",
      definition: "Ang pahayag ng pananakot o panghihikayat na mayroong masamang kahihinatnan.",
      syllables: "pag-ba-ban-TÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/PAGBABANTA.aac') // Adjust the path to your audio file
    },
    {
      word: "damot",
      definition: "Ang pagiging kuripot o hindi nagbibigay sa iba, lalo na sa oras ng pangangailangan.",
      syllables: "DÁ-mot",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/DAMOT.aac') // Adjust the path to your audio file
    },
    {
      word: "pagpapatawad",
      definition: "Ang pagbibigay-kapatawaran o pagpapahintulot sa isang tao na hindi bigyan ng parusa kapag nagkamali.",
      syllables: "paag-pa-pa-TA-wad",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/PAGPAPATAWAD.aac') // Adjust the path to your audio file
    },
    {
      word: "mapaniil",
      definition: "Ang taong mahigpit at mapang-api, na ginagamit ang kapangyarihan para kontrolin ang iba.",
      syllables: "ma-pa-ni-ÎL",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/MAPANIIL.aac') // Adjust the path to your audio file
    },
    {
      word: "palasyo",
      definition: "Ang tirahan ng isang pinuno o hari, karaniwang mayroong magarbong arkitektura at kagamitan.",
      syllables: "pa-LA-syo",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/PALASYO.aac') // Adjust the path to your audio file
    },
    {
      word: "pulubi",
      definition: "Ang isang tao na walang sapat na pera o tirahan at nangangailangan ng tulong.",
      syllables: "pu-LU-bi",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/PULUBI.aac') // Adjust the path to your audio file
    },
    {
      word: "batas",
      definition: "Mga patakaran o alituntunin na dapat sundin ng lahat.",
      syllables: "ba-TÁS",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/BATAS.aac') // Adjust the path to your audio file
    },
    {
      word: "kapangyarihan",
      definition: "Ang lakas o kontrol na mayroon ang isang tao o grupo na maaaring gamitin upang impluwensyahan ang iba.",
      syllables: "ka-pang-ya-RI-han",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAYABAS/KAPANGYARIHAN.aac') // Adjust the path to your audio file
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
          storyId="alamatngbayabas"
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

