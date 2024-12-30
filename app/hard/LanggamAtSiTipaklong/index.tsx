import React, {  } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import useLoadFonts from '../StoryFunctions/Fonts';
import AudioPlayer from '../StoryFunctions/Audio';

export default function App() {

  const { width, height } = Dimensions.get('window');

interface Lyric {
  time: number;
  text: string;
}

  const audioFile = require('../../../assets/voiceover/LANGGAMATTIPAKLONG.mp3');  // Example local audio file
  const navigationTarget = '/hard/LanggamAtSiTipaklong/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 2000, text: "Maganda ang lagay ng panahon. Matindi ang init na hatid ng araw. Maaga pa lamang ay gising na si Langgam." },
    { time: 9500, text: "Nagluto siya ng pagkain at kumain. Pagkatapos, nagtungo na siya sa labas." },
    { time: 15600, text: "Tulad ng dati, naghanap siya ng makakain. Nakita niya ang isang butil ng bigas." },
    { time: 22000, text: "Kinuha niya ito at dinala sa kanyang tahanan. Nakita siya ni Tipaklong." },
    { time: 27200, text: "" },
    { time: 27500, text: "Magandang umaga, kaibigan kong Langgam, bati ni Tipaklong. “Ang bigat ng iyong dalang pasan." },
    { time: 34000, text: "Bakit ka ba palagi na lang naghahanap at nag-iipon ng pagkain?" },
    { time: 37400, text: "" },
    { time: 37600, text: "Totoo nga 'yan. Nag-iipon ako ng pagkain habang maganda ang panahon,” sagot ni Langgam." },
    { time: 43700, text: "" },
    { time: 43700, text: "Subukan mong tularan ako, kaibigan Langgam, sabi ni Tipaklong. “Habang maganda ang panahon, tayo ay magsasaya." },
    { time: 51100, text: "Halika! Tayo ay maglaro, kumanta." },
    { time: 53000, text: "" },
    { time: 53200, text: "Ikaw na lang, Tipaklong, sagot ni Langgam." },
    { time: 56700, text: "Tulad ng sinabi ko sa iyo, habang maganda ang panahon, ako ay naghahanap ng pagkain." },
    { time: 62000, text: "Ito'y aking pinag-iipunan para may makain ako pagdating ng masamang panahon." },
    { time: 67000, text: "" },
    { time: 67400, text: "Lumipas ang maraming araw. Dumating ang tag-ulan. Ulan sa umaga, ulan sa hapon, at sa gabi ay patuloy pa rin ang pag-ulan." },
    { time: 78000, text: "At dumating ang panahon ng malakas na bagyo na may kidlat, kulog, at malakas na hangin kasabay ng malakas na pag-ulan." },
    { time: 86600, text: "" },
    { time: 86800, text: "Nagugutom at giniginaw si Tipaklong. Naalala niya na makibahagi sa kaibigang si Langgam." },
    { time: 93200, text: "Matapos ang bagyo, pinilit ni Tipaklong na makarating sa tahanan ni Langgam. Mahirap na mahirap siyang makalipad." },
    { time: 101000, text: "Nawala na ang dating saya at lakas ng loob ni Tipaklong. Tumunog ang pinto." },
    { time: 107000, text: "" },
    { time: 107500, text: "Ay, kaibigan ko! sabi ni Langgam. Pasok ka. Maupo ka." },
    { time: 113000, text: "" },
    { time: 113400, text: "Binigyan ni Langgam ng tuyong damit si Tipaklong. Agad siyang naghandog ng pagkain." },
    { time: 119000, text: "" },
    { time: 119200, text: "Sa ilang sandali, nagkasalo ang dalawa at kumain ng mainit na pagkain." },
    { time: 124500, text: "" },
    { time: 124700, text: "Salamat, kaibigang Langgam, sabi ni Tipaklong. Ngayon ay naniwala na ako sa iyo." },
    { time: 131000, text: "Kailangan nga mag-ipon habang maganda ang panahon para mayroong makain pagdating ng kagipitan." },
    { time: 137000, text: "" },
    { time: 137200, text: "Mula noon, nag-iba na si Tipaklong. Sa tag-init at sa magandang panahon, kasama na niya ang kaibigan na si Langgam. Natutunan niya kung paano mag-ipon at maghanda." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Langgam At Si Tipaklong</Text>
        <AudioPlayer 
          audioFile={audioFile}
          navigationTarget={navigationTarget}
          lyrics={lyrics} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textShadowColor: 'rgba(206, 141, 123, .8)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


