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

  const audioFile = require('../../../assets/voiceover/BAHAYNIPAGONG.mp3');  // Example local audio file
  const navigationTarget = '/hard/BakitDalaDalaNiPagongAngKanyangBahay/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 500, text: "Noong mga unang panahon, minsan-minsan sinisugod ng bathalang maykapal si Barangaw mula sa alapaap upang tingnan kung maligaya ang ating mga ninuno." },
    { time: 11500, text: "May mga pagkakataon na nagpapakita si Barangaw bilang isang bahaghari upang pigilan ang mga unos na maaaring makasira sa mga pananim." },
    { time: 20000, text: "May mga pagkakataon rin na nag-anyong sultan siya, nakadamit ng kundiman at naglalakad sa loob at labas ng balangay." },
    { time: 29000, text: "Dalang niya ang isang kamagong na tungkod bilang tanda ng kanyang kapangyarihan." },
    { time: 34000, text: "Ito ang ginagamit niya sa mga masasama at bilang gantimpala sa mga mabubuti." },
    { time: 40000, text: "" },
    { time: 40700, text: "sang araw noong panahon ni Lakan Lumatay," },
    { time: 44600, text: "ipinag-utos ni Bathala kay Barangaw na pumunta sa Malanday upang malaman ang mga hinaing ng mga aliping namamahay at aliping sagigilid." },
    { time: 53600, text: "Habang naglalakad si Barangaw, naririnig niya ang mga hagulgol ng mga taong pinapalo ng lanubo ng bayabas." },
    { time: 62000, text: "" },
    { time: 62400, text: "'Ano kaya ito?' ng tanong ni Barangaw sa kanyang sarili. Walang nakikilalang tao," },
    { time: 68700, text: "subalit malinaw niyang naririnig ang mga daing mula sa silid na pinanggagalingan ng mga hagulgol ng mga taong ito. Nakita niya kung paano sila namimilipit sa sakit." },
    { time: 80000, text: "" },
    { time: 80500, text: "'Kawawa naman ang mga alipin', ang malungkot niyang nasabi." },
    { time: 85000, text: "" },
    { time: 85200, text: "Walang nakakita kay Barangaw dahil ang kasama niya ay bulag, ngunit siya'y nakakakita ng lahat." },
    { time: 92000, text: "" },
    { time: 93000, text: "Nakita niya si Lakan Lumatay na nakatayo at nagmamasid, habang pinapalo ng walang habas ni Magbitag ang isang alipin." },
    { time: 102000, text: "" },
    { time: 102200, text: "'Saang lugar mo itinago ang iyong anak na babae?' tanong ni Magbitag." },
    { time: 106600, text: "" },
    { time: 106800, text: "Sandali itong huminto sa pagsasampal sa alipin. Ang alipin ay hubad na at halos putok-putok na sa kanyang katawan." },
    { time: 115500, text: "" },
    { time: 115700, text: "'Hala, magsabi ka ng totoo. Kung hindi, mapaparusahan ka. Dapat mong pasalamatan si Lakan dahil may awa pa siya sa anak mo. Ano, magsasalita ka ba o hindi?'" },
    { time: 127000, text: "" },
    { time: 127300, text: "Tahimik lang si Barangaw. Humintay siya upang malaman ang buong kwento ng pagpapahirap. Pero walang sagot ang alipin." },
    { time: 135300, text: "" },
    { time: 135600, text: "'Matigas ang ulo mo! Tara, paluin mo ulit siya!' ang mabangis na utos ni Lakan Lumatay sa kanyang mga alipin." },
    { time: 143300, text: "Itapon mo siya sa ilog at pakainin ng buwaya kapag patay na." },
    { time: 148000, text: "" },
    { time: 148200, text: "Hinanda ni Magbitag ang kanyang bisig upang paluin muli ang alipin na halos walang malay na tao." },
    { time: 154700, text: "" },
    { time: 154900, text: "Ngunit biglang sinagka ni Barangaw ang kamay ni Magbitag gamit ang kanyang kamagong na tungkod." },
    { time: 161400, text: "Nahulog sa lupa ang kamay ni Magbitag at nanginginig ang buong katawan niya." },
    { time: 166500, text: "" },
    { time: 166700, text: "Galit na galit si Barangaw sa kalupitan na nakita niya mula kay Lakan Lumatay." },
    { time: 172000, text: "Lakan Lumatay! Ikaw ba ang nag-utos na saktan ang aliping ito? tanong ni Barangaw." },
    { time: 178400, text: "" },
    { time: 178600, text: "'Hulihin ang mapangahas!' ng mariin na utos ni Lakan Lumatay sa kanyang mga kasama. 'Isakay siya sa monggo at itapon sa ilog.'" },
    { time: 187500, text: "" },
    { time: 187800, text: "'Sayang, nasira ang bihis ko sa pagliligtas mo. Kung hindi dahil sa utos ng amo ko," },
    { time: 195000, text: "mas malala ang ikaway mo! Matigas talaga ang ulo mo!' ani Magbitag, handang paluin si Barangaw." },
    { time: 202200, text: "" },
    { time: 202400, text: "Ngunit pinigilan ni Barangaw ang pagsasampal. Humarap siya kay Magbitag at sinabi," },
    { time: 208500, text: "Masakit ang iyong mga gawain. Ngayon ay magbago ka na." },
    { time: 213300, text: "" },
    { time: 213500, text: "Nais sana ni Magbitag na sumugod pero hindi siya makagalaw." },
    { time: 217000, text: "" },
    { time: 217200, text: "Gusto namang hampasin ni Lakan Lumatay si Barangaw, ngunit wala siyang lakas." },
    { time: 222400, text: "" },
    { time: 222600, text: "'Kayong mga mapang-api, mukhang maganda ang inyong kasuotan ngunit wala kayong magandang kalooban." },
    { time: 229000, text: "Binigyan kayo ng puso't diwa ng Lumikha, subalit wala kayong habag sa kapwa tao." },
    { time: 235400, text: "Ito ang parusa sa inyo!' sabi ni Barangaw, habang itinutok ang kanyang tungkod sa kanila." },
    { time: 242000, text: "" },
    { time: 242400, text: "Ngunit nagbigay ng pahayag ang alipin, Patawarin mo ang aking puno. Itinatago ko ang aking anak dahil ayaw kong mapahamak siya." },
    { time: 251200, text: "Siya ay umiibig sa isang malayang tao, si Malaya. Hindi ko siya pinilit na mahalin si Lakan." },
    { time: 258000, text: "Ako ang may kasalanan. Patawarin mo na ang aking puno." },
    { time: 262000, text: "" },
    { time: 262600, text: "'Magaling ka, tapat na alipin hanggang sa dulo. Binabayaran mo ang kalupitan ng katapatan." },
    { time: 269500, text: "Dahil sa iyong pakiusap, hindi ko paparusahan ang iyong puno at ang mga pumatay sa iyo." },
    { time: 276000, text: "Ngunit sila, sila'y dapat parusahan. Ngayon, magiging katulad sila ng ibang hayop;" },
    { time: 283000, text: "ngunit kung may mahanap silang silungan, dadalhin nila ang kanilang tahanan.'" },
    { time: 288000, text: "" },
    { time: 288200, text: "Tinapos niya ang kanyang tungkod kay Lakan at kay Magbitag. 'Simula ngayon," },
    { time: 293700, text: "dadalhin ninyo ang inyong tahanan at kayo'y uusad na parang ibang hayop upang hindi muling pamarisan.'" },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bakit Dala-Dala Ni Pagong Ang Kanyang Bahay</Text>
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


