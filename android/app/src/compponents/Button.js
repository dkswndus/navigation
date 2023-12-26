import React from 'react';
import styled from  'styled-components/native';
import { TouchableOpacity, Text,View } from 'react-native';
import { theme } from '../compponents/theme';
const Button1Container = styled(TouchableOpacity)`
      width: 139px;
      height: 51px;
      background-color: #1A6DFF;
      border-radius: 30px;
      align-items: center;
      justify-content: center;
      



`;

const Button1Title = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    justify-content: center;
`;

export const Button1 = props => {
    return (
      
   <Button1Container>
            <Button1Title>{props.title}</Button1Title>
        </Button1Container>
   
     
    );
};




const Button2Container = styled(TouchableOpacity)`
      width: 368px;
      height: 42px;
      background-color: #1A6DFF;
      border-radius: 10px;
      align-items: center;
      justify-content: center;



`;

const Button2Title = styled(Text)`
    font-size: 27px;
    font-weight: bold;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    
`;

export const Button2 = props => {
    return (
        <Button2Container>
            <Button2Title>{props.title}</Button2Title>
        </Button2Container>
    );
};

const Button3Container = styled(TouchableOpacity)`
      width: 149px;
      height: 30px;
      background-color: rgba(255, 169, 169, 0.28);
      border-radius: 5px;
      justify-content: center;
      align-items: center;

`;

const Button3Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
`;

export const Button3 = props => {
    return (
        <Button3Container>
            <Button3Title>{props.title}</Button3Title>
        </Button3Container>
    );
};

const Button4Container = styled(TouchableOpacity)`
      width: 149px;
      height: 24px;
      background-color: rgba(171, 255, 195, 0.28);
      border-radius: 5px;


`;

const Button4Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
`;

export const Button4 = props => {
    return (
        <Button4Container>
            <Button4Title>{props.title}</Button4Title>
        </Button4Container>
    );
};











//타바타 TimeLimitOFF
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
   color: ${({theme}) => theme.solidLine};

`;

export const Button5 = props => {
    return (
        <Button5Container>
            <Button5Title>{props.title}</Button5Title>
        </Button5Container>
    );
};


const Button6Container = styled(View)`
width: 365px;
padding-top: 10px;
padding-right: 12px;

`;

const Button6Title = styled(Text)`
    font-size: 20px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.9);

`;

export const Button6 = props => {
    return (
        <Button6Container>
            <Button6Title>{props.title}</Button6Title>
        </Button6Container>
    );
};















export default {Button1, Button2,Button3,Button4,Button5,Button6};