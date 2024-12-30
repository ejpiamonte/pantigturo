import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Si Langgam At Si Tipaklong!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Langgam",
      definition: "Isang mabait at maingat na ibon na palaging nag-iipon ng pagkain habang maganda ang panahon.",
      syllables: "lang-GÁM",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/LANGGAM.aac') // Adjust the path to your audio file
    },
    {
      word: "Nagiba",
      definition: "Ito ay ang pag-unlad mula sa dating kalagayan patungo sa bagong sitwasyon o karanasan.",
      syllables: "nag-i-BÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/NAGIBA.aac') // Adjust the path to your audio file
    },
    {
      word: "Natutunan",
      definition: "Ito ay ang pagkakaroon ng kaalaman o kasanayan sa pamamagitan ng karanasan o pag-aaral.",
      syllables: "na-tu-TU-nan",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/NATUTUNAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Naghahanap",
      definition: "Ito ay ang paggawa ng kilos upang makakita o makakuha ng isang bagay.",
      syllables: "nag-ha-ha-NÁP",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/NAGHAHANAP.aac') // Adjust the path to your audio file
    },
    {
      word: "Pinagiipunan",
      definition: "Ito ay ang paglalaan ng pera o bagay para sa hinaharap.",
      syllables: "pi-nag-i-i-PU-nan",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/PINAGIIPUNAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Tipaklong",
      definition: "Isang masaya at kalakbay na insekto na hindi mahilig mag-ipon ng pagkain at mas gusto ang kasayahan kaysa sa paghahanda para sa hinaharap.",
      syllables: "tik-pak-LÒNG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/TIPAKLONG.aac') // Adjust the path to your audio file
    },
    {
      word: "Panahon",
      definition: "Ang takdang oras o yugto ng kaganapan ng isang pangyayari o klima.",
      syllables: "pa-na-HÒN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/PANAHON.aac') // Adjust the path to your audio file
    },
    {
      word: "Makibahagi",
      definition: "Ito ay ang pagsali o pagtulong sa isang gawain o pangyayari.",
      syllables: "ma-ki-ba-HA-gi",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/MAKIBAHAGI.aac') // Adjust the path to your audio file
    },
    {
      word: "Bagyo",
      definition: "Isang malakas na uri ng panahon na may kasamang malakas na hangin, ulan, kidlat, at kulog.",
      syllables: "bag-YÒ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/LANGGAM AT TIPAKLONG/BAGYO.aac') // Adjust the path to your audio file
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
          storyId="langgamatsitipaklong"
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

