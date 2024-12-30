import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Butiki!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "gubat",
      definition: "Lugar kung saan namumuhay si Juan at ang kanyang Ina. Simbolo ito ng kalikasan at kabundukan.",
      syllables: "GU-bat",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/GUBAT.aac') // Adjust the path to your audio file
    },
    {
      word: "butiki",
      definition: "Si Juan ay naging ganito bilang parusa sa kanyang kasalanan.",
      syllables: "bu-ti-KÎ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/BUTIKI.aac') // Adjust the path to your audio file
    },
    {
      word: "dilim",
      definition: "Ito ay tumutukoy sa paglubog ng araw o ang pagdating ng gabi. Simbolo rin ito ng kawalan ng liwanag.",
      syllables: "di-LÎM",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/DILIM.aac') // Adjust the path to your audio file
    },
    {
      word: "helena",
      definition: "Ito ang pangalan ng dalagang minamahal ni Juan sa kwento.",
      syllables: "he-le-na",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/HELENA.aac') // Adjust the path to your audio file
    },
    {
      word: "puso",
      definition: "Simbolo ng pagmamahal, pagbibigay, at pagpapatawad. Ito ang hiningi ni Helena kay Juan galing sa kanyang ina bilang patunay ng kanyang pag-ibig.",
      syllables: "pU-sò",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/PUSO.aac') // Adjust the path to your audio file
    },
    {
      word: "gabi",
      definition: "Ito ay panahon ng dilim o gabi na maaaring magdulot ng kakaibang mga pangyayari sa kwento.",
      syllables: "ga-BÎ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/GABI.aac') // Adjust the path to your audio file
    },
    {
      word: "diyos",
      definition: "Ito ang pinaniniwalaang may pinakamataas na kapangyarihan na karaniwang kinakapitan ng mga karakter sa panahon ng pagsubok.",
      syllables: "DI-YÒS",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/DIYOS.aac') // Adjust the path to your audio file
    },
    {
      word: "kisame",
      definition: "Ito ay bahagi ng tahanan kung saan nagtago si Juan nang magbago ang kanyang anyo.",
      syllables: "KÎ-sa-me",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/KISAME.aac') // Adjust the path to your audio file
    },
    {
      word: "bahay",
      definition: "Ito ang tahanan nina Juan at ng kanyang ina, at naging saksi sa mga pangyayari sa kwento.",
      syllables: "BA-hay",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG BUTIKI/BAHAY.aac') // Adjust the path to your audio file
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
          storyId="alamatngbutiki"
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

