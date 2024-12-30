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

  const audioFile = require('../../../assets/voiceover/SIALITAPTAPATSIPARUPARO.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlitaptapAtParuparo/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "May isang Paruparo na ginulantang ng isang batang lalaki." },
    { time: 4500, text: "Iniwan niya itong nakabaligtad at nabulabog sa lupa." },
    { time: 8000, text: "" },
    { time: 8200, text: "Paru-paro: Saklolo! Tulungan ninyo ako! (Dumaan si Langgam at narinig ang hinaing ni Paruparo)" },
    { time: 15800, text: "" },
    { time: 16200, text: "Langgam: Gusto kitang tulungan, ngunit nagmamadali ako." },
    { time: 21000, text: "Maganda ang sikat ng araw at maghahanap pa ako ng pagkain." },
    { time: 25000, text: "(Umalis si Langgam at iniwan ang kaawa-awang Paruparo)" },
    { time: 29000, text: "" },
    { time: 29300, text: "Paru-paro: Saklolo! Maawa kayo sa akin. Tulungan ninyo ako." },
    { time: 35500, text: "(Dumating si Gagamba. Lumapit siya kay Paruparo)" },
    { time: 39000, text: "" },
    { time: 39200, text: "Gagamba: Gusto kitang tulungan ngunit pagagandahin ko pa ang aking bahay." },
    { time: 45000, text: "Mangunguha pa ako ng sapot. (At umalis si Gagamba)" },
    { time: 49000, text: "" },
    { time: 49200, text: "Paru-paro: O Bathala! Tulungan po ninyo ako." },
    { time: 54200, text: "Lilimutin na at magsisitulog na ang kasama kong kulisap." },
    { time: 58000, text: "Wala nang makakakita sa akin. (Pagod at gutom na si Paruparo. Napaiyak siya." },
    { time: 65000, text: "Nang punasan niya ang kanyang mga luha" },
    { time: 67500, text: "ay napansin niyang papalapit ang isang kislap-kislap na liwanag)" },
    { time: 72000, text: "" },
    { time: 72200, text: "Alitaptap: Naku, bakit ka nandito? Anong nangyari at bakit ganyan ang lagay mo?" },
    { time: 79800, text: "" },
    { time: 80200, text: "Paru-paro: Habang hinahanap ko ang nektar sa mga bulaklak," },
    { time: 84500, text: "hinuli ako ng isang batang lalaki." },
    { time: 87000, text: "Pinaglaruan niya ako at iniwan na nakabaligtad dito." },
    { time: 90500, text: "Hindi ko kayang tumayo mag-isa para makalipad. Maaari mo ba akong tulungan?" },
    { time: 95800, text: "" },
    { time: 96000, text: "Alitaptap: Oo naman. Sandali lang, tatawagan ko ang aking mga kaibigan." },
    { time: 102500, text: "(Ilang saglit pa ay dumating ang maraming alitaptap.)" },
    { time: 106000, text: "" },
    { time: 106500, text: "Paru-paro: Maraming salamat sa inyo. Kayo ang kasagutan sa aking dasal. Kaybuti ninyong mga tao..." },
    { time: 114200, text: "" },
    { time: 114500, text: "Alitaptap: Walang anuman, kaibigang Paruparo. O sige, aalis na kami." },
    { time: 120800, text: "" },
    { time: 121000, text: "Paru-paro: Aalis na rin ako. Babalik na ako sa aking tahanan sa bulaklak. Maraming salamat muli." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Alitaptap At Paru-Paro</Text>
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
    textShadowColor: 'rgba(190, 215, 220, .8)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


