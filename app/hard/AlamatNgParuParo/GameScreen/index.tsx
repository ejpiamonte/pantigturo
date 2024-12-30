import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Ang Alamat Ng Paru-Paro!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Ada",
      definition: "Ang matandang babae na kilala sa kanyang kabutihan at sa pag-aalaga ng mga bulaklak.",
      syllables: "A-da",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/ADA.aac') // Adjust the path to your audio file
    },
    {
      word: "Komunidad",
      definition: "Ang grupo ng mga tao na nagkakaisa at nagtutulungan sa isang partikular na lugar o lipunan.",
      syllables: "ko-mu-ni-DÁD",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/KOMUNIDAD.aac') // Adjust the path to your audio file
    },
    {
      word: "Parusa",
      definition: "Ito ay tumutukoy sa bagay na ipinapataw sa isang tao dahil sa kanyang nagawang kasalanan o mali.",
      syllables: "pa-RU-sa",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/PARUSA.aac') // Adjust the path to your audio file
    },
    {
      word: "Insekto",
      definition: "Ito ay mga hayop na mayroong anim na paa at katawan na may bilugang dibisyon, tulad ng mga langaw, bubuyog, at kagat.",
      syllables: "in-SEK-to",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/INSEKTO.aac') // Adjust the path to your audio file
    },
    {
      word: "Paghihiganti",
      definition: "Ang pagbayad o pagtutol sa isang kasalanang nagawa laban sa iyo.",
      syllables: "pag-hi-hhi-gan-TÎ",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/PAGHIHIGANTI.aac') // Adjust the path to your audio file
    },
    {
      word: "Likido",
      definition: "Isang bagay na parang tubig o katas na mayroong espesyal na bisa o kapangyarihan.",
      syllables: "LI-ki-do",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/LIKIDO.aac') // Adjust the path to your audio file
    },
    {
      word: "Kasakiman",
      definition: "Ang pagiging sobra-sobra at hindi kuntento sa mga bagay-bagay.",
      syllables: "ka-sa-ki-MÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/KASAKIMAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Hardin",
      definition: "Isang lugar kung saan itinatanim at inaalagaan ang mga halaman, lalo na ang mga bulaklak.",
      syllables: "har-DÎN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/HARDIN.aac') // Adjust the path to your audio file
    },
    {
      word: "Sorpresa",
      definition: "Ito ay tumutukoy sa hindi inaasahang pangyayari o bagay na maaaring magdulot ng kagalakan o pag-aalala.",
      syllables: "sor-PRE-sa",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/SORPRESA.aac') // Adjust the path to your audio file
    },
    {
      word: "amparo",
      definition: "Ito ang pangalan ng pamilyang bagong dating sa komunidad na kilala sa kanilang kasakiman at pagpapalimos.",
      syllables: "am-PA-ro",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ALAMAT NG PARUPARO/AMPARO.aac') // Adjust the path to your audio file
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
          storyId="alamatngparuparo"
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

