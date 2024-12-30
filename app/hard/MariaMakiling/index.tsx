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

  const audioFile = require('../../../assets/voiceover/MARIAMAKILING.mp3');  // Example local audio file
  const navigationTarget = '/hard/MariaMakiling/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 800, text: "Si Maria ay iisang anak nina Dayang Makiling at Gat Panahon, na parang mga bathala o engkantado sa kasalukuyang panahon." },
    { time: 10000, text: "Siya ang natatanging mutya sa kanilang tahanan at siyang ligaya ng kanyang ama at ina." },
    { time: 15500, text: "Siya ang liwanag ng kanilang mga mata at galak ng kanilang puso." },
    { time: 21000, text: "Sa isang salita, siya ang kayamanan ng kanilang buhay." },
    { time: 26000, text: "Sa kanilang pagtanda, si Maria ang nagbibigay buhay at kulay sa kanilang mga araw na unti-unting nawawalan ng sigla at lakas." },
    { time: 35000, text: "" },
    { time: 35400, text: "Hindi si Maria taga-lupa, ngunit nagpapakita siya ng kabutihan sa mga tao sa paligid." },
    { time: 41800, text: "Noong mga panahong iyon, maaring makipag-usap ang mga tao sa mga engkanto, at maaari rin nilang tulungan ang isa't isa." },
    { time: 50000, text: "Sa kanyang pang-araw-araw na pagdalaw sa bayan upang mamili," },
    { time: 53500, text: "nakasuot si Maria ng mga damit na may burdang bulaklak at malalapad na guhit," },
    { time: 58500, text: "na angkop sa panahon ng mga iyon." },
    { time: 61200, text: "May maitim at makapal siyang buhok na umaabot hanggang sa kanyang sakong," },
    { time: 65200, text: "at sa kanyang dibdib ay may nakasabit na mabangong kuwintas." },
    { time: 70000, text: "Mahinhin siyang kumilos at palaging puno ng galang. Ang kanyang mukha ay tila salamin ng kagandahan," },
    { time: 76500, text: "at ang kanyang mga mata ay puno ng kabutihan. Ang lahat, maging ang mga maginoo, ay nagbibigay-galang sa kanya." },
    { time: 85500, text: "" },
    { time: 86200, text: "Madalas siyang may dalawang tagapaglingkod na kasama sa kanyang paglilibot sa bayan." },
    { time: 91800, text: "Mayroon silang mga buslo na puno ng mga luyang kulay-ginto na ibinebenta ni Maria." },
    { time: 97500, text: "Sa mga araw na tinatawag na 'pagpapalitan,' dumadayo ang maraming tao sa bayan upang makipamalit ng mga kailangan nila." },
    { time: 106000, text: "Sa araw na iyon, naglalakad si Gat Dula sa talipapa, na may kasamang mga kawal at mga pinuno." },
    { time: 114000, text: "Si Gat Dula ay taga-Bai at ang kanilang pagtungo sa bayan ng Makiling ay nangangailangan ng malaking bangka dahil sa kalayo ng dalawang bayan." },
    { time: 123000, text: "Kaya't kung sila ay sasakay sa kanilang mga kangga, aabutin sila ng tanghali bago makarating sa kanilang paroroonan." },
    { time: 131000, text: "" },
    { time: 132000, text: "Nagkagulo ang lahat sa talipapa dahil sa dami ng mga tao at ang kapal ng mga paninda." },
    { time: 138000, text: "Nagtaka ang lahat nang magkasalubong sina Maria at Gat Dula, at bigla silang nagkatinginan." },
    { time: 146300, text: "Sa pagkakataong iyon, nagkasabay ang kanilang paglakad at nagkasalubong ang kanilang mga balikat." },
    { time: 153000, text: "Hinawakan ni Gat Dula ang kamay ni Maria at nagpasalamat sa pagbibigay-galang." },
    { time: 158500, text: "Tinugon ni Maria ang kanyang ngiti ngunit biglang nawala at lumayo." },
    { time: 164400, text: "" },
    { time: 164600, text: "Mula noon, naging madalas na ang pagdalaw ni Gat Dula sa Makiling." },
    { time: 169000, text: "Ngunit simula noong araw na iyon, hindi na niya napapansin ang kagandahan ni Maria." },
    { time: 174000, text: "Hanggang isang araw, sa tabi ng batis, naramdaman nilang pareho na may taimtim na damdamin sila para sa isa't isa." },
    { time: 183000, text: "Nagyakapan sila at naging iisa ang langit at lupa." },
    { time: 187000, text: "Ngunit ang kanilang lihim na pag-iibigan ay hindi na lihim sa ama ni Maria." },
    { time: 193000, text: "" },
    { time: 193200, text: "Galit na galit si Gat Panahon sa nangyari, at kinailangan ni Maria na manatili sa kanilang tahanan." },
    { time: 199000, text: "Ngunit kahit na ipinagbawal sa kanya ang lumabas, hindi niya malilimutan ang pagmamahal ng kanyang ina sa kanyang mga sakop." },
    { time: 206800, text: "Tulad ng pagmamahal ng kanyang ina, pinahalagahan ni Maria ang kanyang mga sakop at pinapangalagaan sila." },
    { time: 214000, text: "Subalit sa kabila ng kanyang kabutihan, marami pa rin ang hindi nagpapakita ng utang na loob." },
    { time: 220000, text: "Hanggang sa isang araw, nag-isip ang iba na kunin ang kanilang mga bagay nang hindi ibinabalik kay Maria." },
    { time: 226700, text: "Dahil dito, napilitan si Maria na bawiin ang kanyang pahintulot na makapanguha ng mga bunga ng kahoy sa gubat." },
    { time: 233000, text: "Sinabi rin niya na ang sinuman ang hindi susunod sa kanyang mga utos ay magdudulot siya ng unos." },
    { time: 240000, text: "Subalit kahit na ito ang kanyang ipinagbawal, hindi pa rin natigil ang kasakiman ng ilan sa kanilang mga sakop." },
    { time: 247000, text: "" },
    { time: 247400, text: "Kahit sa wakas, hindi nagtagumpay ang pagmamahal ni Maria para kay Gat Dula." },
    { time: 253000, text: "Subalit ang kanyang pag-ibig ay nagbigay sa kanya ng lakas at katatagan sa kanyang mga laban." },
    { time: 258700, text: "At sa huli, kahit may mga bagay na hindi niya nagustuhan," },
    { time: 262500, text: "nanatili siya bilang isang mabuting lider at tagapamahala sa kanyang mga sakop." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ni Maria Makiling</Text>
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


