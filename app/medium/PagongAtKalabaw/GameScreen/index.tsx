import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Pagong At Ang Kalabaw!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "pagong",
      definition: "Ang karakter na matalino at mahinahon na pinili ang talino sa halip na lakas.",
      syllables: "pa-GÒNG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/PAGONG.aac') // Adjust the path to your audio file
    },
    {
      word: "kalabaw",
      definition: "Isang malaking hayop na may balahibo at mahahabang sungay, ginagamit sa pagtatrabaho sa bukid.",
      syllables: "ka-la-BÁW",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/KALABAW.aac') // Adjust the path to your audio file
    },
    {
      word: "tadyak",
      definition: "Ang paggamit ng paa upang saktan o sipain ang isang bagay o tao.",
      syllables: "tad-YÁK",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/TADYAK.aac') // Adjust the path to your audio file
    },
    {
      word: "likod",
      definition: "Ang bahagi ng katawan kung saan tinadyakan ni Kalabaw si Pagong.",
      syllables: "li-KÒD",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/LIKOD.aac') // Adjust the path to your audio file
    },
    {
      word: "kondisyon",
      definition: "Ang mga patakaran o alituntunin ng isang labanan o paligsahan.",
      syllables: "kon-di-SYÒN",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/KONDISYON.aac') // Adjust the path to your audio file
    },
    {
      word: "pumihit",
      definition: "Ang paggalaw o pag-ikot patungo sa ibang direksyon.",
      syllables: "pu-MÎ-hit",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/PUMIHIT.aac') // Adjust the path to your audio file
    },
    {
      word: "galit",
      definition: "Ang emosyonal na damdamin ng pagkakaroon ng galit o poot sa isang sitwasyon o tao.",
      syllables: "GÁ-lit",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/GALIT.aac') // Adjust the path to your audio file
    },
    {
      word: "kaibigan",
      definition: "Isang tao o hayop na malapit sa puso at nagbibigay ng suporta, kasiyahan, at tulong sa iba.",
      syllables: "ka-i-BI-gan",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/KAIBIGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "karera",
      definition: "Isang paligsahan o labanan kung saan nagtutunggalian ang mga kalahok sa pagtakbo.",
      syllables: "ka-RE-ra",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/PAGONG AT KALABAW/KARERA.aac') // Adjust the path to your audio file
    }
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
          storyId="pagongatkalabaw"
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

