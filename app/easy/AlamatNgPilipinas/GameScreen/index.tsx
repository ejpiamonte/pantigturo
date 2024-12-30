import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Pilipinas!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
    word: "bansa",
    definition: "Ito ay isang malaking teritoryo o lugar na may sariling pamahalaan, kultura, at mga mamamayan.",
    syllables: "ban-SÁ",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/BANSA.aac') // Adjust the path to your audio file
  },
  {
    word: "malayo",
    definition: "Ito ang naglalarawan sa distansya mula sa isang lugar patungo sa iba.",
    syllables: "ma-LA-yò",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/MALAYO.aac') // Adjust the path to your audio file
  },
  {
    word: "minda",
    definition: "Ito ang pangalan ng isa sa mga anak ng higante. Ang kanyang pangalan ay magiging bahagi ng pangalan ng isang pulo sa Pilipinas.",
    syllables: "MÎN-da",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/MINDA.aac') // Adjust the path to your audio file
  },
  {
    word: "kweba",
    definition: "Ito ay isang malalim na butas sa lupa na karaniwang ginagamit bilang tirahan o pugad ng mga hayop o tao.",
    syllables: "KWE-ba",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/KWEBA.aac') // Adjust the path to your audio file
  },
  {
    word: "mangaso",
    definition: "Ito ay ang gawain ng paghahanap o paghuli ng mga hayop upang gawing pagkain. Sa kwento, ito ay ginagawa ng ama higante upang mabuhay ang kanyang pamilya.",
    syllables: "ma-NGA-sò",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/MANGASO.aac') // Adjust the path to your audio file
  },
  {
    word: "dagat",
    definition: "Ito ay malawak na anyong tubig na napaliligiran ng lupa. Sa kwento, ito ang lugar kung saan nangyari ang trahedya kay Minda.",
    syllables: "DA-gat",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/DAGAT.aac') // Adjust the path to your audio file
  },
  {
    word: "pilipinas",
    definition: "Ito ang bansang nababanggit sa kwento, na nagsisimula pa lamang mabuo mula sa mga maliliit na mga pulo.",
    syllables: "pi-li-PI-nas",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/PILIPINAS.aac') // Adjust the path to your audio file
  },
  {
    word: "higante",
    definition: "Ito ay isang napakalaking nilalang o tao na may kaugnayan sa mitolohiya o kuwento.",
    syllables: "hi-GAN-te",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/HIGANTE.aac') // Adjust the path to your audio file
  },
  {
    word: "pulo",
    definition: "Ito ay isang maliit na bahagi ng lupa na napaliligiran ng tubig.. Sa kwento, ito ang nagpasyang turuan si Amba ng leksyon dahil sa kanyang kayabangan.",
    syllables: "pu-LÒ",
    pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG PILIPINAS/PULO.aac') // Adjust the path to your audio file
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
          storyId="alamatngpilipinas"
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

