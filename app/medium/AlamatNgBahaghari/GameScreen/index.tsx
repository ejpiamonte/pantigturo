import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Bahaghari!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "bathala",
      definition: "Ang diyos o pinuno ng mga sinaunang Pilipino na pinagmulan ng kapangyarihan at awtoridad, at itinuturing na may likas na kakayahan sa paglikha at pagpaparusa.",
      syllables: "bat-HA-lá",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/BATHALA.aac') // Adjust the path to your audio file
    },
    {
      word: "gantimpala",
      definition: "Isang premyo, parangal, o prebilihiyo na ibinibigay bilang pagkilala sa tagumpay, pagpupunyagi, o husay sa isang partikular na gawain o kompetisyon.",
      syllables: "gan-tim-PA-lá",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/GANTIMPALA.aac') // Adjust the path to your audio file
    },
    {
      word: "pinagdikit",
      definition: "Isang salitang naglalarawan ng pagkakabuklod o pagkakasama ng dalawang bagay, ideya, o konsepto.",
      syllables: "pi-nag-di-KIT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/PINAGDIKIT.aac') // Adjust the path to your audio file
    },
    {
      word: "kulay",
      definition: "Ang mga pigmentedong bahagi ng ilaw na nagpapakintab o nagbibigay ng kaibahan sa mga bagay-bagay.",
      syllables: "KU-lay",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/KULAY.aac') // Adjust the path to your audio file
    },
    {
      word: "kahalagahan",
      definition: "Ito ang sumusukat o nagpapahayag ng silbi o kwenta ng isang tao, hayop, bagay, lugar o pangyayari.",
      syllables: "ka-ha-la-ga-HÁN",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/KAHALAGAHAN.aac') // Adjust the path to your audio file
    },
    {
      word: "kagandahan",
      definition: "Ito ay tumutukoy sa kalidad o katangian ng isang bagay, tao, o sitwasyon na nagdudulot ng kasiyahan, at pagkamangha sa mga taong nakakaranas o nakakakita nito.",
      syllables: "ka-gan-DA-han",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/KAGANDAHAN.aac') // Adjust the path to your audio file
    },
    {
      word: "pito",
      definition: "Ito ang bilang ng mga kulay na inatasan ni Bathala na magdala ng kulay sa mundo.",
      syllables: "pi-TÒ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/PITO.aac') // Adjust the path to your audio file
    },
    {
      word: "alitan",
      definition: "Ito ay nagpapahiwatig ng pagtatalo, hidwaan, o hindi pagkakaunawaan.",
      syllables: "a-LI-tan",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/ALITAN.aac') // Adjust the path to your audio file
    },
    {
      word: "kumpitensya",
      definition: "Ito ay tumutukoy sa isang labanan o paligsahan sa pagitan ng mga indibidwal, grupo, o organisasyon.",
      syllables: "kum-pe-ten-SIYÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG BAHAGHARI/KUMPITENSYA.aac') // Adjust the path to your audio file
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
          storyId="alamatngbahaghari"
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

