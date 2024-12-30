import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Mag-Anak Na Langgam!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "langgam",
      definition: "Ang karakter na hayop na naghahakot ng pagkain para sa kanilang pamilya.",
      syllables: "lang-GÁM",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/LANGGAM.aac') // Adjust the path to your audio file
    },
    {
      word: "lungga",
      definition: "Ang tirahan o tahanan ng mga langgam, na kanilang pinagtataguan.",
      syllables: "lung-GÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/LUNGGA.aac') // Adjust the path to your audio file
    },
    {
      word: "paghahakot",
      definition: "Ang pagdadala ng mga bagay, na ginawa ng mag-anak na langgam sa kanilang pagkain.",
      syllables: "pag-ha-HA-kot",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/PAGHAHAKOT.aac') // Adjust the path to your audio file
    },
    {
      word: "tulungan",
      definition: "Ang pagtulong o pagtutulungan ng dalawang tao o hayop upang malampasan ang isang suliranin.",
      syllables: "tu-LU-ngan",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/TULUNGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "hanapin",
      definition: "Ang pagsusumikap na matukoy ang kinaroroonan ng isang tao o bagay.",
      syllables: "ha-NA-pin",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/HANAPIN.aac') // Adjust the path to your audio file
    },
    {
      word: "kendi",
      definition: "Isang uri ng matamis na pagkain na nakita ng bunsong langgam at kanyang ninanais na kunin.",
      syllables: "KEN-di",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/KENDI.aac') // Adjust the path to your audio file
    },
    {
      word: "pook",
      definition: "Isang lugar o lokasyon, na sinadya ng Amang Langgam upang hanapin ang kanyang anak.",
      syllables: "po-ÒK",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/POOK.aac') // Adjust the path to your audio file
    },
    {
      word: "kanal",
      definition: "Isang maliit na daanan o agos ng tubig na maaring maging panganib para sa mga langgam.",
      syllables: "ka-NÁL",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/KANAL.aac') // Adjust the path to your audio file
    },
    {
      word: "tagulan",
      definition: "Ang panahon kung saan inaasahan ang pag-ulan, na nagtutulak sa mga langgam na maghanda ng pagkain para sa kanilang pinagtataguan.",
      syllables: "tag-u-LÁN",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/MAGANAK NA LANGGAM/TULUNGAN.aac') // Adjust the path to your audio file
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
          storyId="maganaknalanggam"
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

