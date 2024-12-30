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

  const audioFile = require('../../../assets/voiceover/ALAMATNGBAYABAS.mp3');  // Example local audio file
  const navigationTarget = '/medium/AlamatNgBayabas/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Sa lumang panahon bago pa dumating ang mga Kastila sa Pilipinas," },
    { time: 5500, text: "may isang sultan na lubhang mapaniil at hindi marunong magpatawad." },
    { time: 11000, text: "Ito ay si Sultan Barabas. Sa kanyang nasasakupan, takot na takot ang mga tao sa kanya dahil sa kanyang kalupitan." },
    { time: 20100, text: "" },
    { time: 20500, text: "Ang salita ni Sultan Barabas ay batas. Hindi niya sinusunod ang kahit anong katarungan." },
    { time: 27400, text: "Hindi niya pinapatawad ang sinumang lumabag sa kanyang mga utos, maging matanda man o bata," },
    { time: 34500, text: "lalaki o babae. Mahigpit ang mga parusa na ipinapataw niya sa mga lumalabag" },
    { time: 41400, text: "sa kahit na maliit na kasalanan, upang ito ay magsilbing babala sa iba." },
    { time: 47000, text: "" },
    { time: 47300, text: "Tuwing araw, maayos na nakadamit si Sultan Barabas ng mamahaling damit." },
    { time: 53000, text: "Palaging may suot na gintong korona sa kanyang ulo, na ipinapakita niya kahit saan siya magpunta." },
    { time: 60000, text: "Ito ay isang simbolo ng kanyang kapangyarihan at pagiging pinakamataas sa lahat." },
    { time: 66200, text: "" },
    { time: 66600, text: "Kahit sagana siya sa masasarap na pagkain, si Sultan Barabas ay napakadamot." },
    { time: 72400, text: "Hindi niya pinapayagan ang mga pulubi na humingi ng tulong o makahingi ng kahit kaunting pagkain sa kanya." },
    { time: 80500, text: "Hindi rin niya pinapapasok ang sinuman sa kanyang malawak na hardin na puno ng mga bunga," },
    { time: 87300, text: "maliban sa kanyang mga alipin na tagapitas ng mga prutas." },
    { time: 92000, text: "Mas pinipili pa niya na masayang ang mga bunga kaysa ibigay ito sa iba." },
    { time: 97200, text: "" },
    { time: 97500, text: "Isang araw, hinuli ng mga tauhan ni Sultan Barabas ang isang mangingisda dahil nagdahilan itong ginabi sa pagpapangisda. " },
    { time: 107500, text: "Walang habag na ipinakulong ng sultan ang mangingisda at pinahirapan pa ito bilang aral." },
    { time: 114200, text: "" },
    { time: 114500, text: "Nalaman ito ng asawa ng mangingisda at agad siyang pumunta sa palasyo ng sultan kahit na gabi na." },
    { time: 122000, text: "Ang asawa ng mangingisda ay bihasa sa paggawa ng isdang daing, na ito ang nagsisilbing pagkain nila." },
    { time: 130300, text: "" },
    { time: 130600, text: "Sa galit at pagmamahal, tumungo ang babae sa palasyo at kinatok ang pintuan ng sultan." },
    { time: 138000, text: "Sa pagbabanta niya, kinuha niya ang korona ng sultan at tumakbo palayo." },
    { time: 144200, text: "Habol si Sultan Barabas, at nang maabutan niya ang babae, nagkatagpo sila sa hardin ng sultan." },
    { time: 152100, text: "Sa pagtakbo, bigla na lamang napagod at sumabog si Sultan Barabas." },
    { time: 157500, text: "" },
    { time: 157500, text: "Sa mismong lugar na iyon siya ipinaglibing. May bagong sultan na nag-angat sa kapangyarihan," },
    { time: 164600, text: "isa na mas mabait at makatarungan kaysa kay Sultan Barabas." },
    { time: 169500, text: "Binuksan niya ang hardin sa lahat upang kumain ng mga prutas na ito." },
    { time: 175000, text: "Sa gitna ng hardin, tumubo ang isang puno na magbubunga ng mga pait na bunga." },
    { time: 180500, text: "" },
    { time: 181500, text: "Nang lumaki at maging matamis na ang mga bunga, tinawag itong bayabas. Mula noon," },
    { time: 188700, text: "ito ang naging simbolo ng pagiging mapaniil at mapait na ugali ni Sultan Barabas." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Bayabas</Text>
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


