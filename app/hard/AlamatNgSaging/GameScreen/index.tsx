import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Alamat Ng Saging!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Tina",
      definition: "Isang magandang dalaga na may mabuting kalooban at matatag na paninindigan.",
      syllables: "TI-ná",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/TINA.aac') // Adjust the path to your audio file
    },
    {
      word: "Rading",
      definition: "Isang simpleng magsasaka na tapat at nagmamahal kay Tina.",
      syllables: "ra-DÎNG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/RADING.aac') // Adjust the path to your audio file
    },
    {
      word: "Inaamin",
      definition: "Ito ay pagpapahayag o pag-amin sa katotohanan.",
      syllables: "i-na-A-MÎN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/INAAMIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pumayag",
      definition: "Ito ay pagbibigay ng pahintulot sa isang bagay.",
      syllables: "pu-MÁ-yag",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/PUMAYAG.aac') // Adjust the path to your audio file
    },
    {
      word: "Nanliligaw",
      definition: "Ang pagpapakita ng romantikong interes o pagnanais na maging kasintahan ng isang tao.",
      syllables: "nan-li-LI-gaw",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/NANLILIGAW.aac') // Adjust the path to your audio file
    },
    {
      word: "Donbruno",
      definition: "Isang mayamang binata na nagkagusto kay Tina at nagpakita ng interes sa kanya.",
      syllables: "don BRU-no",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/DON BRUNO.aac') // Adjust the path to your audio file
    },
    {
      word: "Napagaalamanan",
      definition: "Ito ay tumukoy sa paglalarawan ng isang pangyayari, sitwasyon, o karanasan.",
      syllables: "na-pag-a-la-man-ÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/NAPAGAALAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Napansin",
      definition: "Ito ay tumutukoy sa pagtuklas o pag-obserba sa isang bagay o pangyayari.",
      syllables: "NÁ-pan-SÎN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/NAPANSIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagpapakilala",
      definition: "Isang proseso na pagpapahayag ng kanyang sarili sa iba.",
      syllables: "pag-pa-pa-ki-LA-la",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/PAGPAPAKILALA.aac') // Adjust the path to your audio file
    },
    {
      word: "nanlalamig",
      definition: "Ito ay tumutukoy sa pagkakaroon ng malamig na pakiramdam.",
      syllables: "nan-la-la-MÎG",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAGING/NANLALAMIG.aac') // Adjust the path to your audio file
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
          storyId="alamatngsaging"
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

