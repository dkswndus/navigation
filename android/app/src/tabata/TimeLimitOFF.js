import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View, TextInput, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { theme } from "../compponents/theme";
import { TopBar1 } from "../compponents/TopBar";
import { Button2, Button6 } from "../compponents/Button";
import { DropdownComponent2 } from '../compponents/DropDown';
import { generalGymData,martialArtsGymData } from './data';

const Container1 = styled.View`
  background-color: ${({ theme }) => theme.background};
`;

const Container2 = styled.View`
  align-items: center;
  padding-bottom:10px;
`;

const Container3 = styled.View`
  padding-right: 22px;
  align-items: flex-end;
  padding-bottom: 240px;
`;

const Container4 = styled.View`
width: 365px;
  padding-bottom: 110px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.solidLine};
 
`;

const InputRowContainer = styled.View`
  flex-direction: row;
  padding-left: 14px;
  margin-bottom: 10px;
`;

const InputRow = styled.View`
  flex-direction: row;
  padding-left: 14px;
  margin-bottom: 10px;
`;

const InputLabel = styled.Text`
  font-size: 15px;
  margin-right: 10px;
  color: ${theme.main};
`;

const InputField = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  flex: 1;
`;

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

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;


const TimeLimitOFF = ({ route }) => {
  const navigation = useNavigation();
  const [valueDropdown2, setValueDropdown2] = useState(null);

  const navigateToTimeLimitON = () => {
    navigation.navigate('TimeLimitON');
  };

  const navigateToCircularTimer = () => {
    if (valueDropdown2 === '1' || valueDropdown2 === '2') {
      navigation.navigate('CircularTimer');
    } else {
      console.warn('DropdownComponent2에서 올바른 값이 선택되지 않았습니다.');
    }
  };

  const navigateToFlatList = () => {
    if (valueDropdown2 === '1' || valueDropdown2 === '2') {
      navigation.navigate('FlatList', { dropdownValue: valueDropdown2 });

    } else {
      console.warn('DropdownComponent2에서 올바른 값이 선택되지 않았습니다.');
    }
  };


  return (
    <ScrollView>
      <ThemeProvider theme={theme}>
        <Container1>
          <TopBar1 />
          <Container2>
          <DropdownComponent2 value={valueDropdown2} setValue={setValueDropdown2} />
          </Container2>

          <Container3>
            <TimeOffButtonContainer onPress={navigateToTimeLimitON}>
              <TimeOffButtonText>Time Limit OFF</TimeOffButtonText>
            </TimeOffButtonContainer>
          </Container3>

          <Container2>
            <Container4>
             


              <TouchableOpacity onPress={navigateToFlatList}>
                <Button6 title={`+ 운동 추가하기 `}/>
              </TouchableOpacity>
            </Container4>
              <TouchableOpacity  onPress={navigateToCircularTimer}>
              <Button2 title="운동 시작" />
              </TouchableOpacity>
     
          </Container2>

          <StatusBar backgroundColor="black" />
        </Container1>
      </ThemeProvider>
    </ScrollView>
  );
};

export default TimeLimitOFF;
