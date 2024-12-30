import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Alamat Ng Sampaguita!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Sampaguita",
      definition: "Isang uri ng bulaklak na mabango at madalas itong gamitin sa iba`t ibang pagdiriwang o seremonya.",
      syllables: "sam-pa-GUI-ta",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/SAMPAGUITA.aac') // Adjust the path to your audio file
    },
    {
      word: "Tanggol",
      definition: "Pangalan ng isang lalaking matapang na tumanggap ng panganib para sa iba.",
      syllables: "tang-GÒL",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/TANGGOL.aac') // Adjust the path to your audio file
    },
    {
      word: "Sumpa",
      definition: "Isang pamahiin o pagbabanta na nagdadala ng masamang kapalaran o karamdaman sa isang tao.",
      syllables: "sum-PÁ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/SUMPA.aac') // Adjust the path to your audio file
    },
    {
      word: "Dalamhati",
      definition: "Ang matinding lungkot o hinanakit na nararamdaman ng isang tao, karaniwang dulot ng pagkamatay o pagkawala ng mahal sa buhay.",
      syllables: "da-lam-HÁ-tÎ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/DALAMHATI.aac') // Adjust the path to your audio file
    },
    {
      word: "Manliligaw",
      definition: "Taong nagpapakita ng pagmamahal at interes sa isang tao, karaniwang may layunin na maging karelasyon.",
      syllables: "man-li-LI-gaw",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/MANLILIGAW.aac') // Adjust the path to your audio file
    },
    {
      word: "Pangungulila",
      definition: "Ang matinding pagkakaroon ng kawalan o pagkawalang katiyakan, lalo na sa pag-ibig.",
      syllables: "pa-ngu-ngu-LI-Lá",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/PANGUNGULILA.aac') // Adjust the path to your audio file
    },
    {
      word: "Halaman",
      definition: "Ito ang tumubosa puntod ni Liwayway, na naging sagisag ng pag-asa at pag-ibig.",
      syllables: "ha-LA-man",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/HALAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Kapalaran",
      definition: "Ang mga nangyayari sa isang tao o bagay, lalo na ang mga hindi inaasahan o mga pangyayaring hindi kontrolado ng tao.",
      syllables: "ka-pa-LA-ran",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/KAPALARAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pumanaw",
      definition: "Ang pagkamatay o pag-alis ng isang tao mula sa mundo ng buhay.",
      syllables: "pu-MA-naw",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/PUMANAW.aac') // Adjust the path to your audio file
    },
    {
      word: "liwayway",
      definition: "Pangalan ng isang dalaga na kilala sa kanyang kagandahan at kabaitan.",
      syllables: "li-way-WÁY",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG SAMPAGUITA/LIWAYWAY.aac') // Adjust the path to your audio file
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
          storyId="alamatngsampaguita"
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

