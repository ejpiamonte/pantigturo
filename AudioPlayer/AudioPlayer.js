import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import AudioWaveform from 'react-audio-waveform';

// Format time function
function formatTime(seconds) {
  let date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

const AudioPlayer = ({ audioFile }) => {
  const waveformRef = useRef(null);
  const audioRef = useRef(new Audio(audioFile)); // Create a new audio element
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState('');

  useEffect(() => {
    const audio = audioRef.current;
    if (audioFile) {
      const fileName = typeof audioFile === 'string' ? audioFile.split('/').pop() : '';
      setAudioFileName(fileName);
      audio.src = audioFile;
      audio.volume = volume;
      
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
    }

    return () => {
      audio.pause();
      audio.removeAttribute('src'); // Clean up the audio element
    };
  }, [audioFile]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (newVolume) => {
    const audio = audioRef.current;
    audio.volume = newVolume;
    setVolume(newVolume);
    setMuted(newVolume === 0);
  };

  const handleMute = () => {
    const audio = audioRef.current;
    setMuted(!muted);
    audio.volume = muted ? volume : 0;
  };

  const handleVolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1));
  };

  const handleVolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0));
  };

  return (
    <View style={styles.container}>
      <AudioWaveform
        ref={waveformRef}
        audioFile={audioFile}
        backgroundColor="#142646"
        progressColor="#981249"
        height={80}
        barWidth={3}
        barGap={4}
        barRadius={20}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePlayPause}>
          <Icon name={playing ? 'pause' : 'play'} size={24} color="#612b23" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMute}>
          <Icon name={muted ? 'volume-off' : 'volume-up'} size={24} color="#612b23" />
        </TouchableOpacity>
        <Slider
          style={styles.volumeSlider}
          minimumValue={0}
          maximumValue={1}
          step={0.05}
          value={muted ? 0 : volume}
          onValueChange={(value) => handleVolumeChange(value)}
        />
        <TouchableOpacity onPress={handleVolumeDown}>
          <Icon name="volume-down" size={24} color="#612b23" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVolumeUp}>
          <Icon name="volume-up" size={24} color="#612b23" />
        </TouchableOpacity>
      </View>
      <Text>Playing: {audioFileName}</Text>
      <Text>Duration: {formatTime(duration)} | Current Time: {formatTime(currentTime)}</Text>
      <Text>Volume: {Math.round(volume * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    padding: 20,
    width: '100%',
  },
  waveform: {
    width: '80%',
  },
  controls: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  volumeSlider: {
    width: 180,
  },
});

export default AudioPlayer;