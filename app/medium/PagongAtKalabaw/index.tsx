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

  const audioFile = require('../../../assets/voiceover/PAGONGATKALABAW.mp3');  // Example local audio file
  const navigationTarget = '/medium/PagongAtKalabaw/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Isang araw, nagtagpo ang kalabaw at ang pagong. Gusto ng pagong na maging kaibigan ang kalabaw." },
    { time: 8000, text: "Ngunit natawa lang nang malakas ang kalabaw at sinabing," },
    { time: 12000, text: "'Hindi ang katulad mo ang gusto kong kaibigan." },
    { time: 15700, text: "Hinahanap ko ang may lakas at laki tulad ko. Hindi tulad mo na mabagal at maliit.'" },
    { time: 22300, text: "" },
    { time: 22500, text: "Nahiya ang pagong sa sinabi ng kalabaw. 'Sobrang pang-aapi mo. Minamaliit mo ang kakayahan ko." },
    { time: 30200, text: "Dapat mong malaman na kahit maliit, may kakayahan din.'" },
    { time: 34300, text: "" },
    { time: 34500, text: "Napikon si kalabaw. Hinamon niya ng karera si pagong para patunayan nito ang sinasabi. Tinanggap ni pagong ang hamon." },
    { time: 44000, text: "" },
    { time: 44200, text: "'Kapag tinalo mo ako, magiging alila mo ako habang buhay,' sabi niya." },
    { time: 49500, text: "" },
    { time: 49800, text: "'Matapang ka, ha. Kailan mo gustong magsimula?' sabi ng kalabaw." },
    { time: 55000, text: "" },
    { time: 55200, text: "'Bukas ng umaga, dito rin,' sagot ng pagong." },
    { time: 58800, text: "" },
    { time: 59000, text: "Masaya si kalabaw dahil tiyak niyang tatalunin niya si pagong sa karera. Subalit matalino si pagong." },
    { time: 66000, text: "Kinonsulta niya ang apat na kaibigang pagong at pinagplanuhan ang kanilang hakbang." },
    { time: 71600, text: "" },
    { time: 71900, text: "Kinabukasan, maaga nang dumating si kalabaw. Wala pa ang kalaban niyang si pagong." },
    { time: 78200, text: "" },
    { time: 78500, text: "'Oh, anong nangyari? Di mo pa rin ako maabutan. Ano bang kondisyon ng karera?' tanong ni kalabaw." },
    { time: 86000, text: "" },
    { time: 86300, text: "'Okay, ganito ang gagawin natin. Ang maunang makarating sa ikalimang tuktok ng bundok ay panalo,' sabi ni pagong." },
    { time: 94400, text: "" },
    { time: 94600, text: "Tulad ng inaasahan, naiwan si pagong sa alikabok. Naunang sumalubong ni kalabaw ang unang bundok," },
    { time: 102000, text: "ngunit nagulat siya nang makita ang pagong doon na akala niya'y siya na ang kalaban." },
    { time: 107600, text: "Patuloy siyang tumakbo hanggang sa ikalawang bundok, pero ganun pa rin ang nangyari." },
    { time: 114200, text: "May isa pang pagong doon. Galit na galit na tumakbo si kalabaw hanggang sa ikatlong bundok." },
    { time: 121600, text: "Muli, may isa pang pagong doon, at ganun din sa ikaapat at ika-limang bundok." },
    { time: 127700, text: "" },
    { time: 127700, text: "Dahil sa hiya at galit sa pagkatalo, tinadyakan ni kalabaw ng malakas si pagong." },
    { time: 133400, text: "Ngunit matigas ang likod ni pagong kaya hindi siya nasaktan. Sa halip, nasugatan ang paa ni kalabaw." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Pagong At Ang Kalabaw</Text>
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


