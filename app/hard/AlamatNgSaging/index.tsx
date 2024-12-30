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

  const audioFile = require('../../../assets/voiceover/ALAMATNGSAGING.mp3');  // Example local audio file
  const navigationTarget = '/hard/AlamatNgSaging/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 300, text: "Sa isang nayon, may tahimik na pamilya na namumuhay. Ang ama ay si Mang Bino at ang ina ay si Aling Pacita." },
    { time: 8000, text: "Ang kanilang anak na babae ay si Tina. Si Tina ay lumaking maganda kaya't maraming nagkagusto sa kanya." },
    { time: 15000, text: "Ngunit mataas ang mga pangarap ng kanyang mga magulang para sa kanya. Kaya kapag may mahirap na binata ang nanliligaw sa kanya," },
    { time: 22000, text: "pinapakitaan nila ito ng masamang mukha. Madalas din silang magparungitan ng mga maralitang manliligaw," },
    { time: 29000, text: "na sinasabi lang nilang sayang ang kagandahan ni Tina kung ang kanyang kapalaran ay magiging tulad lang ng kanilang kahig isang tuka." },
    { time: 37000, text: "" },
    { time: 38000, text: "Kabilang sa mga nagkagusto kay Tina ay si Rading. Siya ay isang magsasaka, kahit na mabait at guwapo." },
    { time: 45000, text: "Ngunit dahil siya ay isang simpleng magsasaka, tutol ang mga magulang ni Tina sa kanilang pagmamahalan." },
    { time: 52000, text: "Kahit na pilitin pa ni Rading na ipakita ang kanyang kabutihan, hindi pa rin pumapayag ang mga magulang ni Tina." },
    { time: 58800, text: "Gayunpaman, tinanggap pa rin ni Tina ang pag-ibig ni Rading." },
    { time: 63000, text: "" },
    { time: 63200, text: "Nagsumpaan sila na walang magtataksil at tanging kamatayan lang ang maaaring humadlang sa kanilang pag-iibigan." },
    { time: 70000, text: "Sa lihim na pag-uusap, naisipan nilang huwag nang sabihin sa mga magulang ni Tina" },
    { time: 75000, text: "ang kanilang pagmamahalan, sa takot na hindi ito pahintulutan." },
    { time: 80000, text: "" },
    { time: 80300, text: "Napansin ni Don Bruno ang kagandahan ni Tina at napagpasyahan niyang bisitahin ito." },
    { time: 85800, text: "Dumating si Don Bruno sa kanilang nayon, nagpakilala, at nagpakita ng magandang asal sa pamilya ni Tina." },
    { time: 93000, text: "Naging madalas ang pagbisita ni Don Bruno, at hindi nagtagal ay inamin niya ang kanyang pag-ibig kay Tina." },
    { time: 100000, text: "Tinanggihan ni Tina ang kanyang pag-ibig, ngunit hindi siya tumigil sa kanyang pagpilit." },
    { time: 105000, text: "Napilitan si Tina na sabihin kay Don Bruno na may iba na siyang minamahal." },
    { time: 110000, text: "" },
    { time: 110500, text: "Hindi paniwalaan ni Don Bruno ang sinabi ni Tina, dahil wala naman siyang nakitang ibang manliligaw sa dalaga maliban sa kanya." },
    { time: 119000, text: "Sinabi niya na hindi siya titigil sa panunuyo sa dalaga, maliban na lamang kung magpakita si Tina ng katibayan na may iba na nga ito." },
    { time: 128000, text: "Kapag nangyari ito, hindi na niya ito papakialaman." },
    { time: 132000, text: "At kung ipagtapat ng dalaga kung sino ang kasintahan niya, hindi niya ito sasabihin kahit kanino." },
    { time: 138000, text: "" },
    { time: 138500, text: "Para matigil na ang panunuyo ni Don Bruno, ipinagtapat ni Tina na si Rading ang kasintahan niya." },
    { time: 144800, text: "Hindi nagpakita ng galit si Don Bruno, ngunit may lihim siyang balak para mapasakanya si Tina." },
    { time: 151500, text: "" },
    { time: 151700, text: "Isang araw, habang wala si Tina at sumama ito sa kanyang kaibigan sa pamimili sa bayan, kinausap ni Don Bruno ang mga magulang ni Tina." },
    { time: 160800, text: "Inamin niya sa kanila tungkol kay Tina at Rading. Galit na galit si Mang Bino ngunit sinikap ni Don Bruno na pawiin ang galit ng ama ni Tina." },
    { time: 170300, text: "Iminungkahi niya na kung papayag ang mga magulang ay gusto niyang sila'y ikasal agad." },
    { time: 176000, text: "Dahil mayaman si Don Bruno, hindi nag-alinlangan ang mga magulang ni Tina na tanggapin ang kanyang alok." },
    { time: 182400, text: "Napagkasunduan nilang gawin ang kasal sa lalong madaling panahon." },
    { time: 187000, text: "" },
    { time: 187200, text: "Simula noon, mahigpit na bantay ang mga magulang kay Tina. Hindi na siya pinapayagan lumabas ng bahay nang mag-isa." },
    { time: 195000, text: "Palaging kasama niya ang kanyang ina saan man siya magpunta. Nawalan na ng lihim na pagkikita sina Tina at Rading." },
    { time: 203000, text: "Hindi alam ni Rading kung paano niya makakausap ang kanyang kasintahan." },
    { time: 207000, text: "Madalas siyang pumunta sa bahay nila para makita lamang si Tina. Subalit palaging umuuwi ng bigo." },
    { time: 213500, text: "" },
    { time: 213700, text: "Isang araw, nakita ni Rading na mag-isa sa bahay si Aling Pacita. Dala nito ang basket ng pagkain na ihahatid sa asawa na nagtatrabaho sa bukid." },
    { time: 223300, text: "Dati-rati'y kasama ng ina si Tina sa paghahatid ng pagkain. Hindi pinilit ng ina si Tina na sumama sa takot na baka makita ng binata at magkausap silang dalawa." },
    { time: 234200, text: "Nang tanghaling iyon ay hindi sumama si Tina sa paghahatid ng pagkain sa bukid." },
    { time: 239500, text: "Nagreklamo si Tina na masakit ang kanyang ulo, at nang masdan ng ina ang noo ng anak, mainit ito at tila may lagnat nga." },
    { time: 247300, text: "" },
    { time: 248200, text: "Pag-alis ni Aling Pacita, dali-daling pumunta si Rading sa bahay nila at nagpatao-po." },
    { time: 254000, text: "Nang marinig ni Tina ang boses ng kanyang kasintahan, pinilit niyang bumangon kahit masama ang kanyang pakiramdam." },
    { time: 260500, text: "Pinapasok ni Tina si Rading at sila'y nag-usap sa tabi ng bintana." },
    { time: 265000, text: "" },
    { time: 265500, text: "Sabik na nagkwentuhan ang dalawang matagal nang hindi nagkita. Hindi nila namalayan ang oras sa kanilang pag-uusap." },
    { time: 272300, text: "Hindi nila napansin ang pagdating ni Mang Bino, na sumugod agad sa kanilang dalawa." },
    { time: 278000, text: "May hawak na matalim na gulok si Mang Bino, at bigla niyang sinugod si Rading at tinaga ang kamay ng binata na nakalawit sa bintana." },
    { time: 287000, text: "Dahil mababa ang bahay, nahagip ni Mang Bino ang kamay ni Rading. Naputol ang kamay ni Rading at bumagsak ito sa lupa." },
    { time: 295400, text: "Nangakong magpakasal si Mang Bino at ang ina ni Tina kay Don Bruno." },
    { time: 300000, text: "" },
    { time: 300800, text: "Nang magising si Tina, nasa loob na siya ng kanyang silid. Nakita niya ang kanyang ina sa kanyang tabi." },
    { time: 307000, text: "Tinanong niya ang ina kung nasaan si Rading at ang kanyang ama." },
    { time: 311100, text: "Napahagulgol siya ng malaman na hindi na umabot sa pagamutan si Rading at dinala na ng mga awtoridad ang kanyang ama." },
    { time: 319300, text: "Pilit siyang bumangon at hindi napigil ng ina ang kanyang paglabas ng bahay." },
    { time: 324300, text: "Tinungo niya ang lugar kung saan nahagip ng gulok ang kamay ni Rading at niyakap niya ang putol na kamay ng binata." },
    { time: 332000, text: "" },
    { time: 332500, text: "Ibinabaon niya ang kamay sa kanilang halamanan. At araw-araw, hinahaplos niya ang lupa na natatabunan ang kamay ng minamahal," },
    { time: 342000, text: "habang luha ang kanyang tinatangis at sinasabi ang pangalang 'Rading, Rading.'" },
    { time: 349000, text: "" },
    { time: 349500, text: "Hindi nagtagal, may tumubo ng halaman sa pook na iyon, at nang mamunga ito, katulad na katulad ng mga daliri ng kamay ni Rading." },
    { time: 359000, text: "Kinausap ng mga tao sa nayon ang bunga ng halamang iyon na tinawag nilang kamay ni Rading." },
    { time: 365000, text: "Nang lumaon, ipinasiya nilang tawagin itong saging." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Saging</Text>
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


