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

  const audioFile = require('../../../assets/voiceover/ALAMATNGBULKANGMAYON.mp3');  // Example local audio file
  const navigationTarget = '/hard/BulkangMayon/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Noong unang panahon sa kaharian ng Albay, ang Raha ay may isang anak na kahanga-hanga." },
    { time: 8000, text: "Ito ay si Daragang Magayon, na ang pangalan ay nangangahulugang Magandang Dalaga." },
    { time: 15200, text: "" },
    { time: 15400, text: "Dahil sa kanyang kagandahan, maraming mga datu at mga ginoong kilala ang nagsilbing manliligaw sa kanya." },
    { time: 22500, text: "Isa sa mga nanligaw ay si Kauen, anak ng mayamang Raha sa kalapit na kaharian." },
    { time: 30000, text: "Naghandog siya ng mga hiyas at ginto, ngunit tinanggihan ito ni Daragang Magayon." },
    { time: 36000, text: "Bagaman nabigo si Kauen, ipinagmalaki pa rin niya na balang araw ay mapapasakanya ang dalaga." },
    { time: 43000, text: "" },
    { time: 43300, text: "Mula sa malayong Katagalugan, naririnig ni Gat Malaya ang balitang kagandahan ni Daragang Magayon." },
    { time: 50300, text: "Maraming pagkakataon na siyang makalapit sa dalaga, ngunit may mga sagabal." },
    { time: 56300, text: "Isang araw, sa tabi ng isang ilog, nakita niya ang dalaga na nag-aani ng bulaklak. Pagkatapos, nakita niya itong naliligo sa batis." },
    { time: 66000, text: "Upang bawiin ang kanyang pansin, nagpatugtog siya ng awit na nagpahayag ng kanyang paghanga." },
    { time: 73000, text: "Nagkaroon sila ng tinginang nagdala ng kasiyahan sa kanilang dalawa." },
    { time: 79000, text: "" },
    { time: 79200, text: "Nagpahayag ng kanyang pagmamahal si Gat Malaya, na nagpakilala bilang taga-malayo at pumunta upang makita ang kanyang kagandahan." },
    { time: 88000, text: "" },
    { time: 88200, text: "Sino ka? Hindi kita kilala! Ipinapakita mo ang kakapalan ng iyong mukha! tugon ni Daragang Magayon." },
    { time: 96000, text: "" },
    { time: 96200, text: "Ako'y si Gat Malaya, galing sa malapit na kaharian. Isang bulaklak lamang ang hinihiling ko mula sa iyo upang maging masaya." },
    { time: 104000, text: "" },
    { time: 104200, text: "Ngunit hindi agad ibinigay ng dalaga ang bulaklak. Hinagis niya ito at ito ay napadpad sa kamay ni Malaya." },
    { time: 113000, text: "" },
    { time: 113200, text: "Maari bang makita ka muli?” tanong niya." },
    { time: 117000, text: "" },
    { time: 117200, text: "At nagsimula ang kanilang mga pag-uusap sa ilog." },
    { time: 121000, text: "" },
    { time: 121200, text: "Isang araw, mamahalin kita. Tayo'y magpapakasal! mungkahi ni Malaya." },
    { time: 127500, text: "" },
    { time: 127700, text: "Ngunit paano ang aking ama, ang Raha?” ang nag-aalalang tanong ni Daragang Magayon. Dapat niyang malaman ang lahat!" },
    { time: 136000, text: "" },
    { time: 136400, text: "Wag kang mag-alala! Hihingin ko ang iyong kamay mula sa kanya!" },
    { time: 141000, text: "" },
    { time: 141200, text: "Pumayag ang Raha. Natuwa siya kay Malaya dahil sa kanyang magalang at kahalina-halina." },
    { time: 147500, text: "Itinakda ang kasal pagkatapos ng anihan." },
    { time: 151000, text: "" },
    { time: 151200, text: "Lumayo si Gat Malaya upang sabihin sa kanyang mga magulang ang tungkol sa kasal." },
    { time: 156000, text: "Kukunin niya ang kanilang pahintulot at silang tatlo ay babalik sa Albay." },
    { time: 161500, text: "" },
    { time: 161700, text: "Narinig ni Kauen ang balitang ito habang wala si Gat Malaya. Pinuntahan niya si Daragang Magayon at pinilit siyang pakasalan." },
    { time: 170000, text: "Ngunit tinanggihan siya ni Daragang Magayon at ipinahayag na si Malaya lamang ang kanyang pipiliin." },
    { time: 177000, text: "" },
    { time: 177200, text: "Ngunit sa kabila ng mga pag-aalala, hindi pa rin dumating si Malaya. Hindi na siya nagbalik." },
    { time: 184000, text: "Gabi-gabi, inaabangan ng dalaga ang kanyang pagdating." },
    { time: 187500, text: "" },
    { time: 187700, text: "Nang dumating ang araw ng kasal, pinilit ni Daragang Magayon na pakasalan si Kauen." },
    { time: 193000, text: "Mayroong maringal na kasalan, kainan, at sayawan." },
    { time: 197800, text: "" },
    { time: 198000, text: "Sa kabila ng kasayahan, dumating si Gat Malaya kasama ang kanyang mga magulang." },
    { time: 203000, text: "" },
    { time: 203300, text: "Dumating ako upang angkinin ang aking minamahal! abi ni Malaya." },
    { time: 207500, text: "" },
    { time: 207700, text: "Hindi pwede! sagot ni Kauen." },
    { time: 210500, text: "" },
    { time: 210600, text: "Nagkaroon sila ng isang labanan. Si Malaya ay marunong sa espada, ngunit si Kauen ay mapanlinlang at masanay." },
    { time: 219000, text: "" },
    { time: 219200, text: "Nang dumapo ang sibat ni Kauen, tumakbo si Daragang Magayon upang pumagitna." },
    { time: 224800, text: "Sa kasamaang-palad, tinamaan siya ng sibat. Inakap siya ni Malaya ngunit inaswang siya ni Kauen. Pareho silang namatay." },
    { time: 235400, text: "" },
    { time: 235600, text: "Nalungkot ang Raha at ang buong palasyo. Ipinautos niya na ilibing sila nang magkasama sa isang hukay." },
    { time: 243500, text: "" },
    { time: 243700, text: "Mga araw ang lumipas. Mayroong isang himala. Ang lupa sa itaas ng kanilang puntod ay unti-unting tumataas at naging isang bundok." },
    { time: 254000, text: "Ito ang tinatawag na Bundok ng Mayon, bilang alaala kay Daragang Magayon." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Bulkang Mayon</Text>
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


