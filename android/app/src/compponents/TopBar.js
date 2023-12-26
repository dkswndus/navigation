import React from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/AntDesign';
import { View,Text} from "react-native";

const IconWrapper = styled(Icon)`
  font-size: ${({ w, h }) => `${w}px`};
  color: black;
`;

export const Qr = () => {
  return <IconWrapper name="scan1" w={32} h={30} />;
};

export const Search = () => {
  return <IconWrapper name="search1" w={32} h={30} />;
};

const BlueText = styled.Text`
  color: #1A6DFF;
  font-size: 40px;
  font-weight: bold;
`;

const BlackText = styled.Text`
  color: #000000;
  font-size: 40px;
  font-weight: bold;
`;

const TopBar1 = () => {
  return (
    <View style={styles.YhealthContainer}>
      <View style={styles.topBarContainer}>
        <BlueText>Y</BlueText>
        <BlackText>health</BlackText>
      </View>
      <View style={styles.iconContainer}>
      <Qr /> 
        </View>
    
    </View>
  );
};

const TopBar2 = () => {
  return (
    <View style={styles.YhealthContainer}>
      <View style={styles.topBarContainer}>
        <BlueText>Y</BlueText>
        <BlackText>health</BlackText>
      </View>
      <View style={styles.iconContainer}>
        <Search />
        <View style={styles.iconGap}><Qr />
        </View>
      </View>
    </View>
  );
};

const styles = {
  YhealthContainer: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 6,
    paddingLeft: 30,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    marginTop: -12,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconGap: {
    paddingLeft: 20,
  },
};

export { TopBar1, TopBar2 };