import React, { useState } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';




import{theme} from "../compponents/theme";
import{TopBar1} from "../compponents/TopBar";
const speakerfilled = require("../assets/image/speakerfilled.png");
const speakerunfilled = require("../assets/image/speakerunfilled.png");
const pause = require("../assets/image/pause.png");
const previousbutton = require("../assets/image/previousbutton.png");
const nextbutton = require("../assets/image/nextbutton.png");










const Container1 = styled.View`
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const Container4 = styled.View`
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

const Container2 = styled.View`
  padding-left: 30px;
  padding-bottom: 5px;
`;

const Container3 = styled.View`
  padding-top: 30px;
  padding-left: 53px;
  padding-right: 53px;
  flex-direction: row;
  justify-content: space-between;
`;

const NonstopWatchPage = () => {
  const [isSpeakerFilled, setIsSpeakerFilled] = useState(true);

  const toggleSpeaker = () => {
    setIsSpeakerFilled(!isSpeakerFilled);
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar1 />
      <Container2>
        <TouchableOpacity onPress={toggleSpeaker}>
          <Image source={isSpeakerFilled ? speakerfilled : speakerunfilled} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </Container2>
      <Container1>
        <Text style={styles.currentsmallText}>1/5 </Text>
        <Text style={styles.currentmediumText}>벤치프레스 </Text>
        <Text style={styles.currentbigText}>15 x 3</Text>
      </Container1>
      <Container4>
        <Text style={styles.nextsmallText}> 2/5 </Text>
        <Text style={styles.nextmediumText}>푸쉬업 </Text>
        <Text style={styles.nextbigText}>10 x 5</Text>
      </Container4>
      <Container3>
        <Image source={previousbutton} style={{ width: 30, height: 30 }} />
        <Image source={nextbutton} style={{ width: 30, height: 30 }} />
      </Container3>
      <StatusBar backgroundColor={theme.background} />
    </ThemeProvider>
  );
};

const styles = {
  currentsmallText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.main,
  },
  currentmediumText: {
    fontSize: 40,
    fontWeight: "bold",
    color: theme.main,
  },
  currentbigText: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.main,
  },
  nextsmallText: {
    fontSize: 10,
    color: theme.main,
  },
  nextmediumText: {
    fontSize: 30,
    color: theme.main,
  },
  nextbigText: {
    fontSize: 20,
    color: theme.main,
  },
};

export default NonstopWatchPage;
