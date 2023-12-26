import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View, ScrollView, TextInput,Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import SwipeGesture from 'react-native-swipe-gestures';

import{theme} from "../compponents/theme";
import{TopBar1} from "../compponents/TopBar";
import{Button2,Button3,Button5,Button6} from "../compponents/Button"
import { DropdownComponent2 } from '../compponents/DropDown';

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Container1 = styled.View`
  background-color: ${({ theme }) => theme.background};
`;

const Container2 = styled.View`
  align-items: center;
`;

const Container3 = styled.View`
  padding-right: 22px;
  align-items: flex-end;
  padding-bottom: 300px;
`;

const Container4 = styled.View`
  padding-bottom: 80px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.solidLine};
`;

const Button5Container = styled.View`
  align-items: center;
  padding-bottom: 10px;
`;

const InputRowContainer = styled.View`
  flex-direction: row;
  padding-left: 14px;
  marginBottom: -10px;
`;

const InputRow = styled.View`
  flex-direction: row;
  padding-left: 14px;
  marginBottom: -10px;
`;

const InputLabel = styled.Text`
  font-size: 15px;
  margin-right: 80px;
`;

const TimeLimitOFF = () => {
  const navigation = useNavigation();

  const navigateToTimeLimitON = () => {
    navigation.navigate('TimeLimitON');
  };
  const [stack, setStack] = useState([]);
  const [counter, setCounter] = useState(1);
  const [currentInput, setCurrentInput] = useState({
    sets: '',
    reps: '',
  });

  const validateAndSetInput = (inputName, text) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 100) {
      setCurrentInput((prevInput) => ({ ...prevInput, [inputName]: text }));
    } else {
      setCurrentInput((prevInput) => ({ ...prevInput, [inputName]: 'error' }));
    }
  };

  const addToStack = () => {
    if (stack.length < 10) {
      const newIndex = stack.length * 10;
      setStack((prevStack) => [
        ...prevStack,
        {
          key: newIndex,
          component: (
            <SwipeGesture
              onSwipeRight={() => navigation.navigate('Home')}
              key={newIndex}
            >
              <View key={newIndex}>
                <Button5Container>
                  <Button5
                    title={`${counter}. ______종목 설정______`}
                    color={theme.main}
                    onPress={() => navigation.navigate('Home')}
                  />
                </Button5Container>

                <InputRow>
                  <InputLabel style={{ }}>횟수</InputLabel>
                  <InputLabel style={{ }}>세트</InputLabel>
                </InputRow>

                <InputRowContainer>
                  <TextInput
                    placeholder="횟수 입력"
                    value={currentInput.reps}
                    onChangeText={(text) => validateAndSetInput('reps', text)}
                    style={{ fontSize: 15, color: theme.main, marginRight: 80, marginLeft: -4 }}
                  />

                  <TextInput
                    placeholder="세트 입력"
                    value={currentInput.sets}
                    onChangeText={(text) => validateAndSetInput('sets', text)}
                    style={{ fontSize: 15, color: theme.main, marginRight: 80, marginLeft: -40 }}
                  />
                </InputRowContainer>
              </View>
            </SwipeGesture>
          ),
        },
      ]);
      setCounter((prevCounter) => prevCounter + 1);
      setCurrentInput({ sets: '', reps: '' });
    }
  };

  return (
    <ScrollView>
      <ThemeProvider theme={theme}>
        <TopBar1 />
        <Container1>
          <Container2>
            <DropdownComponent2 />
          </Container2>

          <Container3>
          <Button title="Time OFF" onPress={navigateToTimeLimitON} />
            {stack.map((item) => (
              <View key={item.key} style={{ marginTop: 10 }}>
                {item.component}
              </View>
            ))}
          </Container3>

          <Container2>
            <Container4>
              <TouchableOpacity onPress={addToStack}>
                <Button6 title={`+ 운동 추가하기 `} />
              </TouchableOpacity>
            </Container4>
            <Button2 title="운동 시작" />
          </Container2>

          <StatusBar backgroundColor={theme.background} />
        </Container1>
      </ThemeProvider>
    </ScrollView>
  );
};

export default TimeLimitOFF;
