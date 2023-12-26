import React from 'react';

import styled, { css } from 'styled-components/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, TouchableOpacity, View, ScrollView, TextInput,Text } from 'react-native';

import { Input2,Input10,Input11,Input12 } from '../compponents/Input';

import{theme} from "../compponents/theme";
import{TopBar1} from "../compponents/TopBar";
import{Button2,Button3,Button4} from "../compponents/Button"
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Container1 = styled.View`

  background-color: ${({ theme }) => theme.background};

 
`;

const Container2 = styled.View`

  align-items: center;
  padding-bottom: 10px;
`;

const Container3 = styled.View`
 


padding-bottom: 1px;
`;
const Container4 = styled.View`
 
padding-bottom: 10px;
`;
const Container5 = styled.View`
padding-bottom: 34px;
`;

const Container6 = styled.View`
flex-direction: row;
align-items: stretch;
justify-content: space-around;
`;

const Title = styled(Text)`
font-size: 20px;
font-weight: bold;
color: rgba(0, 0, 0, 0.9);
`;

const TimeLimitON = ()=> {
  const navigation = useNavigation();

  const navigateToTimeLimitOFF = () => {
    navigation.navigate('TimeLimitOFF');
  };
  return (
    <ThemeProvider theme={theme}>
      <Container1>
        <TopBar1 />
       <Container2>
          <Input12 placeholder="나만의 하체 운동" />
       </Container2>
        <Container4>
          <Container6>
            <Title >
              운동 정보 설정
            </Title>
            <Button4 title="Time Limit ON" onPress={navigateToTimeLimitOFF} />
          
          </Container6>
        </Container4>
        <Container2>
      
          <Container5>
           
          </Container5>
          <Button2 title="운동 시작" />
        </Container2>
        <StatusBar backgroundColor={theme.background} />
      </Container1>
    </ThemeProvider>
  );
};

export default TimeLimitON;