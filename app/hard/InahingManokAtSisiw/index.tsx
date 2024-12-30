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

  const audioFile = require('../../../assets/voiceover/INAHINGMANOK.mp3');  // Example local audio file
  const navigationTarget = '/hard/InahingManokAtSisiw/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 300, text: "May isang inahing manok na may tatlong sisiw na naninirahan sa gitna ng taniman ng mais." },
    { time: 6000, text: "Isang araw, lumabas ng bahay ang magsasakang may-ari ng taniman at sinabi," },
    { time: 11500, text: "Panahon na upang anihin ko ang aking maisan!" },
    { time: 14500, text: "Kailangan tawagin ko ang aking mga kapit-bahay upang tulungan ako sa aking pag-ani bukas!" },
    { time: 20000, text: "" },
    { time: 20200, text: "Narinig ito ng mga sisiw at agad nilang sinabi sa kanilang ina," },
    { time: 25000, text: "Kailangan nating lumisan dito at humanap ng ibang matitirahan, Inang!" },
    { time: 29000, text: "Baka mahuli tayo ng mga magsasaka bukas at huhulihin para patayin!" },
    { time: 38500, text: "" },
    { time: 34000, text: "Huwag kayong mag-alala mga anak, sagot ng inahing manok." },
    { time: 39000, text: "Kung mga kapit-bahay lamang ang aasahan niya," },
    { time: 42000, text: "hindi agad gagalaw ang mga iyon! May panahon pa tayo para magplano ng paglipat." },
    { time: 47300, text: "Tama nga ang sinabi ng inahing manok. Kinabukasan," },
    { time: 51500, text: "wala nga namang dumating na mga kapit-bahay upang tumulong sa pag-ani ng magsasaka." },
    { time: 57000, text: "" },
    { time: 57200, text: "Kung hindi ko maasahan ang aking mga kapit-bahay," },
    { time: 60500, text: "sa aking mga kamag-anak ako lalapit upang humingi ng tulong para sa pag-ani bukas! sabi ng magsasaka." },
    { time: 67800, text: "" },
    { time: 68000, text: "Narinig ng mga sisiw ang sinabi ng magsasaka at agad nilang ibinahagi sa kanilang ina." },
    { time: 73500, text: "Ngunit muli, hindi nag-aalala ang inahing manok at sinabing," },
    { time: 77500, text: "Kung sa mga kamag-anak lamang siya aasa, hindi rin agad magsisipag-aksyon ang mga iyon!" },
    { time: 82000, text: "May mga sariling gawain din ang mga iyon at hindi natin masasabi kung sila ay maaasahan." },
    { time: 87200, text: "May panahon pa tayo para magplano ng ating paglipat dito mga anak!" },
    { time: 91500, text: "" },
    { time: 91700, text: "Kinabukasan, tama nga ang sinabi uli ng inahing manok." },
    { time: 95400, text: "Walang kamag-anak na dumating ang magsasaka upang tulungan siya sa pag-ani sa maisan." },
    { time: 100500, text: "" },
    { time: 100600, text: "Dahil dito, napilitan ang magsasaka na tawagin ang kanyang anak at sabihin, Bukas na bukas," },
    { time: 106500, text: "tayo na lang dalawa ang mag-aani sa ating pananim. Wala tayong ibang aasahan kundi ang ating sarili!" },
    { time: 111500, text: "" },
    { time: 111800, text: "Nang marinig ito ng mga sisiw, dali-dali silang lumapit sa kanilang ina at ibinahagi ang sinabi ng magsasaka." },
    { time: 118200, text: "" },
    { time: 118500, text: "Noong mga sandaling iyon, nagpasya ang inahing manok na lumisan sila sa lugar na iyon, at sinabing," },
    { time: 124500, text: "Kung sinabi ng magsasaka na siya na lang ang gagawa ng pag-ani, dapat nating sundin!" },
    { time: 129300, text: "Totoong wala siyang ibang maaasahan kundi ang kanyang sarili!" },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Inahing Manok At Ang Kanyang Mga Sisiw</Text>
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


