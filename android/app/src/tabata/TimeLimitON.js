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
padding-left: 20px;
padding-right: 20px;


`;

const Container3 = styled.View`
align-items: flex-end;
padding-right: 22px;


`;

const Container4 = styled.View`
padding-left: 20px;
padding-right: 20px;  
padding-top:20px;
`;


const LineContainer = styled.View`
padding-left: 20px;
padding-right: 20px;  
margin-bottom: 80px;

`;

const Container5 = styled.View`


border-top-width: 1px;
border-top-color:' rgba(0,0,0,0.2)';

`;
const Container6 = styled.View`
align-items: center;
margin-bottom: 30px;


`;

const TimeONButtonContainer = styled(TouchableOpacity)`
  width: 149px;
  height: 30px;
  background-color: rgba(171, 255, 195, 0.28);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TimeONButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
`;
const InputContainer = styled.View`
  flex-direction: row;
 
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -10px;

`;

const TextInputStyled = styled.TextInput`
 
  margin-right: 10px;
  text-align: left; 
`;

const ExerciseText = styled.Text`

padding-left: 20px;
padding-right: 20px;
margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
  border-top-width: 1px; 
  border-top-color:' rgba(0,0,0,0.2)';
  padding-top: 7px;
  

`;

const TimeLimitON = ({ route }) => {
  const navigation = useNavigation();
  const [valueDropdown2, setValueDropdown2] = useState(null);
  const { selectedItems = [] } = route.params || {};
  const [sets, setSets] = useState({});
  const [reps, setReps] = useState({});
  const [prepareTime, setPrepareTime] = useState({});
  const [exerciseTime, setExerciseTime] = useState({});
  const [restTime, setRestTime] = useState({});





  const navigateToTimeLimitOFF = () => {
    navigation.navigate('TimeLimitOFF');
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
  const handleRestTimeChange = (exercise, value) => {
    setRestTime((restTime) => ({ ...restTime, [exercise]: value }));
  };
  const handleExerciseTimeChange = (exercise, value) => {
    setExerciseTime((exerciseTime) => ({ ...exerciseTime, [exercise]: value }));
  };
  const ScrollViewContainer = styled.View`
  margin-top: 10px;
`;

  return (
    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flex: 1 }}>
      <TopBar1 />
      <Container2>
        <DropdownComponent2 value={valueDropdown2} setValue={setValueDropdown2} />
      </Container2>
      <Container3>
        <TimeONButtonContainer onPress={navigateToTimeLimitOFF}>
          <TimeONButtonText>Time Limit ON</TimeONButtonText>
        </TimeONButtonContainer>

      </Container3>
      <ScrollView>
        <Container4>
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
                 <TextInputStyled
                  placeholder="운동시간 (초)"
                  keyboardType="numeric"
                  value={exerciseTime[exercise]}
                  onChangeText={(value) => handleExerciseTimeChange(exercise, value)}
                />
                 <TextInputStyled
                  placeholder="휴식시간 (초)"
                  keyboardType="numeric"
                  value={restTime[exercise]}
                  onChangeText={(value) => handleRestTimeChange(exercise, value)}
                />
              </InputContainer>
            </View>
          ))}

        </Container4>
      </ScrollView>


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
     





      <StatusBar backgroundColor="black" />
    </View>




  );
};

export default TimeLimitON;
