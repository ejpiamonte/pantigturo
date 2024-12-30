import React from 'react';
import WordGuessingGame from '../../GameFunctions/Logic'; // Path to the refactored component
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function App(){

  const customCongratulations = 'Ang Galing Mo!, Natapos Mo Lahat Ng Laro Sa Istoryang Si Aso At Si Ipis!';

  interface Word {
    word: string;
    definition: string;
    syllables: string;
    pronunciationClip: any; // You can use a more specific type if needed
  }
  
  const WORDS: Word[] = [
    {
      word: "Mangkardo",
      definition: "Siya ay isang matandang may-ari ng bahay na may likas na kabutihan at pagmamalasakit sa kanyang mga alagang hayop.",
      syllables: "mang kar-dò",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/MANG KARDO.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagluluto",
      definition: "Ito ay ang gawain ng paghahanda ng pagkain, na nagpapakita ng pagmamalasakit at pagmamahal sa mga taong paglulutuan.",
      syllables: "pag-lu-LU-tò",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/PAGLULUTO.aac') // Adjust the path to your audio file
    },
    {
      word: "Ipis",
      definition: "Isang karakter na nagpakita ng kabutihan at pagmamalasakit sa pamamagitan ng pagtulong sa aso sa panahon ng pangangailangan.",
      syllables: "I-pis",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/IPIS.aac') // Adjust the path to your audio file
    },
    {
      word: "Aso",
      definition: "Isang karakter na alaga ni Mang Kardo na matapat at masunurin.",
      syllables: "A-so",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/ASO.aac') // Adjust the path to your audio file
    },
    {
      word: "Bantay",
      definition: "Ang tungkulin o gawain ng pag-aalaga at pagprotekta sa isang lugar o bagay, na ipinakikita ng aso sa bahay ng kanyang amo.",
      syllables: "ban-TÁY",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/BANTAY.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagpapatawad",
      definition: "Ang pagbibigay ng pangalawang pagkakataon sa kabila ng pagkakamali ng iba.",
      syllables: "pag-pa-pa-TA-wad",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/PAGPAPATAWAD.aac') // Adjust the path to your audio file
    },
    {
      word: "Kakulangan",
      definition: "Ito ay tumutukoy sa kakapusan ng isang bagay, na nangyari sa kuwento nang kulangin ang pagbabantay ng aso sa bahay.",
      syllables: "ka-ku-la-NGÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/KAKULANGAN.aac') // Adjust the path to your audio file
    },
    {
      word: "Pagmamalasakit",
      definition: "Ang pagpapakita ng kalinga at pag-aalala sa kapakanan ng iba.",
      syllables: "pag-ma-ma-la-SA-kit",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/PAGMAMALASAKIT.aac') // Adjust the path to your audio file
    },
    {
      word: "Sorpresa",
      definition: "Ito ay tumutukoy sa plano o kahanga-hangang bagay na ihahanda o ipakikita sa isang tao upang magdulot ng kagalakan o pagkamangha.",
      syllables: "sor-PRE-sa",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/SORPRESA.aac') // Adjust the path to your audio file
    },
    {
      word: "Pakikipagtulungan",
      definition: "Ang paggawa ng sama-sama upang matamo ang isang layunin o tunguhin.",
      syllables: "pa-KÎ-ki-pag-tu-lu-NGÁN",
      pronunciationClip: require('../../../../assets/SALITA/HARD/ASO AT IPIS/PAKIKIPAGTULUNGAN.aac') // Adjust the path to your audio file
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
          storyId="asoatipis"
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

