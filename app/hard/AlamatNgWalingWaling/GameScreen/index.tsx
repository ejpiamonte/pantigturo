import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Waling-Waling!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Rahamusukul",
      definition: "Ang pinuno ng nayon ng Dayaw at kapatid ni Datu Ambungan.",
      syllables: "ra-HA mu-su-KUL",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/RAHA MUSUKUL.aac') // Adjust the path to your audio file
    },
    {
      word: "Tribo",
      definition: "Isang grupo ng mga tao na may parehong kultura at tradisyon.",
      syllables: "TRI-bo",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/TRIBO.aac') // Adjust the path to your audio file
    },
    {
      word: "Datukinadmanon",
      definition: "Ang tagapayo ni Raha Musukul na nagbabala sa kanya tungkol sa delikadong plano ng paghihiganti laban kay Raha Makalisang.",
      syllables: "DA-tu KI-nad-MA-NÒN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/DATU KINADMANON.aac') // Adjust the path to your audio file
    },
    {
      word: "Raniwaling",
      definition: "Ang asawa ni Raha Musukul na nagmamahal at nag-aalala para sa kaligtasan ng kanyang asawa.",
      syllables: "RA-nî WÁ-ling",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/RANI WALING.aac') // Adjust the path to your audio file
    },
    {
      word: "Walingwaling",
      definition: "Isang kakaibang bulaklak na natagpuan ni Rani Waling sa kanyang paglalakbay.",
      syllables: "WÁ-ling WA-ling",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/WALING WALING.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagsubok",
      definition: "Ang mga hamon o pagkakataon na nagbibigay-daan sa pag-unlad o pagbabago.",
      syllables: "pag-SU-bok",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/PAGSUBOK.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagtangis",
      definition: "Ito ay tumutukoy sa pag-iyak o pagluha nang malakas.",
      syllables: "pag-TA-ngis",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/PAGTANGIS.aac') // Adjust the path to your audio file
    },
    {
      word: "Nayon",
      definition: "Ito ang tawag sa isang maliit na pamayanan o barangay.",
      syllables: "NA-yon",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/NAYON.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagdadalamhati",
      definition: "IIsang salita na nagpapahayag ng simpatiya sa mga taong nawalan ng mahal sa buhay.",
      syllables: "pag-da-da-lam-HA-tî",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/PAGDADALAMHATI.aac') // Adjust the path to your audio file
    },
    {
      word: "datuambungan",
      definition: "Ang kapatid ni Raha Musukul na namatay sa kamay ni Raha Makalisang, na nagtulak sa Raha na hanapin ang katarungan.",
      syllables: "DA-tu am-BU-NGÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG WALING WALING/DATU AMBUNGAN.aac') // Adjust the path to your audio file
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
          storyId="alamatngwalingwaling"
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

