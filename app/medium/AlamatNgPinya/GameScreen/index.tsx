import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Pinya!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "ina",
      definition: "Ang babaeng nagluwal at nag-alaga sa isang anak at pinakamahalagang tagapag-alaga at gabay sa buhay ng isang pamilya.",
      syllables: "i-NÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/INA.aac') // Adjust the path to your audio file
    },
    {
      word: "anak",
      definition: "Ang bunga ng pagmamahal at pag-aalaga ng mga magulang.",
      syllables: "a-NÁK",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/ANAK.aac') // Adjust the path to your audio file
    },
    {
      word: "mata",
      definition: "Bahagi ng katawan ng tao na ginagamit sa paningin.",
      syllables: "ma-TÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/MATA.aac') // Adjust the path to your audio file
    },
    {
      word: "sandok",
      definition: "Isang kagamitan sa kusina na ginagamit upang kumuha o maglagay ng pagkain.",
      syllables: "san-DÒK",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/SANDOK.aac') // Adjust the path to your audio file
    },
    {
      word: "pagsisi",
      definition: "Ang damdamin ng panghihinayang o paghahangad ng ibang bagay na mayroon ang iba.",
      syllables: "pag-si-SÎ-si",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/PAGSISI.aac') // Adjust the path to your audio file
    },
    {
      word: "bunga",
      definition: "Ang produktong lumalabas mula sa isang halaman matapos ang proseso ng pagbubunga o pagbubuklod.",
      syllables: "BU-nga",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/BUNGA.aac') // Adjust the path to your audio file
    },
    {
      word: "posporo",
      definition: "Mga maliliit na kahoy na may kemikal na maaaring pambuhay ng apoy kapag sinilaban.",
      syllables: "PÒS-po-RÒ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/POSPORO.aac') // Adjust the path to your audio file
    },
    {
      word: "halaman",
      definition: "Mga buhay na organismo na kadalasang may mga dahon, sanga, at mga bulaklak.",
      syllables: "ha-LA-man",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/HALAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "pinya",
      definition: "Isang uri ng prutas na ang hugis ay parang ulo at napapaligiran ng mga mata sa balat.",
      syllables: "pin-YÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG PINYA/PINYA.aac') // Adjust the path to your audio file
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
          storyId="alamatngpinya"
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

