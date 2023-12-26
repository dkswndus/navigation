import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Svg, { Rect } from 'react-native-svg';



export const Home = () => {
  return (
    <TouchableOpacity>
        <Svg width="430" height="74" viewBox="0 0 430 74" fill="none">
          <Rect width="430" height="74" fill="white" fillOpacity="0.2" />
        </Svg>
    </TouchableOpacity>
  );
};