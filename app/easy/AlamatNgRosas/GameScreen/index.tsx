import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Rosas!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "nayon",
      definition: "Ito ay tumutukoy sa isang komunidad o bayan na malayo sa mga malalaking lungsod.",
      syllables: "NA-yon",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/NAYON.aac') // Adjust the path to your audio file
    },
    {
      word: "araw",
      definition: "Ito ay ang panahon ng liwanag at init, ngunit maaari ring tumukoy sa pag-asa at bagong simula.",
      syllables: "A-raw",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/ARAW.aac') // Adjust the path to your audio file
    },
    {
      word: "bulaklak",
      definition: "Sa kwento, ito ang nagpapaalala sa mga tao sa kagandahan ni Rosa.",
      syllables: "bu-lak-LÁK",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/BULAKLAK.aac') // Adjust the path to your audio file
    },
    {
      word: "rosas",
      definition: "Ito ang pangalan ng kakaibang halaman na lumitaw sa kwento. Ito ay may kakaibang tinik na nagbigay ng babala sa sinumang humahawak nito.",
      syllables: "RO-sas",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/ROSAS.aac') // Adjust the path to your audio file
    },
    {
      word: "kagan",
      definition: "Ito ay isa sa mga katangian ni Rosa na kinagiliwan ng mga tao sa nayon.",
      syllables: "kag-AN",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/KAGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "pisngi",
      definition: "Ang mapupulang bahagi ng mukha ni Rosa na ito ay isa mga nagpapalabas ng kaniyang kagandahan at pagkabata.",
      syllables: "pis-NGÎ",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/PISNGI.aac') // Adjust the path to your audio file
    },
    {
      word: "halaman",
      definition: "Ito ang kakaibang lumitaw sa lugar kung saan nagtagpo sina Rosa at Antonio ay nagsisilbing simbolo ng kababalaghan o misteryo sa kwento.",
      syllables: "ha-LA-man",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/HALAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "binata",
      definition: "Ang salitang ito ay tumutukoy sa isang lalaking hindi pa kasal o hindi pa nagiging may-asawa.",
      syllables: "bi-NA-tá",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/BINATA.aac') // Adjust the path to your audio file
    },
    {
      word: "umiyak",
      definition: "Ito ay ang pagluha o paglabas ng luha bilang reaksiyon sa pagkakaroon ng malalim na damdamin o pangyayari.",
      syllables: "u-mi-YÁK",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG ROSAS/UMIYAK.aac') // Adjust the path to your audio file
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
          storyId="alamatngrosas"
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

