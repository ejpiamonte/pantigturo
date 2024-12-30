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

  const audioFile = require('../../../assets/voiceover/ASOATIPIS.mp3');  // Example local audio file
  const navigationTarget = '/hard/AsoAtIpis/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 2500, text: "Ang bahay ni Mang Kardo ay napaligiran ng mataas na mga puno at may malawak na hardin sa likuran." },
    { time: 9000, text: "Ang mga palay at iba't ibang pananim ang nagbibigay buhay sa paligid ng kanyang tahanan." },
    { time: 15000, text: "Sa harap ng bahay, malapit sa pintuan, matatagpuan ang tulugan ng aso." },
    { time: 21000, text: "Bagama't maliit lamang ang bahay, tila paraiso ang kapaligiran nito." },
    { time: 26000, text: "Ito ay tanging ang tahanan ni Mang Kardo sa bundok," },
    { time: 30500, text: "at ang kanyang kapitbahay ay nakatira sa kabilang bundok." },
    { time: 34000, text: "" },
    { time: 34500, text: "Sa isang Lunes, abala si Mang Kardo sa pagluluto sa loob ng bahay." },
    { time: 39500, text: "Ito ang araw ng kaarawan ng kanyang apo at mayroon siyang handang sorpresa." },
    { time: 44500, text: "Nagluto siya ng masarap na kanin at inihanda ang pinikpikan na may etag upang lalong maging masarap ang kanilang hapunan." },
    { time: 53000, text: "Nagtungo rin siya sa pagluluto ng dalawang layer ng cake upang pasayahin ang kanyang apo." },
    { time: 59000, text: "" },
    { time: 59200, text: "Binilin niya sa kanyang aso na bantayan ang kanilang bahay habang sinusundo niya ang kanyang apo sa kabilang bundok." },
    { time: 65800, text: "Sinabi niyang matatagal pa ang kanyang paglalakbay," },
    { time: 69000, text: "kaya't siya muna ang magbabantay sa kanilang tahanan." },
    { time: 72000, text: "" },
    { time: 72200, text: "'Sige, mag-iingat ka sa pagbaba ng bundok, asahan mong babantayan ko ang bahay pati na rin ang mga nilutong pagkain', sabi ng aso." },
    { time: 81800, text: "" },
    { time: 82800, text: "Naisip niya na siguradong bibigyan siya ng kanyang amo ng bahagi sa inihanda niyang pagkain kaya't minabuti niyang bantayan ng mabuti ang kanilang tahanan." },
    { time: 92800, text: "" },
    { time: 93000, text: "Tinawag ng aso ang kaibigang ipis at sinabing tulungan siya sa pagbabantay ng bahay." },
    { time: 98000, text: "" },
    { time: 98200, text: "Pinaakyat niya ito sa bubungan ng bahay para makita ang mga taong may masasamang balak at masabihan siya agad." },
    { time: 105600, text: "" },
    { time: 105800, text: "Umakyat nga ang ipis ngunit nakita nito ang cake sa lamesa, at bigla siyang nagutom." },
    { time: 111200, text: "Hindi napigilan ni Ipis ang kanyang sarili kaya't tinawag niya ang kanyang mga anak at mga kapamilya na alam niyang gutom din." },
    { time: 118200, text: "Kinain nila ang higit sa kalahati ng cake at humigop ng sabaw ng pinikpikan na may etag." },
    { time: 125000, text: "" },
    { time: 125200, text: "Nang umuwi si Mang Kardo kasama ang kanyang apo, nagulat sila nang makita ang cake at ang ilang putahe na nagkalat." },
    { time: 132000, text: "Galit na galit si Mang Kardo. Tinawag niya ang aso at ikinulong ito sa pag-aakala na ito ang gumawa ng kalokohang iyon." },
    { time: 140000, text: "Alam ng aso na ang kaibigang ipis ang gumawa ng bagay na ito, pero hindi niya ito sinabi sa kanyang amo." },
    { time: 147000, text: "" },
    { time: 147200, text: "Nakita ng ipis ang paghihirap ng Aso at naawa siya sa kanyang kaibigan." },
    { time: 152200, text: "Nag-isip siya ng paraan para iligtas ang kaibigan ngunit wala siyang magawa kaya isang plano ang nabuo sa kanyang isip." },
    { time: 159000, text: "" },
    { time: 159200, text: "'Kawawa ang kaibigan ko. Kailangang ako ang magbayad sa kasalanang ginawa ko', naisaisip ni ipis." },
    { time: 166000, text: "" },
    { time: 166200, text: "Isang umagang naghahanda ng almusal si Mang Kardo," },
    { time: 169500, text: "umakyat ang ipis sa lamesa at sinadyang ipakita sa matanda ang paglantak sa almusal nito." },
    { time: 176000, text: "Nakita ng aso ang ginagawa ng ipis at tinahulan niya ito." },
    { time: 179000, text: "" },
    { time: 179400, text: "'Huwag ipis, kung makita ka ng amo ko ay ikulong ka katulad ko', tahol pa nito." },
    { time: 185000, text: "" },
    { time: 185200, text: "'Hayaan mong malaman niya na ako ang gumagawa nito para makalaya ka', sagot ni Ipis." },
    { time: 190500, text: "" },
    { time: 190500, text: "Nakita nga ni Mang Kardo ang ipis at sa isang hampas nito ng aklong hawak ay namatay ang ipis." },
    { time: 197200, text: "Naisip niya na ito rin ang kumain sa handa ng kanyang apo at dahil dito ay pinakawalan niya at muling minahal ang aso." },
    { time: 205000, text: "" },
    { time: 205300, text: "Masaya ang aso na malaya na siya ngunit nahabag naman siya sa kaibigang ipis." },
    { time: 210800, text: "" },
    { time: 211000, text: "'Sumalangit nawa ang iyong kaluluwa,' dalangin ng Aso." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Si Aso At Si Ipis</Text>
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


