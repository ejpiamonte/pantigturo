import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Daga At Ang Leon';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "daga",
      definition: "Ito ay isang maliit na hayop na naglaro sa ibabaw ng tulog na leon. Hinuli ito ng leon at hawak-hawak ang buntot nito.",
      syllables: "da-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/DAGA.aac') // Adjust the path to your audio file
    },
    {
      word: "lubid",
      definition: "Ito ay isang panggatong na ginagamit ng daga upang tulungan ang leon na makatakas sa lambat.",
      syllables: "LU-bid",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/LUBID.aac') // Adjust the path to your audio file
    },
    {
      word: "gubat",
      definition: "Ito ay isang lugar na puno ng mga puno at halaman. Sa kwento, ito ang lugar kung saan nagaganap ang mga pangyayari kung saan nahuli ang leon ng lambat.",
      syllables: "GU-bat",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/GUBAT.aac') // Adjust the path to your audio file
    },
    {
      word: "leon",
      definition: "Ito ang hayop na tinulungan ng daga sa huli matapos itong madala sa lambat na bitag ng mga mangangaso.",
      syllables: "le-ÒN",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/LEON.aac') // Adjust the path to your audio file
    },
    {
      word: "tulog",
      definition: "Sa kwento, ito ang kalagayan ng leon nang hindi napapansin ang daga na naglalaro sa ibabaw nito.",
      syllables: "TU-log",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/TULOG.aac') // Adjust the path to your audio file
    },
    {
      word: "buntot",
      definition: "Ito ay ang hulihan o dulo ng isang hayop. Sa kwento, ito ang hinawakan ng leon na bahagi ng katawan ng daga matapos itong hulihin.",
      syllables: "bun-TÒT",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/BUNTOT.aac') // Adjust the path to your audio file
    },
    {
      word: "panahon",
      definition: "Ito ay ang takdang oras o yugto sa kasaysayan.",
      syllables: "pa-na-HÒN",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/PANAHON.aac') // Adjust the path to your audio file
    },
    {
      word: "tuktok",
      definition: "Ito ang mataas na bahagi o pinakadulo ng isang bagay. Sa kwento, ang daga ay umakyat sa likuran ng leon hanggang sa makarating dito.",
      syllables: "tuk-TÒK",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/TUKTOK.aac') // Adjust the path to your audio file
    },
    {
      word: "takot",
      definition: "Ito ay ang damdaming nararamdaman kapag mayroong panganib o pangamba.",
      syllables: "ta-KÒT",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ANG DAGA AT ANG LEON/TAKOT.aac') // Adjust the path to your audio file
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
          storyId="angdagaatangleon"
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

