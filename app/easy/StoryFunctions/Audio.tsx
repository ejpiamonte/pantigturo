import React, { useState, useRef, useCallback } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import Slider from '@react-native-community/slider';
import useLoadFonts from './Fonts';

const { width, height } = Dimensions.get('window');

interface Lyric {
  time: number;
  text: string;
}

const lyrics: Lyric[] = [
  ];

interface AudioPlayerProps {
    audioFile: any;  // Type as 'any' to support `require()` or URLs
    navigationTarget: string;
    lyrics: Lyric[]; // Pass lyrics as a prop
    scrollViewStyle?: object; // New optional prop for custom styles
  }

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile, navigationTarget, lyrics, scrollViewStyle, }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1.0);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const flatListRef = useRef<FlatList<Lyric> | null>(null);

    const fontsLoaded = useLoadFonts();
  
    if (!fontsLoaded) {
      return null; // Render nothing or a loading indicator until fonts are loaded
    }
    
  const loadAudio = async () => {
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        audioFile,
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      setSound(sound);
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

  const handlePress = () => {
    router.push(navigationTarget);
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

  return (
    <View style={styles.mainContainer}>
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
          <ScrollView contentContainerStyle={[styles.scrollViewContainer, scrollViewStyle,]}>
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
  );

};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

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
      backgroundColor: 'rgba(190, 215, 220, .9)',
    },
    title: {
      marginTop: 30,
      marginBottom: 50,
      paddingHorizontal: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white',
      textShadowColor: 'rgba(190, 215, 220, 1)',
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
  

export default AudioPlayer;


