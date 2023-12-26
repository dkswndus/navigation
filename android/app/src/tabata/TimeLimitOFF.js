import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View, ScrollView, TextInput, Text, Animated, Image } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { Swipeable } from 'react-native-gesture-handler';

import { theme } from "../compponents/theme";
import { TopBar1 } from "../compponents/TopBar";
import { Button2, Button6 } from "../compponents/Button";
import { DropdownComponent2 } from '../compponents/DropDown';

import { useNavigation } from '@react-navigation/native';
import Body from '../compponents/Body';
const remove = require("../assets/image/remove.png");

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
 const navigateToBody = ()=>{
  navigation.navigate('Body');
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

  const handleDelete = (indexToDelete) => {
    setStack((prevStack) => prevStack.filter((item, index) => index !== indexToDelete));
  };

  const renderRightActions = (progress, dragX, index) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1],
    });

    return (
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingTop: 40 }}>
          <Animated.View
            style={{
              transform: [{ translateX: trans }],
            }}
          >
            <Image source={remove} style={{ width: 30, height: 30 }} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
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
            <Swipeable
              key={`item-${currentCounter}`}
              renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, currentCounter)}
            >
              <View>
                <Button7Container onPress={navigateToBody}>
                  <Button5
                    title={`${currentCounter}. ______종목 설정______`}
                    color={theme.main}
                  
                  />
                </Button7Container>

                <InputRow>
                  <InputLabel style={{}}>횟수</InputLabel>
                  <InputLabel style={{}}>세트</InputLabel>
                </InputRow>

                <InputRowContainer>
                  <TextInput
                    placeholder="횟수 입력"
                    value={currentInput.reps}
                    onChangeText={(text) => {
                      validateAndSetInput('reps', text);
                      setCurrentInput((prevInput) => ({ ...prevInput, reps: text }));
                    }}
                    style={{ fontSize: 15, color: theme.main, marginRight: 80, marginLeft: -4 }}
                    keyboardType="numeric"
                  />

                  <TextInput
                    placeholder="세트 입력"
                    value={currentInput.sets}
                    onChangeText={(text) => {
                      validateAndSetInput('sets', text);
                      setCurrentInput((prevInput) => ({ ...prevInput, sets: text }));
                    }}
                    style={{ fontSize: 15, color: theme.main, marginRight: 80, marginLeft: -40 }}
                    keyboardType="numeric"
                  />
                </InputRowContainer>
              </View>
            </Swipeable>
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

          <StatusBar backgroundColor={theme.background} />
        </Container1>
      </ThemeProvider>
    </ScrollView>
  );
};

export default TimeLimitOFF;
