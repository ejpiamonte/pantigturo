import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Alamat Ng Ampalaya!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "ampalaya",
      definition: "Isang uri ng gulay na may berdeng kulay at may mapait na lasa, na madalas ginagamit bilang sangkap sa mga lutuing gulay.",
      syllables: "am-pa-la-YÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/AMPALAYA.aac') // Adjust the path to your audio file
    },
    {
      word: "labanos",
      definition: "Isang uri ng maliit na halamang gulay na may matigas at malutong na ugat.",
      syllables: "la-ba-NÒS",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/LABANOS.aac') // Adjust the path to your audio file
    },
    {
      word: "luya",
      definition: "Isang halamang gulay na kilala sa kanyang matalim na lasa at aromang timplado.",
      syllables: "LU-ya",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/LUYA.aac') // Adjust the path to your audio file
    },
    {
      word: "kamatis",
      definition: "Isang uri ng prutas na karaniwang kulay-pula, ngunit maaari ring maging dilaw, berde, o kahel depende sa uri at pagkakaluto.",
      syllables: "ka-MA-tis",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/KAMATIS.aac') // Adjust the path to your audio file
    },
    {
      word: "upo",
      definition: "Isang uri ng halamang baging o gumagapang na may mga mahahaba at mapuputing bunga na kahugis ng batuta.",
      syllables: "u-PÒ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/UPO.aac') // Adjust the path to your audio file
    },
    {
      word: "bawang",
      definition: "Isang uri ng halamang gulay na kilala sa kanyang matapang na amoy at lasa.",
      syllables: "BA-wang",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/BAWANG.aac') // Adjust the path to your audio file
    },
    {
      word: "sibuyas",
      definition: "Isang uri ng halamang gulay na nakakasanhi ng luha ang bunga nito kapag hinihiwa kung hindi nahugasan.",
      syllables: "si-BU-yas",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/SIBUYAS.aac') // Adjust the path to your audio file
    },
    {
      word: "singkamas",
      definition: "Isang uri ng halamang-ugat na may mabilog na bungang ang loob ay maputi, samantalang ang balat ay kulay ng pinaghalong kape at dilaw.",
      syllables: "sing-ka-MÁS",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/SINGKAMAS.aac') // Adjust the path to your audio file
    },
    {
      word: "kalabasa",
      definition: "Isang uri ng gulay na may malapad na hugis-bilog at karaniwang kulay kahel. Ito ay kilala sa kanyang malambot na tekstura at matamis na lasa.",
      syllables: "ka-la-BA-sa",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/ALAMAT NG AMPALAYA/KALABASA.aac') // Adjust the path to your audio file
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
          storyId="alamatngampalaya"
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

