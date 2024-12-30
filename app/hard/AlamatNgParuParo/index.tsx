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

  const audioFile = require('../../../assets/voiceover/ALAMATNGPARUPARO.mp3');  // Example local audio file
  const navigationTarget = '/hard/AlamatNgParuparo/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Noong unang panahon, may isang matandang babae na nanirahan malapit sa isang lawa." },
    { time: 6500, text: "Ang maliit niyang bahay ay napaliligiran ng mga halamang pinamumulaklakan." },
    { time: 12000, text: "May mga pulang gumamela, dilaw na santan, at iba pang bulaklak na kaniyang inaalagaan." },
    { time: 19000, text: "Dahil sa kanyang mabuting kalooban, kilala siya bilang isang Ada na, ayon sa mga usap-usapan, ay paminsan-minsan ay bumabata at gumaganda." },
    { time: 30000, text: "" },
    { time: 30500, text: "Tunay nga namang napakabait ng matandang Ada. Ipinagkakaloob niya ang mga bulaklak sa sinumang humihingi." },
    { time: 38000, text: "Alam niya na ang mga ito ay iniaalay sa simbahan tuwing may mga seremonya tulad ng binyag, kumpil, kasal, o libing." },
    { time: 47200, text: "" },
    { time: 47500, text: "Dahil sa respeto ng mga tao sa kanya, madalas siyang binibigyan ng mga ani mula sa mga kapitbahay." },
    { time: 54400, text: "Ngunit bilang pagbabalik ng kabutihan, kinukuha rin niya ang mga bulaklak para sa mga nangangailangan." },
    { time: 61000, text: "" },
    { time: 61500, text: "Napakakasundo at mapagkakatiwalaan ng mga tao sa kanilang lugar. Walang alitan sa kanilang komunidad. Lahat ay nagmamahalan." },
    { time: 70300, text: "" },
    { time: 70500, text: "Ngunit isang araw, dumating sa kanilang komunidad ang pamilya Amparo, isang mag-asawang tamad at palahingi." },
    { time: 79000, text: "Itinayo nila ang kanilang dampa sa isang bakanteng lote malapit sa hardin ni Ada." },
    { time: 84600, text: "At simula noon, patuloy silang humihingi ng tulong at kumakatok sa mga kapitbahay para humingi ng pagkain." },
    { time: 92000, text: "" },
    { time: 92400, text: "Isang beses, humingi rin sila kay Ada ng bulaklak." },
    { time: 96400, text: "Ngunit sa halip na gamitin ito sa mga seremonya tulad ng sinabi nila, itininda nila ito sa mataas na halaga." },
    { time: 104400, text: "" },
    { time: 104800, text: "Sa ikalawang pagkakataon, humingi ulit sila ng bulaklak kay Ada." },
    { time: 110000, text: "Subalit hindi na sila pinagbigyan dahil alam na ni Ada ang kanilang masasamang balak." },
    { time: 116000, text: "" },
    { time: 116400, text: "Dahil sa kanilang kasakiman, nagsikap ang pamilya Amparo na nakawin ang mga bulaklak ni Ada." },
    { time: 123000, text: "Isang gabi, pumasok sila sa hardin at pinagpipitas ang mga pinakamaganda at pinakamababangong bulaklak." },
    { time: 130500, text: "" },
    { time: 130800, text: "Ngunit nahuli sila ni Ada. Kahit na pinagsabihan, hindi sila sumuko at tuluyan na nilang inangkin ang mga bulaklak." },
    { time: 139000, text: "" },
    { time: 139800, text: "Parang awa niyo na, pagmamakaawa ni Ada. Huwag niyo sanang ubusin ang aking mga bulaklak!" },
    { time: 147000, text: "" },
    { time: 147200, text: "Hoy, pangit na matanda! Pasalamat ka't pinipili namin ang pinakamagandang bulaklak mo!" },
    { time: 153200, text: "Kung ikaw siguro ang bulaklak, hindi kita pipiliin! sagot ng pamilya Amparo." },
    { time: 159000, text: "" },
    { time: 159200, text: "Galit na galit ang matandang Ada. Maghintay kayo, mayroon akong magandang sorpresa para sa inyo." },
    { time: 166000, text: "" },
    { time: 166400, text: "Bumalik si Ada sa kanyang dampa at may dala siyang kakaibang likido. Pagbalik niya, inilahad niya ito sa pamilya Amparo." },
    { time: 174800, text: "" },
    { time: 175000, text: "Mula ngayon, sinusumpa ko ang inyong kasakiman! Dahil sa pagpili ninyo ng mga bulaklak," },
    { time: 181500, text: "kayo na ang magiging pinakamagandang insekto sa aking hardin." },
    { time: 185500, text: "Subalit hindi niyo na maaaring kunin ang mga bulaklak ko. Sa halip, masasaksihan ninyo ang kanilang kabuhayan." },
    { time: 194000, text: "" },
    { time: 195000, text: "Isinabog ni Ada ang likido sa pamilya Amparo. Sa isang iglap, naging maliit sila at nagmistulang insekto, ngunit may magagandang pakpak pa rin sila." },
    { time: 206000, text: "" },
    { time: 206200, text: "Mula noon, hindi na nakita pa ang pamilya Amparo sa kanilang komunidad." },
    { time: 211200, text: "Ngunit napansin ng lahat ang dalawang insektong palaging lumilipad-lipad sa hardin ni Ada." },
    { time: 218000, text: "Dahil sa kanilang kabuhayan sa magandang bulaklak, iniisip ng lahat na ito ang parusa ni Ada sa pamilya Amparo." },
    { time: 226000, text: "Kapansin-pansin din na pareho ang disenyo ng pakpak ng mga insekto, kaya't tinawag silang Amparo o Paru-paro." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Paru-Paro</Text>
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


