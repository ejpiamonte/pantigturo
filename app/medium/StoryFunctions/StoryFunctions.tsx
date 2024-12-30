import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Dimensions, ScrollView, ImageBackground, Alert } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import Slider from '@react-native-community/slider';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const { width, height } = Dimensions.get('window');

interface Lyric {
  time: number;
  text: string;
}

const lyrics: Lyric[] = [
  { time: 0, text: "" },
  { time: 800, text: "Pinatitibay ng lahat ang matibay na pagkakaibigan nina Masong at Lito." },
  { time: 5800, text: "Mula pa nang sila ay maliit pa, palaging magkasama" },
  { time: 9500, text: "at nag-aalalahanay sa bawat yugto ng kanilang buhay." },
  { time: 13000, text: "Sa kabila ng pagdaraan ng panahon, nananatili ang kanilang magandang" },
  { time: 17500, text: "samahan at pagtutulungan sa anumang hamon ng buhay." },
  { time: 21500, text: "" },
  { time: 21800, text: "Ngunit biglang nagbago ang lahat nang magkasakit ng malubha si Masong," },
  { time: 26300, text: "na humantong sa kanyang kamatayan." },
  { time: 29500, text: "Labis na nagdalamhati si Lito sa pagkawala ng kanyang kaibigan." },
  { time: 34000, text: "Hindi niya matanggap ang katotohanang wala na ang kanyang karamay." },
  { time: 38000, text: "Araw-araw niyang pinupuntahan ang puntod ni Masong," },
  { time: 41500, text: "nililinis at kinakausap na parang naroroon pa rin ito." },
  { time: 46800, text: "" },
  { time: 47300, text: "Isang araw, nadama ni Lito ang biglang pagbagsak ng kanyang kalusugan." },
  { time: 52500, text: "Hindi na niya kaya ang makipagsapalaran sa kalsada nang sa may puntod ng kaibigan." },
  { time: 58800, text: "Binawalan siya ng kanyang ina na magtungo sa libingan ni Masong." },
  { time: 62300, text: "Ilang araw siyang ganito, nahihilo at mahina." },
  { time: 66000, text: "" },
  { time: 67000, text: "Sa buong panahon ng kanyang pagkakasakit," },
  { time: 69800, text: "may isang maliit na hayop ang bumalik sa kanilang tahanan." },
  { time: 74000, text: "Palagi itong itinataboy ng kanyang ina," },
  { time: 76800, text: "ngunit lagi itong bumabalik at tila nagbabantay sa kanyang silid." },
  { time: 81000, text: "" },
  { time: 81200, text: "Nang magaling na si Lito, agad niyang pinuntahan ang puntod ni Masong." },
  { time: 86000, text: "Nakita niya ang hayop na lagi nilang itinataboy ng kanyang ina," },
  { time: 90000, text: "nakatayo sa tapat ng puntod at kawag ang buntot." },
  { time: 94200, text: "" },
  { time: 94600, text: "Mula noon, hindi na iniwan ng hayop si Lito. Matulog man siya o magising," },
  { time: 100600, text: "lagi itong nasa tabi niya, kumakawag sa buntot. Dahil sa hayop na ito," },
  { time: 106000, text: "unti-unting nalimutan ni Lito ang lungkot sa pagkamatay ni Masong." },
  { time: 110300, text: "" },
  { time: 110800, text: "Tinawag ni Lito ang hayop na Masong," },
  { time: 113500, text: "ngunit sa paglipas ng panahon," },
  { time: 115500, text: "naging aso na ang tawag nila dito." },
  // Add more lines with their corresponding timestamps in milliseconds
];

