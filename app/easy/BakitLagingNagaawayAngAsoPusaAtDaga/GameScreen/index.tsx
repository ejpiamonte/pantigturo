import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Bakit Laging Nagaaway Ang Aso, Pusa At Daga!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "hayop",
      definition: "Ito ay mga nilalang na hindi tao, kabilang ang mga aso, pusa, at daga, na nabubuhay sa mundo.",
      syllables: "HA-yop",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/HAYOP.aac') // Adjust the path to your audio file
    },
    {
      word: "daga",
      definition: "Ito ay isang uri ng maliit na hayop na karaniwang nakatira sa mga lugar na madudumi.",
      syllables: "da-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/DAGA.aac') // Adjust the path to your audio file
    },
    {
      word: "pintuan",
      definition: "Ito ay isang bahagi ng bahay na ginagamit upang pumasok at lumabas. Sa kwento, ang ingay sa pintuan ang naging dahilan ng alitan sa pagitan ng mga hayop.",
      syllables: "pin-TU-an",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/PINTUAN.aac') // Adjust the path to your audio file
    },
    {
      word: "daigdig",
      definition: "Ito ay ang mundo o planeta kung saan naninirahan ang mga tao at hayop.",
      syllables: "da-ig-DIG",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/DAIGDIG.aac') // Adjust the path to your audio file
    },
    {
      word: "buto",
      definition: "Ito ay ang matitigas na bahagi ng katawan ng hayop na bumubuo ng balangkas. Sa kwento, ang buto ay simbolo ng pagkakasira ng ugnayan ng mga hayop.",
      syllables: "bu-TÒ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/BUTO.aac') // Adjust the path to your audio file
    },
    {
      word: "bahay",
      definition: "Ito ay isang istraktura kung saan naninirahan ang mga tao at maaaring maging tahanan ng mga hayop.",
      syllables: "BA-hay",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/BAHAY.aac') // Adjust the path to your audio file
    },
    {
      word: "amo",
      definition: "Ito ay isang tao na may kapangyarihan o nagmamay-ari ng mga alagang hayop. Sa kwento, ito ang naghiwalay sa mga hayop na nag-aaway.",
      syllables: "A-mo",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/AMO.aac') // Adjust the path to your audio file
    },
    {
      word: "aso",
      definition: "Ito ay isang uri ng hayop na karaniwang kaibigan ng tao at kilalang kilalang alaga. Sa kwento, siya ay nagdala ng buto para sa kanyang mga kaibigang hayop.",
      syllables: "A-so",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/ASO.aac') // Adjust the path to your audio file
    },
    {
      word: "paraiso",
      definition: "Ito ay isang lugar na kung saan nararanasan ang kasiyahan, kapayapaan, at kaligayahan.",
      syllables: "pa-ra-I-so",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ASO PUSA DAGA/PARAISO.aac') // Adjust the path to your audio file
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
          storyId="bakitlagingnagaawayangasopusaatdaga"
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

