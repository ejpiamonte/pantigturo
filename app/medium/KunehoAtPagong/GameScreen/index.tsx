import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Si Kuneho At Si Pagong!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }

  const WORDS: Word[] = [
    {
      word: "pagong",
      definition: "Isang uri ng hayop na may matigas na balat, mabagal maglakad ngunit matiyaga at matibay.",
      syllables: "pa-GÒNG",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/PAGONG.aac') // Adjust the path to your audio file
    },
    {
      word: "akyat",
      definition: "Ang kilos na pagsusumikap na pumunta paitaas o pataas.",
      syllables: "ak-YÁT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/AKYAT.aac') // Adjust the path to your audio file
    },
    {
      word: "tagumpay",
      definition: "Ang resulta ng pagsisikap at determinasyon ng Pagong, na siyang nagwakas ng kwento.",
      syllables: "ta-gum-PÁY",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/TAGUMPAY.aac') // Adjust the path to your audio file
    },
    {
      word: "hudyat",
      definition: "Ito ay isang senyales o tanda ng pagsisimula ng isang gawain o paligsahan, na ipinakita ng Alamid bago magsimula ang laban.",
      syllables: "hud-YÁT",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/HUDYAT.aac') // Adjust the path to your audio file
    },
    {
      word: "landas",
      definition: "Ang daan o direksyon kung saan papunta ang isang tao o hayop, ang ruta na kanilang tinatahak.",
      syllables: "lan-DÁS",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/LANDAS.aac') // Adjust the path to your audio file
    },
    {
      word: "kuneho",
      definition: "Isang uri ng hayop na may malambot na balahibo, matangos na ilong, at malalaking tenga.",
      syllables: "ku-NE-ho",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/KUNEHO.aac') // Adjust the path to your audio file
    },
    {
      word: "paa",
      definition: "Ang bahagi ng katawan ng tao o hayop na sumusuporta sa kanilang timbang kapag sila ay nakatayo.",
      syllables: "pa-Á",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/PAA.aac') // Adjust the path to your audio file
    },
    {
      word: "paligsahan",
      definition: "Isang laban o kompetisyon kung saan nagtatagisan ang mga kalahok upang patunayan ang kanilang galing o kakayahan.",
      syllables: "PÁ-lig-SA-han",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/PALIGSAHAN.aac') // Adjust the path to your audio file
    },
    {
      word: "pahinga",
      definition: "Ang panandalian o pansamantalang pagtigil mula sa aktibidad o gawain.",
      syllables: "pa-hi-NGÁ",
      pronunciationClip: require('../../../../assets/SALITA/MEDIUM/KUNEHO AT PAGONG/PAHINGA.aac') // Adjust the path to your audio file
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
          storyId="kunehoatpagong"
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

