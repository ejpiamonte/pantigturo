import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Kasoy!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "kasoy",
      definition: "Isang uri ng puno na may mga butil na mayaman sa sustansya, at madalas itong ginagawang pampalasa sa pagkain.",
      syllables: "ka-SOY",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/KASOY.aac') // Adjust the path to your audio file
    },
    {
      word: "handaan",
      definition: "Isang okasyon o pagtitipon kung saan nagkakaroon ng pagsasaya at kasiyahang pagkainan.",
      syllables: "han-DA-an",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/HANDAAN.aac') // Adjust the path to your audio file
    },
    {
      word: "hinaing",
      definition: "Ang pagpapahayag ng damdamin ng lungkot, takot, o pagkabahala.",
      syllables: "hi-na-ÎNG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/HINAING.aac') // Adjust the path to your audio file
    },
    {
      word: "ada",
      definition: "Ang pangalan ng isang karakter sa kwento, maaaring maging isang diyosa o mabuting nilalang.",
      syllables: "A-da",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/ADA.aac') // Adjust the path to your audio file
    },
    {
      word: "madilim",
      definition: "Ang kulay na itim o kawalan ng liwanag, madalas itong tumutukoy sa gabi o sa mga lugar na walang ilaw.",
      syllables: "ma-di-LÎM",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/MADILIM.aac') // Adjust the path to your audio file
    },
    {
      word: "takot",
      definition: "Ang damdamin ng pangamba sa isang tiyak na bagay, pangyayari, o sitwasyon.",
      syllables: "ta-KÒT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/TAKOT.aac') // Adjust the path to your audio file
    },
    {
      word: "kagubatan",
      definition: "Isang lugar na may malalaking bilang ng mga puno.",
      syllables: "ka-gu-BA-tan",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/KAGUBATAN.aac') // Adjust the path to your audio file
    },
    {
      word: "naiinggit",
      definition: "Ang damdamin ng panghihinayang o paghahangad ng ibang bagay na mayroon ang iba.",
      syllables: "na-i-ing-GÎT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/NAIINGGIT.aac') // Adjust the path to your audio file
    },
    {
      word: "lungkot",
      definition: "Ang damdamin ng pagiging malumbay, kabaligtaran ng kasiyahan o ligaya.",
      syllables: "lung-KÒT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG KASOY/LUNGKOT.aac') // Adjust the path to your audio file
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
          storyId="alamatngkasoy"
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

