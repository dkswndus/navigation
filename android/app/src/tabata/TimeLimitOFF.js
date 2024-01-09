import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View, TextInput, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { theme } from "../compponents/theme";
import { TopBar1 } from "../compponents/TopBar";
import { Button2, Button6 } from "../compponents/Button";
import { DropdownComponent2 } from '../compponents/DropDown';
import FlatList from './FlatList';

const Container1 = styled.View`
  background-color: 'rgba(255, 255, 255, 1)';
`;

const Container2 = styled.View`
  align-items: center;

`;

const Container3 = styled.View`
  padding-right: 22px;
  align-items: flex-end;

`;

const Container4 = styled.View`
padding-bottom: 245px;
`;


const LineContainer = styled.View`
padding-left: 22px;
`;

const Container5 = styled.View`

width: 365px;
border-top-width: 1px;
border-top-color:' rgba(0,0,0,0.2)';

`;
const Container6 = styled.View`
align-items: center;
padding-bottom:130px;
margin-top:90px;
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
  justify-content: space-between;
  margin-top: -10px;
  padding-bottom: -20px;
`;

const TextInputStyled = styled.TextInput`
 
  margin-right: 10px;

  text-align: left; 
`;

const ExerciseText = styled.Text`


  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
  border-top-width: 1px; 
  border-bottom-color:' rgba(0,0,0,0.2)'; 
`;

const TimeLimitOFF = ({ route }) => {
  const navigation = useNavigation();
  const [valueDropdown2, setValueDropdown2] = useState(null);
  const { selectedItems = [] } = route.params || {};
  const [sets, setSets] = useState({});
  const [reps, setReps] = useState({});
  const [prepareTime, setPrepareTime] = useState({});

  const navigateToTimeLimitON = () => {
    navigation.navigate('TimeLimitON');
  };

  const navigateToCircularTimer = () => {
    if (valueDropdown2 === '1' || valueDropdown2 === '2') {
      navigation.navigate('CircularTimer');
    }
  };

  const navigateToFlatList = () => {
    if (valueDropdown2 === '1' || valueDropdown2 === '2') {
      navigation.navigate('FlatList', { dropdownValue: valueDropdown2 });
    }
  };

  const handleSetsChange = (exercise, value) => {
    setSets((prevSets) => ({ ...prevSets, [exercise]: value }));
  };

  const handleRepsChange = (exercise, value) => {
    setReps((prevReps) => ({ ...prevReps, [exercise]: value }));
  };

  const handlePrepareTimeChange = (exercise, value) => {
    setPrepareTime((prepareTime) => ({ ...prepareTime, [exercise]: value }));
  };
  const ScrollViewContainer = styled.View`
  margin-top: 10px;
`;

  return (
    <View>
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
        <Container4>
          <ScrollView>
            {selectedItems.map((exercise, index) => (
              <View key={index}>
                <ExerciseText>{exercise}</ExerciseText>
                <InputContainer>
                  <TextInputStyled
                    placeholder="세트"
                    keyboardType="numeric"
                    value={sets[exercise]}
                    onChangeText={(value) => handleSetsChange(exercise, value)}
                  />
                  <TextInputStyled
                    placeholder="횟수"
                    keyboardType="numeric"
                    value={reps[exercise]}
                    onChangeText={(value) => handleRepsChange(exercise, value)}
                  />
                  <TextInputStyled
                    placeholder="준비시간 (초)"
                    keyboardType="numeric"
                    value={prepareTime[exercise]}
                    onChangeText={(value) => handlePrepareTimeChange(exercise, value)}
                  />
                </InputContainer>
              </View>
            ))}
          </ScrollView>
        </Container4>
        <LineContainer>
        <Container5>
          <TouchableOpacity onPress={navigateToFlatList}>
            <Button6 title={`+ 운동 추가하기 `} />
          </TouchableOpacity>
          
        </Container5>
        </LineContainer>
        
        <Container6>
        <TouchableOpacity onPress={navigateToCircularTimer}>
            <Button2 title="운동 시작" />
          </TouchableOpacity>

        </Container6>


      </Container1>


      <StatusBar backgroundColor="black" />
    </View>




  );
};

export default TimeLimitOFF;
