import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';


export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat ng Durian!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "babae",
      definition: "Sa kwento, ito ang kasarian ni Tandang During na may mahabang kasaysayan sa kanilang komunidad.",
      syllables: "ba-BA-e",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/BABAE.aac') // Adjust the path to your audio file
    },
    {
      word: "tahanan",
      definition: "Ito ay ang lugar kung saan naninirahan o nakatira ang isang tao.",
      syllables: "ta-HA-nan",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/TAHANAN.aac') // Adjust the path to your audio file
    },
    {
      word: "natakot",
      definition: "Sa kwento, marami ang nakaramdam ng ganito dahil sa likas na kapangyarihan at reputasyon ni Tandang During bilang isang mangkukulam.",
      syllables: "na-TA-kot",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/NATAKOT.aac') // Adjust the path to your audio file
    },
    {
      word: "amihan",
      definition: "Ito ay ang hanging nagmumula sa hilaga, na karaniwang dala ang malamig at tuyong simoy.",
      syllables: "a-MI-han",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/AMIHAN.aac') // Adjust the path to your audio file
    },
    {
      word: "durian",
      definition: "Ito ay isang uri ng prutas na kilala sa kanyang mabahong amoy at matitigas na balat. Sa kwento, ang prutas na ito ay natagpuan ng mga tao mula sa taniman ni Tandang During.",
      syllables: "du-ri-ÁN",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/DURIAN.aac') // Adjust the path to your audio file
    },
    {
      word: "prutas",
      definition: "Ito ay mga bunga o produkto ng mga halaman na maaaring kainin o gamitin bilang pagkain.",
      syllables: "PRU-tas",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/PRUTAS.aac') // Adjust the path to your audio file
    },
    {
      word: "halaman",
      definition: "Ito ay mga kahoy, damo, o iba pang uri ng mga tumutubo sa lupa. Ang bakuran ng kubo ni Tandang During ay puno ng mga ganito.",
      syllables: "ha-LA-man",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/HALAMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "kubo",
      definition: "Ito ay isang maliit at simpleng tahanan na karaniwang gawa sa kawayan o kahoy.",
      syllables: "KU-bo",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/KUBO.aac') // Adjust the path to your audio file
    },
    {
      word: "asawa",
      definition: "Ito ay ang kasama o kabiyak ng isang tao sa kasal.",
      syllables: "a-SA-wa",
      pronunciationClip: require('../../../../assets/SALITA/EASY/ALAMAT NG DURIAN/ASAWA.aac') // Adjust the path to your audio file
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
          storyId="alamatngdurian"
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