export default function App() {

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const flatListRef = useRef<FlatList<Lyric> | null>(null);

  const loadAudio = async () => {
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../../assets/voiceover/ALAMATNGASO.mp3'),
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      setSound(sound);
  
      // Check if the status is loaded successfully before accessing isPlaying
      if (status.isLoaded) {
        setIsPlaying(status.isPlaying);
      } else {
        setIsPlaying(false);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load the sound');
    }
  };
  
  useFocusEffect(
    useCallback(() => {
      const loadOrResumeAudio = async () => {
        if (sound) {
          const status = await sound.getStatusAsync();
          if (status.isLoaded) {
            if (status.isPlaying) {
              setIsPlaying(true); // If audio is playing, set isPlaying to true
            } else {
              await sound.playAsync();
              setIsPlaying(true); // Set isPlaying to true when audio starts playing
            }
          } else {
            await loadAudio();
          }
        } else {
          await loadAudio();
        }
      };
  
      loadOrResumeAudio().catch(error => {
        console.error('Failed to load or resume playback:', error);
      });
  
      return () => {
        cleanupSound().catch(error => {
          console.error('Failed to stop or unload sound:', error);
        });
      };
    }, [sound])
  );
  

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.isPlaying) {
      const currentTime = status.positionMillis ?? 0;
      const lineIndex = lyrics.findIndex((line) => currentTime < line.time);
      setCurrentLine(lineIndex === -1 ? lyrics.length - 1 : Math.max(0, lineIndex - 1));

      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: Math.max(0, lineIndex - 1),
          animated: true,
        });
      }
    }
  };

  const playPauseAudio = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = async () => {
    if (sound) {
      if (isMuted) {
        await sound.setIsMutedAsync(false);
        setVolume(1.0);
      } else {
        await sound.setIsMutedAsync(true);
        setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  const changeVolume = async (value: number) => {
    if (sound) {
      await sound.setVolumeAsync(value);
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  const handleLyricPress = async (time: number) => {
    if (sound) {
      await sound.setPositionAsync(time);
    }
  };

  const resumePlayback = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && !status.isPlaying) {
        await sound.playAsync();
      }
    }
  };

  const cleanupSound = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      resumePlayback().catch(error => {
        console.error('Failed to resume playback:', error);
      });

      return () => {
        cleanupSound().catch(error => {
          console.error('Failed to stop or unload sound:', error);
        });
      };
    }, [sound])
  );

  const renderItem = ({ item, index }: { item: Lyric, index: number }) => (
    <Pressable onPress={() => handleLyricPress(item.time)}>
      <Text style={index === currentLine ? styles.highlightedLyric : styles.lyric}>
        {item.text}
      </Text>
    </Pressable>
  );

  const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => (
    <Pressable style={styles.togame} onPress={onPress}>
      <Text style={styles.buttonTextGame}>{title}</Text>
    </Pressable>
  );

  const handlePress = () => {
    router.push('/easy/AlamatNgAso/GameScreen');
  };

  return (
    <ImageBackground source={require("../../../assets/Main-BG.png")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ang Alamat ng Aso</Text>
        
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={volume}
          onValueChange={changeVolume}
        />
        <Text>Volume: {Math.round(volume * 100)}%</Text>
        <View style={styles.row}>
          <Pressable onPress={playPauseAudio} style={styles.button}>
            <Text style={styles.buttonText}>{isPlaying ? '⏸' : '▶'}</Text>
          </Pressable>
          <Pressable onPress={toggleMute} style={styles.button}>
            <Text style={styles.buttonText}>{isMuted ? '🔈' : '🔊'}</Text>
          </Pressable>
        </View>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <FlatList
                ref={flatListRef}
                data={lyrics}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
                scrollEnabled={false}
                extraData={currentLine}
              />
              <CustomButton title="Go to Game" onPress={handlePress} />
          </ScrollView>
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
  row: {
    flexDirection: 'row',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'rgba(236, 194, 157, .8)',
  },
  title: {
    marginTop: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textShadowColor: 'rgba(236, 194, 157, .8)', // Outline color
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    fontFamily: 'IrishGrover-Regular',
  },
  lyric: {
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    paddingVertical: 2,
    color: 'black',
    fontFamily: 'Inika-Regular',
  },
  highlightedLyric: {
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    paddingVertical: 2,
    color: 'white',
    fontFamily: 'Inika-Regular',
  },
  togame: {
    backgroundColor: '#fff82b',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    margin: 20,
    paddingHorizontal: 20,
    marginHorizontal: 85,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonTextGame: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '',
    borderRadius: 5,
  },
  slider: {
    width: 300,
    height: 40,
  },
});
