import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
};

const CircularTimer = () => {
  const navigation = useNavigation();

  const [timerValue, setTimerValue] = useState(300);
  const [inputTime, setInputTime] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startTimer = () => {
    const remainingTimePercentage = timerValue / 300; // Adjust 300 to the initial time
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: timerValue * remainingTimePercentage * 1000, // Adjust duration calculation
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      console.log('타이머 종료!');
    });
  };

  const handleInputChange = (text) => {
    setInputTime(text);
  };

  const handleSetTime = () => {
    const newTime = parseInt(inputTime, 10);
    if (!isNaN(newTime) && newTime > 0) {
      setTimerValue(newTime);
      startTimer();
    }
  };

  useEffect(() => {
    animatedValue.addListener(({ value }) => {
      const remainingTime = Math.ceil(timerValue - timerValue * value);
      setTimerValue(remainingTime);
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue, timerValue]);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.circle}>
        <Text style={styles.timerText}>{formatTime(timerValue)}</Text>
      </Animated.View>

      <TextInput
        style={styles.input}
        placeholder="Enter time in seconds"
        keyboardType="numeric"
        value={inputTime}
        onChangeText={handleInputChange}
      />
      <Button title="Set Time" onPress={handleSetTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    color: 'white',
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    width: 200,
  },
});

export default CircularTimer;
