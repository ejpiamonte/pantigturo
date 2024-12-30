import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ni Maria Makiling!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Dayangmakiling",
      definition: "Ang ina ni Maria, isang pangunahing karakter na kinilalang bathala o engkantada sa kwento.",
      syllables: "DA-yang ma-KI-ling",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/DAYANG MAKILING.aac') // Adjust the path to your audio file
    },
    {
      word: "Mutya",
      definition: "Isang salita na nangangahulugang kakila-kilabot na kagandahan o kabaitan.",
      syllables: "mut-YÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/MUTYA.aac') // Adjust the path to your audio file
    },
    {
      word: "Engkantado",
      definition: "Isang nilalang sa mitolohiya o kuwentong-bayan na may kapangyarihan o katangiang mahiwaga.",
      syllables: "eng-kan-TA-do",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/ENGKANTADO.aac') // Adjust the path to your audio file
    },
    {
      word: "Tahanan",
      definition: "Ang lugar kung saan naninirahan at kung saan nagmumula ang pagmamahal at pag-aalaga.",
      syllables: "ta-HA-nan",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/TAHANAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagpapalitan",
      definition: "Isang pangyayari kung saan ang mga tao ay nagtitipon upang magpalitan o magbenta ng kanilang mga produkto.",
      syllables: "pag-pa-pa-LI-tan",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/PAGPAPALITAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Kasakiman",
      definition: "Ito ay kawalan ng kasiyahan sa kung ano ang mayroon ka at ang hangaring magkaroon pa ng higit pa.",
      syllables: "ka-sa-ki-MÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/KASAKIMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Gatpanahon",
      definition: "Ang ama ni Maria, isa ring kinilalang bathala o engkantado sa kwento.",
      syllables: "gat pa-na-HÒN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/GAT PANAHON.aac') // Adjust the path to your audio file
    },
    {
      word: "Lakas",
      definition: "Ang pisikal o mental na kapangyarihan o kakayahan ng isang tao.",
      syllables: "la-KÁS",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/LAKAS.aac') // Adjust the path to your audio file
    },
    {
      word: "Tagapamahala",
      definition: "Isang tao na may responsibilidad sa pamamahala o pangangasiwa sa isang lugar o samahan.",
      syllables: "ta-ga-pa-ma-HA-lá",
      pronunciationClip: require('../../../../assets/SALITA/HARD/MARIA MAKILING/TAGAPAMAHALA.aac') // Adjust the path to your audio file
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
          storyId="mariamakiling"
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

