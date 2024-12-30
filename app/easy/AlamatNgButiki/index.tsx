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

  const audioFile = require('../../../assets/voiceover/ALAMATNGBUTIKI.mp3');  // Example local audio file
  const navigationTarget = '/easy/AlamatNgButiki/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Noong unang panahon sa isang liblib na nayon," },
    { time: 3800, text: "may mag-ina na naninirahan malapit sa gubat." },
    { time: 6600, text: "Ang ina nila ay si Aling Rosa, isang relihiyosong" },
    { time: 10500, text: "babae na palaging nagdarasal." },
    { time: 12500, text: "Ang kanyang anak na si Juan ay mabait at masunurin sa kanya." },
    { time: 16500, text: "Palagi silang nagdarasal bago sumapit ang dilim," },
    { time: 19800, text: "Kahit saan man sila naroon." },
    { time: 21500, text: "" },
    { time: 22000, text: "Isang araw, habang si Juan ay nasa gubat upang maghanap ng makakain," },
    { time: 26800, text: "nakilala niya si Helena. Nahulog agad ang loob ni Juan sa dalaga," },
    { time: 31000, text: "at naging sila. Ngunit isang araw, sinabi ni Helena kay Juan" },
    { time: 35800, text: "na hindi pa niya nararamdaman ang tunay na pag-ibig nito" },
    { time: 38800, text: "at kailangan niyang patunayan ito sa pamamagitan ng pagdala" },
    { time: 42500, text: "sa kanya ng puso ng kanyang ina, si Aling Rosa." },
    { time: 46200, text: "" },
    { time: 47000, text: "Nang dumating si Juan sa kanilang bahay," },
    { time: 49500, text: "tinanong siya ni Aling Rosa kung bakit siya gabi na umuwi." },
    { time: 52800, text: "Nang sabihin ni Juan ang dahilan," },
    { time: 54800, text: "tinanong siya ng ina kung bakit ito naging kailangan." },
    { time: 58800, text: "Sumagot si Juan na hindi niya alam at inaya si Aling Rosa na magdasal sila." },
    { time: 64000, text: "Ngunit habang nagdarasal, hindi maiwasan ni Juan" },
    { time: 66500, text: "na mag-isip ng masama tungkol kay Helena at sa hinihingi nito." },
    { time: 71800, text: "Bigla niyang hinugot ang itak at sinaktan si Aling Rosa." },
    { time: 75700, text: "Sa kabila ng sakit at paghihirap, pinatawad ni Aling Rosa" },
    { time: 79500, text: "si Juan at humiling na humingi ito ng tawad sa Diyos." },
    { time: 82800, text: "" },
    { time: 83200, text: "Nang makapagsisi si Juan, bigla siyang nagbago ng anyo at naging isang butiki." },
    { time: 88800, text: "Dahil sa kanyang kasalanan," },
    { time: 90500, text: "si Juan ay naparusahan at naging butiki na unang lumabas sa mundo." },
    { time: 95200, text: "Nakita niya si Helena, na nagbago rin ng anyo at naging isang pangit na engkanto." },
    { time: 100800, text: "Sa takot, pinalayas ni Juan si Helena at nagtago sa kisame." },
    { time: 105000, text: "Naglaro si Helena sa paligid," },
    { time: 107500, text: "subalit hindi na siya nakabalik sa dati niyang anyo." },
    { time: 110800, text: "Bilang pagpaparusa, ginawa siyang pagkain ng butiki. Mula noon," },
    { time: 115500, text: "ang mga butiki ay itinuring na tagapagpatibay ng pananalig sa Diyos" },
    { time: 120500, text: "at patuloy na bumababa sa lupa bago dumilim upang magdasal." },
    { time: 124500, text: "" },
    { time: 125000, text: "Kaya't hanggang ngayon, ang mga butiki ay patuloy na pinupuksa" },
    { time: 128800, text: "ang mga kulisap na itinuturing nilang mga engkanto bilang pagsaludo" },
    { time: 133200, text: "at pag-alala sa nangyaring alamat." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Butiki</Text>
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


