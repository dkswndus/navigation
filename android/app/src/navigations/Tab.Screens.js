import React from 'react';
import styled from 'styled-components/native';

const Container =styled.View`
    flex: 1;
    justify-content:center;
    align-items: center;
    align-igems: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`

export const Calendar = ()=>{
    return(
        <Container>
            <StyledText>Calendar</StyledText>
        </Container>
        );

};

export const Exercise = ()=>{
    return(
        <Container>
            <StyledText>Exercise</StyledText>
        </Container>
        )

};

export const Home = ()=>{
    return(
        <Container>
            <StyledText>Home</StyledText>
        </Container>
        );

};

export const Writing = ()=>{
    return(
        <Container>
            <StyledText>Writing</StyledText>
        </Container>
        );

};