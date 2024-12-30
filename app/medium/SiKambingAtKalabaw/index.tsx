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

  const audioFile = require('../../../assets/voiceover/KAMBINGATKALABAW.mp3');  // Example local audio file
  const navigationTarget = '/medium/KambingAtKalabaw/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Magkapitbahay ang kalabaw at ang kambing. Isang umaga, nagpunta ang kambing sa kapitbahay." },
    { time: 8000, text: "" },
    { time: 8000, text: "'Ako ay nagugutom. Tara na sa kabila ng ilog. Maraming bunga ng mais doon." },
    { time: 14000, text: "Ikaw kumain ng damo, ako kakain ng mais,' sabi ng kambing sa kalabaw." },
    { time: 20300, text: "" },
    { time: 20400, text: "'Oo, sama ako,' sagot ng kalabaw." },
    { time: 23600, text: "" },
    { time: 23800, text: "'Pero hindi ako marunong lumangoy. Pasakay naman sa likod mo,' sabi ng kambing." },
    { time: 29800, text: "" },
    { time: 30000, text: "Sumakay nga ang kambing sa kalabaw. Lumangoy ang kalabaw sa ilog hanggang sa kabilang ibayo." },
    { time: 36500, text: "Nagkainan sila doon. Mabilis kumain ang kambing habang hihinay-hinay lang kumain ang kalabaw." },
    { time: 44000, text: "Madaling nabusog ang kambing. Pero hindi pa busog ang kalabaw. Nainip na ang kambing at gustong umuwi." },
    { time: 51900, text: "" },
    { time: 52100, text: "'Kapitbahay, busog na ako. Uwi na tayo,' sabi ng kambing." },
    { time: 57500, text: "" },
    { time: 57500, text: "'Ok lang. Hintay lang tayo,' sabi ng kalabaw." },
    { time: 61800, text: "" },
    { time: 62000, text: "Nainip ang kambing at nag-isip kung paano mapapatigil ang kalabaw sa pagkain." },
    { time: 67800, text: "Naglundag siya at gumawa ng malakas na ingay. Dahil sa ingay," },
    { time: 72600, text: "napansin sila ng mga tao. Nakita nilang kumakain ang kalabaw at hinampas ito." },
    { time: 78800, text: "" },
    { time: 78800, text: "'Gusto mo na bang umuwi?' tanong ng kambing." },
    { time: 81800, text: "" },
    { time: 82000, text: "'Oo, tayo na. Sige, sakay ka sa likod ko,' sabi ng kalabaw at lumakad papunta sa ilog." },
    { time: 89200, text: "" },
    { time: 89500, text: "Sa gitna ng ilog, huminto ang kalabaw. Tinanong niya kung bakit nag-ingay ang kambing." },
    { time: 96200, text: "" },
    { time: 96500, text: "'Ewan ko. Kapag ako'y busog, gusto kong kumanta at sumayaw,' sagot ng kambing." },
    { time: 102500, text: "" },
    { time: 102800, text: "Lumakad na rin sa tubig ang kalabaw. Pero biglang huminto ulit." },
    { time: 107200, text: "" },
    { time: 107500, text: "'Bakit huminto ka?' tanong ng kambing." },
    { time: 110400, text: "" },
    { time: 110600, text: "'Alam mo, gusto ko ring mag-pagulong-gulong sa tubig,' sagot ng kalabaw." },
    { time: 115600, text: "" },
    { time: 115800, text: "'Teka lang! Paano ako? Baka mahulog ako,' reklamo ng kambing." },
    { time: 121000, text: "" },
    { time: 121300, text: "'Eh, ganun talaga kapitbahay, trip ko talaga ito,' sabay gulong sa tubig." },
    { time: 126700, text: "" },
    { time: 126800, text: "Nahulog sa tubig ang kambing at nalunod." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Magkapitbahay Na Si Kambing At Kalabaw</Text>
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


