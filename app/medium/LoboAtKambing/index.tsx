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

  const audioFile = require('../../../assets/voiceover/LOBOATKAMBING.mp3');  // Example local audio file
  const navigationTarget = '/medium/LoboAtKambing/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Isang lobo ang nahulog sa balon na walang tubig. Pinagsikapan niyang tumalon upang makalabas," },
    { time: 7800, text: "ngunit lubhang malalim ang balon na kanyang nahulugan." },
    { time: 11700, text: "" },
    { time: 12000, text: "Nang dumating ang isang uhaw na uhaw na kambing, lumapit ito sa balon at naririnig ang tinig ng lobo." },
    { time: 19500, text: "" },
    { time: 19800, text: "'Mayroon bang tubig sa loob ng balon?' tanong nito sa lobo. 'Oo, marami,' ang sinungaling na sagot ng lobo." },
    { time: 28200, text: "" },
    { time: 28500, text: "Agad na tumalon ang kambing sa balon, walang dalawang-isip. Ngunit napagtanto niya na niloko lamang siya ng lobo." },
    { time: 38000, text: "" },
    { time: 38200, text: "'Ngayo'y pareho na tayong bilanggo sa balon na ito,' sabi ng lobo." },
    { time: 43300, text: "'Mamamatay tayo sa uhaw at gutom dito,' sabi naman ng kambing." },
    { time: 48300, text: "" },
    { time: 48800, text: "'Kung nais mong makalabas dito, magtulungan tayo. Mayroon akong ideya kung paano natin gagawin iyon.'" },
    { time: 57300, text: "" },
    { time: 57500, text: "'Paano?'" },
    { time: 58400, text: "" },
    { time: 58400, text: "Ipinaupo ng lobo ang mga paa sa katawan ng kambing. 'Ako muna ang lalabas." },
    { time: 65000, text: "At kapag nakalabas na ako, saka kita hahatakin palabas,' pangako nito. 'Sige,' sagot ng kambing." },
    { time: 73600, text: "" },
    { time: 74000, text: "Nakalabas nga ng balon ang lobo sa tulong ng kambing. Ngunit noong pagkakataon na ng kambing para tulungan," },
    { time: 82000, text: "agad itong tumawa ng malakas. Pagkatapos ay sinabi, 'Walang lobong manloloko kung walang kambing na magpapaloko.'" },
    { time: 91200, text: "" },
    { time: 91200, text: "At malungkot na naiwan ang kambing sa malalim na balon." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Lobo At Ang Kambing</Text>
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
    textShadowColor: 'rgba(255, 249, 20, 1)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
});


