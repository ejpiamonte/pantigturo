import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Bulkang Mayon!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Daragangmagayon",
      definition: "Ang pangunahing karakter sa kwento, isang dalagang may kahanga-hangang kagandahan.",
      syllables: "da-ra-gang ma-GA-yon",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/DARAGANG MAGAYON.aac') // Adjust the path to your audio file
    },
    {
      word: "Espada",
      definition: "Isang uri ng sandata na may mahabang talim na karaniwang ginagamit sa labanan.",
      syllables: "es-PA-da",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/ESPADA.aac') // Adjust the path to your audio file
    },
    {
      word: "Kasal",
      definition: "Ang seremonya o ritwal kung saan ang dalawang tao ay pinagsasama sa pamamagitan ng pagsasagawa ng mga panata at pangako sa harap ng Diyos o ng kanilang komunidad.",
      syllables: "ka-SÁL",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/KASAL.aac') // Adjust the path to your audio file
    },
    {
      word: "Raha",
      definition: "Ang ama ni Daragang Magayon, na siyang hari ng kaharian ng Albay.",
      syllables: "RA-ha",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/RAHA.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagaalala",
      definition: "Ang nararamdaman na tensyon o kaba dahil sa isang partikular na sitwasyon o pangyayari.",
      syllables: "pag-Á-a-la-LÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/PAGAALALA.aac') // Adjust the path to your audio file
    },
    {
      word: "Mayon",
      definition: "Ang bundok na itinayo sa lugar kung saan nilibing sina Daragang Magayon at Gat Malaya, na nagiging simbolo ng alaala at pag-ibig nila.",
      syllables: "MA-yon",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/MAYON.aac') // Adjust the path to your audio file
    },
    {
      word: "Bundok",
      definition: "Isang uri ng anyong lupa na may mataas na elevasyon at lawak, karaniwang may malawak na basang lupa at nagbibigay-daan sa iba`t ibang uri ng halaman at hayop.",
      syllables: "bun-DÒK",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/BUNDOK.aac') // Adjust the path to your audio file
    },
    {
      word: "Kauen",
      definition: "Ang iba pang manliligaw ni Daragang Magayon, anak ng mayamang Raha sa kalapit na kaharian.",
      syllables: "KA-uen",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/KAUEN.aac') // Adjust the path to your audio file
    },
    {
      word: "Ibalita",
      definition: "Ito ay pagpaparating o pagsasalaysay ng mga pangyayari o balita sa iba.",
      syllables: "i-ba-LI-tá",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/IBALITA.aac') // Adjust the path to your audio file
    },
    {
      word: "Gatmalaya",
      definition: "Ang manliligaw ni Daragang Magayon mula sa malayong kaharian.",
      syllables: "gat MA-la-yá",
      pronunciationClip: require('../../../../assets/SALITA/HARD/BULKANG MAYON/GAT MALAYA.aac') // Adjust the path to your audio file
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
          storyId="bulkangmayon"
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

