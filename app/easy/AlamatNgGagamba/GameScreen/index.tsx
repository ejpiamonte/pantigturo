import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Gagamba!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "tela",
      definition: "Ito ay ang materyal na ginagamit sa paggawa ng kasuotan o iba pang produkto. Sa kwento, ito ay ang materyal na hinahabi ng mga magulang ni Amba at ng kanyang sarili.",
      syllables: "TE-la",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/TELA.aac') // Adjust the path to your audio file
    },
    {
      word: "bihasa",
      definition: "Ito ay ang katangiang nagpapakita ng kahusayan o kasanayan sa isang partikular na gawain.",
      syllables: "bi-ha-SÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/BIHASA.aac') // Adjust the path to your audio file
    },
    {
      word: "panalo",
      definition: "Ito ay ang pagkakamit ng tagumpay o pagiging unang pumapalo sa isang laban.",
      syllables: "pa-NA-lo",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/PANALO.aac') // Adjust the path to your audio file
    },
    {
      word: "anak",
      definition: "Ito ay ang bunga ng pagsasama ng mag-asawa o mga magulang.",
      syllables: "a-NÁK",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/ANAK.aac') // Adjust the path to your audio file
    },
    {
      word: "lumaki",
      definition: "Ito ay ang pag-angat o pagdami ng sukat o bilang.",
      syllables: "lu-ma-KÎ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/LUMAKI.aac') // Adjust the path to your audio file
    },
    {
      word: "amba",
      definition: "Ito ang pangalan ng bida sa kwento, isang magaling na tagahabi na naging mayabang dahil sa kanyang kahusayan.",
      syllables: "am-BÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/AMBA.aac') // Adjust the path to your audio file
    },
    {
      word: "gagamba",
      definition: "Ito ay isang uri ng insekto na kilala sa paggawa ng kanilang mga kumplikadong tirahan.",
      syllables: "ga-gam-BÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/GAGAMBA.aac') // Adjust the path to your audio file
    },
    {
      word: "matanda",
      definition: "Ito ay isang tao na may edad na, kadalasang may kaalaman at karunungan.",
      syllables: "ma-tan-DÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/MATANDA.aac') // Adjust the path to your audio file
    },
    {
      word: "diyos",
      definition: "Ito ay isang banal o makapangyarihang nilalang na may kapangyarihan sa mitolohiya o relihiyon. Sa kwento, ito ang nagpasyang turuan si Amba ng leksyon dahil sa kanyang kayabangan.",
      syllables: "di-YÒS",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG GAGAMBA/DIYOS.aac') // Adjust the path to your audio file
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
          storyId="alamatnggagamba"
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

