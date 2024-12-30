import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Aso!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "matibay",
      definition: "Ito ay ang katangian na pagiging matatag, lalo na sa panahon ng pagsubok.",
      syllables: "ma-TI-bay",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/MATIBAY.aac') // Adjust the path to your audio file
    },
    {
      word: "lito",
      definition: "Ito ay ang pangalan ng isa sa mga tauhan sa kwento, ang kaibigan ni Masong na naging malungkot sa pagkawala nito.",
      syllables: "li-tò",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/LITO.aac') // Adjust the path to your audio file
    },
    {
      word: "kaibigan",
      definition: "Ito ay ang taong may magandang relasyon at samahan sa isa`t isa. Sa kwento, ito ang nagsilbing pundasyon ng kanilang kwento.",
      syllables: "ka-i-BI-gan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/KAIBIGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "kalusugan",
      definition: "Ito ay ang kalagayan ng katawan na malusog at walang sakit.",
      syllables: "ka-lu-SU-gan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/KALUSUGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "masong",
      definition: "Ito ay ang pangalan ng isa sa mga tauhan sa kwento, ang kaibigan ni Lito na namatay.",
      syllables: "ma-SÒNG",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/MASONG.aac') // Adjust the path to your audio file
    },
    {
      word: "karamay",
      definition: "Ito ay ang taong kasama at sumusuporta sa isa sa oras ng pangangailangan.",
      syllables: "ka-RA-may",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/KARAMAY.aac') // Adjust the path to your audio file
    },
    {
      word: "buhay",
      definition: "Sa kwento, ang pagkawala ni Masong ay nagdulot ng kalungkutan sa buhay ni Lito.",
      syllables: "BU-hay",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/BUHAY.aac') // Adjust the path to your audio file
    },
    {
      word: "puntod",
      definition: "Ito ay ang lugar kung saan inililibing ang mga patay. Sa kwento, ito ang naging lugar ng alaala at pagdalaw ni Lito.",
      syllables: "pun-TÒD",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/PUNTOD.aac') // Adjust the path to your audio file
    },
    {
      word: "aso",
      definition: "Ito ay isang uri ng hayop na karaniwang itinuturing na kaibigan ng tao at nagiging loyal sa kanilang may-ari.",
      syllables: "A-so",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ASO/ASO.aac') // Adjust the path to your audio file
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
          storyId="alamatngaso"
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

