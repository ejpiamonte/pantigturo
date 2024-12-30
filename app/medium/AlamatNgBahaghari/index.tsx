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

  const audioFile = require('../../../assets/voiceover/ALAMATNGBAHAGHARI.mp3');  // Example local audio file
  const navigationTarget = '/medium/AlamatNgBahaghari/GameScreen';  // Navigation route when the button is pressed
  const lyrics: Lyric[] = [
    { time: 0, text: "" },
    { time: 1500, text: "Sa umpisa pa lamang, mayroon nang pitong kulay sa mundo." },
    { time: 6000, text: "Sila ay sina Pula, Kahel, Dilaw, Luntian, Bughaw, Indigo, at Lila." },
    { time: 15200, text: "" },
    { time: 15800, text: "Inatasan sila ni Bathala na magbigay kulay sa mundo, ngunit sa di-inaasahang pagkakataon," },
    { time: 23500, text: "hindi sila nagkasundo. Sinabi ni Bathala na dapat silang magtulungan at magbigayan sa lahat ng oras," },
    { time: 31900, text: "ngunit hindi ito nangyari. Patuloy silang nagkakaproblema sa iba't ibang bagay." },
    { time: 39000, text: "Madalas silang magkumpitensya, lalo na sa kanilang trabaho." },
    { time: 43300, text: "" },
    { time: 43500, text: "Sabi ni Luntian, 'Ako ang may pinakamaraming nagawa dito, kaya dapat na ako ang mabigyan ng gantimpala ni Bathala.'" },
    { time: 52900, text: "" },
    { time: 53200, text: "Ngunit sinagot siya ni Bughaw," },
    { time: 56000, text: "'Anong sinasabi mo? Hindi hamak na mas marami ang aking ambag kaysa sa iyo." },
    { time: 62000, text: "Tingnan mo ang karagatan at ang kalangitan, at makikita mo ang aking pinaghirapan." },
    { time: 68200, text: "Kaya ako ang nararapat na mabigyan ng gantimpala na sinasabi mo.'" },
    { time: 73200, text: "" },
    { time: 73500, text: "Ngunit hindi nagtapos doon ang alitan, dahil sumali rin ang ibang mga kulay sa usapan." },
    { time: 81000, text: "Nagpapakita sila ng kanilang husay at walang nagpapatalo." },
    { time: 85800, text: "Gusto nilang lahat na mabigyan ng gantimpala," },
    { time: 89000, text: "kaya lalo pang tumindi ang kanilang pagkakumpitensya. Nagulo sila dahil sa kanilang pag-aaway." },
    { time: 96400, text: "" },
    { time: 96700, text: "Narinig ni Bathala ang kanilang pag-aaway. Dahil dito, nagalit si Bathala. Pinarusahan niya sila." },
    { time: 105200, text: "" },
    { time: 105600, text: "Sinabi niya, 'Dahil hindi kayo magkasundo, parurusahan ko kayo ayon sa inyong gusto." },
    { time: 112500, text: "Dahil laging kayong magkakakumpitensya," },
    { time: 116000, text: "gusto kong malaman ninyo ang halaga ng pagtutulungan at pagbibigayan." },
    { time: 121000, text: "Ang bawat isa sa inyo ay may mahalagang papel. Mula ngayon," },
    { time: 126000, text: "hanggang sa habang-buhay, gagawin ko kayong isa," },
    { time: 129800, text: "upang maunawaan ninyo ang inyong halaga at ang kagandahan ng bawat isa sa inyo.'" },
    { time: 135500, text: "" },
    { time: 136000, text: "Kaya pinagsama ni Bathala ang pitong kulay. Pinagdikit-dikit niya ang mga ito." },
    { time: 142000, text: "At dahil sa sobrang galit ni Bathala, siya ay umiyak." },
    { time: 146300, text: "At nagtago ang mga kulay sa takot kay Bathala. Lumabas lamang sila pagkatapos umiyak ni Bathala." },
    { time: 155000, text: "Ngunit nalaman nilang hindi na sila maipaghihiwalay kahit anong gawin nila." },
    { time: 161400, text: "At nalaman nila na mula sa pitong kulay, sila'y naging isa." },
    { time: 165800, text: "" },
    { time: 166200, text: "Dahil sa pangyayaring iyon, sinasabing si Bathala na kanilang hari ay nagpakita ng habag." },
    { time: 172000, text: "" },
    { time: 173200, text: "Kaya ngayon, ang hari na pinagmulan ng mga ito ay tinawag na bahaghari. Tinawag na bahaghari ang pitong kulay." },
    { time: 182200, text: "" },
    { time: 182500, text: "Makikita natin ngayon ang bahaghari lamang pagkatapos ng ulan," },
    { time: 187600, text: "na nangangahulugang umiyak si Bathala." },
    { time: 191000, text: "At makikita natin dito ang pitong kulay na naging isa na, na tinatawag nating Bahaghari." },
    // Add more lines with their corresponding timestamps in milliseconds
  ];

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat Ng Bahaghari</Text>
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


