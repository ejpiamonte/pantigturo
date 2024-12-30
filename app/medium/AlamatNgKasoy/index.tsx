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

  const audioFile = require('../../../assets/voiceover/ALAMATNGKASOY.mp3');  // Example local audio file
  const navigationTarget = '/medium/AlamatNgKasoy/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Noong unang panahon, sa loob ng kasoy ay nakakulong ang isang abuhing buto." },
    { time: 6500, text: "Lubhang lungkot ang nadarama ng buto dahil sa kadiliman sa loob ng kasoy." },
    { time: 13000, text: "Lalong nadagdagan ang kanyang kalungkutan nang malaman niyang may handaan sa kagubatan ng Adang." },
    { time: 19800, text: "Sa gabi ng handaan, ipinatawag ng Ada ang lahat ng hayop at halaman." },
    { time: 26300, text: "" },
    { time: 26500, text: "Ang kagubatan ay nagliwanag sa mga ilaw ng mga alitaptap. Ang mga kuliglig at palaka ay sumabay sa musika ng mga maya." },
    { time: 36000, text: "Ang mga kuneho, usa, elepante, at zebra ay masayang sumayaw. Kasabay nito, ang mga gulay at prutas ay nagtagisan din." },
    { time: 47000, text: "Ngunit, tanging ang buto ng kasoy ang nanatiling lungkot." },
    { time: 51300, text: "" },
    { time: 51800, text: "'Nakakabighani ang kasiyahan ng paligid. Ako'y naiinggit sa kanilang kaligayahan,' bulong ng buto." },
    { time: 59500, text: "" },
    { time: 59800, text: "Narinig ni Ada ang pagngawa ng buto. 'Nais kong maging masaya ka. Ano ang iyong hiling?' tanong ni Ada." },
    { time: 68800, text: "" },
    { time: 69000, text: "'Ayaw kong manatili sa madilim na lugar na ito. Naiinggit ako sa mga hayop at halaman na masaya sa mga handaan." },
    { time: 78000, text: "Hindi lang nila naririnig kundi nakikita rin ang kasiyahan ng lahat. Maawa kayo, mahal na Ada." },
    { time: 85300, text: "Sana'y bigyan ninyo ako ng paraan upang makalabas mula sa kasalukuyang kalagayan ko sa loob ng prutas na ito,' tugon ng buto." },
    { time: 95000, text: "" },
    { time: 95500, text: "Naantig si Ada sa kahilingan ng buto. Sa isang iglap, nilabas niya ang kanyang kinang-kining pananglaw." },
    { time: 104000, text: "Agad na nakalaya ang buto mula sa madilim na kulungan." },
    { time: 108200, text: "" },
    { time: 108500, text: "Napakasaya ng buto sa pagmasid sa kasiyahan ng kagubatan. Sumali siya sa sayawan at kantahan ng mga hayop at halaman." },
    { time: 118000, text: "" },
    { time: 118300, text: "Ngunit, nang maglaho na ang liwanag ng parol ng mga alitaptap at dumilim na ang paligid," },
    { time: 125500, text: "biglang naramdaman ng buto ang takot at lungkot. Sa unang ulan," },
    { time: 131200, text: "nagtago ang mga hayop sa mga kuweba at nagsiliparan ang mga halaman." },
    { time: 136100, text: "" },
    { time: 136800, text: "'Hindi pala ganito kaakit sa labas. Maaari kang mamatay sa ginaw," },
    { time: 142800, text: "mabingi sa ingay ng kulog, o tamaan ng kidlat. Ayoko nang lumabas,' bulong ng buto." },
    { time: 150500, text: "" },
    { time: 150800, text: "Ngunit hindi pinakinggan ni Ada ang hinaing ng buto. Bilang parusa," },
    { time: 156400, text: "pinagbawalan niya ang buto na bumalik sa loob ng kasoy at manatili ito sa labas." },
    { time: 162500, text: "" },
    { time: 162800, text: "Iyan ang kuwento ng Kasoy at ng kanyang di-makuntentong buto." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Kasoy</Text>
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


