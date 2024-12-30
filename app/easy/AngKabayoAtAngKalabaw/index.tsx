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

  const audioFile = require('../../../assets/voiceover/ANGKABAYOATANGKALABAW.mp3');  // Example local audio file
  const navigationTarget = '/easy/AngKabayoAtAngKalabaw/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Isang magsasaka ang nagnanais na manirahan sa ibang bayan, kaya isang araw," },
    { time: 6000, text: "nag-ipon siya ng kanyang mga gamit at isinakay sa kanyang alagang kabayo at kalabaw." },
    { time: 12000, text: "Maaga pa, nagsimula na sila ng kanilang mahabang paglalakbay." },
    { time: 16500, text: "at Matapos ang ilang oras, naramdaman ng kalabaw ang sobrang pagod" },
    { time: 21000, text: "at panghihina dahil sa bigat ng dala niyang gamit." },
    { time: 24200, text: "" },
    { time: 24500, text: "'Kaibigang kabayo, mas mabigat ang pasan kong gamit kaysa sa iyo." },
    { time: 29000, text: "Maaari bang tulungan mo ako at pasanin ang iba?' pakiusap ng kalabaw." },
    { time: 34000, text: "" },
    { time: 34500, text: "'Yan ang ipinataw sa iyong balikat ng ating amo, kaya pagtiisan mo na lang,'" },
    { time: 39000, text: "sagot ng kabayo na lalo pang binilis ang paglalakad." },
    { time: 42800, text: "" },
    { time: 43200, text: "'Tulungan mo naman ako. Hindi ko na kayang dalhin ang bigat ng gamit ko." },
    { time: 47500, text: "Nanghihina ako. Alam mo naman kailangan kong magpalamig sa ilog kapag" },
    { time: 52000, text: "ganito kainit ang araw dahil madaling mainitan ang katawan ko,' pakiusap pa rin ng kalabaw." },
    { time: 58000, text: "" },
    { time: 58200, text: "'Wala akong pakialam sa iyo,' naiinis na sagot ng kabayo." },
    { time: 62800, text: "" },
    { time: 63200, text: "Matapos ang isang oras, lumalala pa ang init ng araw." },
    { time: 67000, text: "Hindi nagtagal at bumigay ang kalabaw sa bigat ng kanyang dala at siya ay namatay." },
    { time: 74200, text: "Nang makita ng magsasaka ang pangyayari," },
    { time: 76800, text: "kinuha niya ang lahat ng gamit na dala ng kalabaw at inilipat sa kabayo" },
    { time: 81600, text: "na halos hindi na makalakad dahil sa sobrang bigat ng kanyang mga dalahin." },
    { time: 86000, text: "" },
    { time: 86500, text: "'Kung tinulungan ko sana ang kasamang kalabaw," },
    { time: 89800, text: "hindi sana ganito kahirap ang dala ko ngayon,'" },
    { time: 92000, text: "may pagsisising bulong ng kabayo sa kanyang sarili." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Kabayo At Ang Kalabaw</Text>
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


