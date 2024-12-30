import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Si Pagong At Si Matsing!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Pagong",
      definition: "Isang karakter na mayroong katangiang maalalahanin at matulungin.",
      syllables: "pa-GÒNG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/PAGONG.aac') // Adjust the path to your audio file
    },
    {
      word: "Mangislawkalabaw",
      definition: "Isang karakter na binanggit ni Pagong bilang isang tagapayo.",
      syllables: "mang IS-law ka-la-BÁW",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/MANG ISLAW KALABAW.aac') // Adjust the path to your audio file
    },
    {
      word: "Tinik",
      definition: "Ito ay matutulis na piraso ng kahoy, halamang tumutubo, o iba pang bagay na maaaring makasakit kapag hinawakan o inabot.",
      syllables: "ti-NÎK",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/TINIK.aac') // Adjust the path to your audio file
    },
    {
      word: "Panloloko",
      definition: "Ang paggamit ng katalinuhan o kasinungalingan upang makapanakit o makakuha ng pakinabang sa iba.",
      syllables: "pan-lo-LO-ko",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/PANLOLOKO.aac') // Adjust the path to your audio file
    },
    {
      word: "Ugat",
      definition: "Ang bahagi ng isang halaman na karaniwang nagsisilbing tulong sa pagpapakain ng sustansiya mula sa lupa.",
      syllables: "u-GÁT",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/UGAT.aac') // Adjust the path to your audio file
    },
    {
      word: "Alingmuning",
      definition: "Isang karakter sa kuwento na nagmamay-ari ng supot ng pansit na ibinigay sa Pagong at Matsing.",
      syllables: "A-ling MU-NÎNG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/ALING MUNING.aac') // Adjust the path to your audio file
    },
    {
      word: "Alok",
      definition: "Ito ay tumutukoy sa pag-aanyaya o pagbibigay ng pagkakataon o serbisyo.",
      syllables: "a-LÒK",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/ALOK.aac') // Adjust the path to your audio file
    },
    {
      word: "Matsing",
      definition: "Isang karakter sa kwento na mautak at mapaglaro.",
      syllables: "mat-SÎNG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/MATSING.aac') // Adjust the path to your audio file
    },
    {
      word: "Pansit",
      definition: "Isang uri ng lutuin na binubo ng mga kalahating maninipis na kung saan ang bawat hibla ay gawa sa harina.",
      syllables: "pan-SÎT",
      pronunciationClip: require('../../../../assets/SALITA/HARD/PAGONG AT MATSING/PANCIT.aac') // Adjust the path to your audio file
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
          storyId="pagongatmatsing"
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

