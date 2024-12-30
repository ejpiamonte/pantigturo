import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Paruparo At Langgam!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "lungga",
      definition: "Ito ay isang pook kung saan naninirahan o nagtatago ang mga hayop, lalo na ang mga langgam.",
      syllables: "lung-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/LUNGGA.aac') // Adjust the path to your audio file
    },
    {
      word: "maganda",
      definition: "Ito ay isang katangian o kalagayan na may kaaya-aya o kariktan. Sa kwento, isang uri nito ay ang pagiging busog at mapayapa ni Langgam sa kaniyang lungga.",
      syllables: "ma-gan-DÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PARUPARO/MAGANDA.aac') // Adjust the path to your audio file
    },
    {
      word: "pagkain",
      definition: "Ito ay anumang sustansiyang kinakain ng tao o hayop upang mabuhay at magtagal.",
      syllables: "pag-KA-in",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/PAGKAIN.aac') // Adjust the path to your audio file
    },
    {
      word: "mayabang",
      definition: "Ito ay isang katangian ng pagmamataas ng loob sa sarili.",
      syllables: "ma-YA-bang",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/MAYABANG.aac') // Adjust the path to your audio file
    },
    {
      word: "problema",
      definition: "Ito ay isang suliranin o hamon na kinakaharap ng isang tao o grupo ng mga tao.",
      syllables: "prob-LE-ma",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/PROBLEMA.aac') // Adjust the path to your audio file
    },
    {
      word: "paligid",
      definition: "Sa kwento, ito ay ang kagubatan na pinagtataguan ng mga langgam at iba pang mga hayop.",
      syllables: "pa-LI-gid",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/PALIGID.aac') // Adjust the path to your audio file
    },
    {
      word: "kaibigan",
      definition: "Ito ay isang taong may magandang relasyon at samahan sa isa`t isa.",
      syllables: "ka-i-BI-gan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/KAIBIGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "langgam",
      definition: "Sa kwento, siya ay isang insekto na nagtatrabaho nang husto upang maghanda ng pagkain bago dumating ang tag-ulan.",
      syllables: "lang-GÁM",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/LANGGAM.aac') // Adjust the path to your audio file
    },
    {
      word: "lugar",
      definition: "Ito ay isang tiyak na pook na tinutukoy sa kwento.",
      syllables: "lu-GÁR",
      pronunciationClip: require('../../../../assets/SALITA/EASY/PARUPARO AT LANGGAM/LUGAR.aac') // Adjust the path to your audio file
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
          storyId="paruparoatlanggam"
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

