import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View, ScrollView, TextInput, Text, Animated, Image } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { Swipeable, TouchableHighlight } from 'react-native-gesture-handler';

import { theme } from "../compponents/theme";
import { TopBar1 } from "../compponents/TopBar";
import { Button2, Button6 } from "../compponents/Button";
import { DropdownComponent2 } from '../compponents/DropDown';

import { useNavigation } from '@react-navigation/native';

const remove = require("../assets/image/remove.png");
const more = require("../assets/image/more.png");

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
const Button7Container = styled(TouchableOpacity)`
  align-items: center;
  padding-bottom: 10px;

`;
const Button5Container = styled(TouchableOpacity)`
width: 365px;

padding-top: 10px;
padding-right: 12px;

border-top-width: 1px; 

border-color: ${({ theme }) => theme.solidLine};

`;

const Button5Title = styled(Text)`
    font-size: 20px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.9);

`;
const EventSettingContainer = styled.View`
flex-direction: row;
align-items: center;

`
export const Button5 = props => {
  return (
    <Button5Container>
      <Button5Title>{props.title}</Button5Title>
    </Button5Container>
  );
};


const TimeOffButtonContainer = styled(TouchableOpacity)`
  width: 149px;
  height: 30px;
  background-color: rgba(255, 169, 169, 0.28);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TimeOffButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
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
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setCurrentInput((prevInput) => ({ ...prevInput, [inputName]: text }));
    } else {
      setCurrentInput((prevInput) => ({ ...prevInput, [inputName]: 'error' }));
    }
  };



  const addToStack = () => {
    if (stack.length < 10) {
      const newIndex = stack.length;
      const currentCounter = counter;

      setStack((prevStack) => [
        ...prevStack,
        {
          key: `item-${currentCounter}`,
          component: (

            <View>

              <EventSettingContainer>
                <Button5
                  title={`${currentCounter}. ______종목 설정______`}
                  color={theme.main}

                />


              </EventSettingContainer>



              <InputRow>
                <InputLabel style={{}}>횟수</InputLabel>
                <InputLabel style={{}}> 세트</InputLabel>
              </InputRow>

              <InputRowContainer>
                <TextInput
                  placeholder="입력"
                  value={currentInput.reps}
                  onChangeText={(text) => {
                    validateAndSetInput('reps', text);
                    setCurrentInput((prevInput) => ({ ...prevInput, reps: text }));
                  }}
                  style={{ fontSize: 15, color: theme.main, marginRight: 80, marginLeft: -4 }}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="입력  "
                  value={currentInput.sets}
                  onChangeText={(text) => {
                    validateAndSetInput('sets', text);
                    setCurrentInput((prevInput) => ({ ...prevInput, sets: text }));
                  }}
                  style={{ fontSize: 15, color: theme.main, paddingLeft: -55 }}
                  keyboardType="numeric"
                />
              </InputRowContainer>
            </View>

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

        <Container1>
          <TopBar1 />
          <Container2>
            <DropdownComponent2 />
          </Container2>

          <Container3>
            <TimeOffButtonContainer onPress={navigateToTimeLimitON}>
              <TimeOffButtonText>Time Limit OFF</TimeOffButtonText>
            </TimeOffButtonContainer>
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

          <StatusBar barStyle="light-content" backgroundColor="black" />
        </Container1>
      </ThemeProvider>
    </ScrollView>
  );
};

export default TimeLimitOFF;
