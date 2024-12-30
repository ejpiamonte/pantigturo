import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Bakit Dala-Dala Ni Pagong Ang Kanyang Bahay?!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Lakanlumatay",
      definition: "Isang pinuno o lider na may kapangyarihan at awtoridad sa isang lugar o komunidad.",
      syllables: "la-KÁN lu-MA-tay",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/LAKAN LUMATAY.aac') // Adjust the path to your audio file
    },
    {
      word: "Bathala",
      definition: "Ito ang tinuturing na maykapal, isang kataas-taasang nilalang o diyos.",
      syllables: "bat-HA-lá",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/BATHALA.aac') // Adjust the path to your audio file
    },
    {
      word: "Lanubo",
      definition: "Isang uri ng latigo o panghampas na gawa sa balahibo ng bayabas.",
      syllables: "la-NU-bò",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/LANUBO.aac') // Adjust the path to your audio file
    },
    {
      word: "Barangaw",
      definition: "Isang bathalang maykapal na nagpapakita sa anyo ng bahaghari o sultan.",
      syllables: "ba-ra-NGÁW",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/BARANGAW.aac') // Adjust the path to your audio file
    },
    {
      word: "Matibag",
      definition: "Isang tauhan na sumasakop sa mabangis na gawa, na nagpapahirap sa mga alipin at nagtutulak sa kanila sa kahirapan at pagdurusa.",
      syllables: "mag-BI-tag",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/MATIBAG.aac') // Adjust the path to your audio file
    },
    {
      word: "Katapatan",
      definition: "Ang pagiging tapat, matapat, o hindi nagpapabaya sa tungkulin o pangako.",
      syllables: "ka-ta-PA-tan",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/KATAPATAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Tungkod",
      definition: "Isang uri ng patpat o piraso ng kahoy na may mahabang tangkay at ginagamit bilang tulong sa paglakad o pagsuporta sa katawan habang naglalakad.",
      syllables: "tung-KÒD",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/TUNGKOD.aac') // Adjust the path to your audio file
    },
    {
      word: "Alipin",
      definition: "Mga taong pinagsisilbihan ang iba nang walang kalayaan o kagustuhan, na nagdaranas ng hirap at pagdurusa dahil sa pang-aapi ng kanilang mga amo.",
      syllables: "a-LI-pin",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/ALIPIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Kalupitan",
      definition: "Ang pagiging mabagsik, malupit, o walang habag sa iba.",
      syllables: "ka-lu-pi-TÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/KALUPITAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Parusa",
      definition: "Ito ang kahihinatnan na nararanasan dahil sa masamang gawa o kilos.",
      syllables: "pa-RU-sa",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BAKIT DALA NI PAGONG ANG KANYANG BAHAY/PARUSA.aac') // Adjust the path to your audio file
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
          storyId="bakitdaladalanipagongangkanyangbahay"
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

