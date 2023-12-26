import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { css } from 'styled-components';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GeneralGymScroll } from '../scrollview/ScrollView';
import { FlatList } from 'react-native';
const thumbsup = require("../assets/image/thumbsup.png")
const messages = require("../assets/image/messages.png")


const paperplane = require("../assets/image/paperplane.png")

const ellipsis = require("../assets/image/ellipsis.png")



const StyledInputContainer = styled.View`
  width: 170px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  overflow: hidden;

`;

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
flex: 1;
  width: 100%;
  height: 31px;
  font-size: 17px;
  font-weight: normal;
  padding-left: 14px;
  text-align-vertical: center;

`;

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <StyledInputContainer>
      <StyledInput
        placeholder={placeholder}
        maxLength={30}
        value={value}
        onChangeText={onChangeText}
      />
    </StyledInputContainer>
  );
};

// 닉네임
const Input1 = () => {
  const [nickname, setNickname] = useState('');

  return <Input placeholder={`닉네임`} value={nickname} onChangeText={setNickname} />;
};

// 비밀번호
const Input2 = () => {
  const [password, setPassword] = useState('');

  return <Input placeholder={`비밀번호`} value={password} onChangeText={setPassword} />;
};



//제목을 입력하세요..
const StyledInput3Container = styled.View`
  width: 365px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  margin-bottom: 20px;
  
`;

const StyledInput3 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-weight: normal;
  padding-left: 14px;
  justify-content: center;  
`;

const Input3 = () => {
  const [title, setTitle] = useState('');

  return (
    <StyledInput3Container>
      <StyledInput3
        placeholder={'제목을 입력하세요..'}
        value={title}
        onChangeText={setTitle}
      />
    </StyledInput3Container>
  );
};









// 작성 글 
const StyledInput4Container = styled.View`
width: 365px;
height: 295px;
border-radius: 10px;
background-color: ${({ theme }) => theme.itemBackground};
`;

const StyledInput4 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
width: 100%;
height: 100%;
font-size: 15px;
font-weight: normal;
padding-left:14px;

padding-bottom: 46px;

`;
const Input4 = () => {
  const [content, setContent] = useState('');

  return (
    <StyledInput4Container>
      <StyledInput4
        placeholder={'내용'}
        value={content}
        onChangeText={setContent}
      
      />
    </StyledInput4Container>
  );
};

























//작성한 게시글 

const StyledInput5Container = styled.View`
  width: 365px;
  height: 145px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  position: relative; /* Add this line */
`;

const StyledInput5 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  padding-left: 14px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  position: absolute; /* Add this line */
  left: 14px; /* Add this line */
  bottom: 10px; /* Optional: Center vertically */
 

`;

const Input5 = ({ placeholder }) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput5Container>
      <StyledInput5 width={width} placeholder={placeholder} maxLength={50} />
      <IconContainer>
        <Image source={thumbsup} style={{ width: 25, height: 25, marginRight: 30 }} />
        <Image source={messages} style={{ width: 25, height: 25 }} />
      </IconContainer>
    </StyledInput5Container>
  );
};





// 게시글 댓글 
const StyledInput6 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
width: 365px;
height: 209px;
border-radius: 10px;
background-color: ${({ theme }) => theme.itemBackground};
font-weight: bold;
font-weight: normal;
padding-left:14px;
margin-bottom: 10px;
padding-bottom: 26px;

`;
const Input6 = ({ placeholder }) => {
  const width = Dimensions.get('window').width;
  return <StyledInput6 width={width} placeholder={placeholder} maxLength={50} />
};





// 닉네임, 비밀번호, 댓글 입력
const StyledInput7Container = styled.View`
width: 182.5px;
height: 40px;
background-color: ${({ theme }) => theme.itemBackground};
border-right-width: 1px; 
border-right-color: ${({ theme }) => theme.solidLine};
`;
const StyledInput8Container = styled.View`
width: 182.5px;
height: 40px;
background-color: ${({ theme }) => theme.itemBackground};


`;
const RowContainer1 = styled.View`
flex-direction: row;

`;
const StyledInput9Container = styled.View`
  width: 365px;
  height: 40px;
  background-color: ${({ theme }) => theme.itemBackground};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.solidLine};
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  padding-right: 12px; 
`;
const RowContainer2 = styled.View`
  align-items: center;
  flex-direction: row;

`;

const Input7 = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');

  const styles = {
    TextInputStyle: {
      fontSize: 15,
      fontWeight: 'normal',
      paddingLeft: 14,
      flex: 1,
    },
  };

  return (
    <>
      <RowContainer1>
        <StyledInput7Container>
          <TextInput
            style={styles.TextInputStyle}
            placeholder="닉네임 "
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
        </StyledInput7Container>

        <StyledInput8Container>
          <TextInput
            style={styles.TextInputStyle}
            placeholder="비밀번호 "
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </StyledInput8Container>
      </RowContainer1>

      <RowContainer2>
        <StyledInput9Container>
          <TextInput
            style={styles.TextInputStyle}
            placeholder="댓글을 입력하세요 "
            value={comment}
            onChangeText={(text) => setComment(text)}
          />
          <Image source={paperplane} style={{ width: 24.58, height: 22 }} />
        </StyledInput9Container>
      </RowContainer2>
    </>
  );
};





















//타바타 
const StyledInput10Container = styled.View`
width: 365px;
height: 80px;
border-radius: 10px;
background-color: ${({ theme }) => theme.itemBackground};
align-items: center;
  justify-content: center;

`;

const StyledInput10 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  
  
    font-size: 20px;
    font-weight: normal;
    justify-content: center;


`;
const Input10 = ({ placeholder }) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput10Container>
      <StyledInput10 width={width} placeholder={placeholder} maxLength={15} />
    </StyledInput10Container>
  );
};















const StyledInput12 = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  font-size: 20px;
  font-weight: bold;
  padding-left: 14px;
  justify-content: center;
`;

const StyledInput12Container = styled.View`
width: 365px;
    height: 60px;
border-radius: 10px;
background-color: ${({ theme }) => theme.itemBackground};

  align-items: center;
  justify-content: center;

`;

const Input12 = () => {
  const [TimeLimitoffTitle, setTimeLimitoffTitle] = useState('');

  return (
    <StyledInput12Container>
      <StyledInput12
        placeholder={'나만의 타바타'}
        value={TimeLimitoffTitle}
        onChangeText={setTimeLimitoffTitle}
      />
    </StyledInput12Container>
  );
};






export { Input1, Input2, Input3, Input4, Input5, Input6, Input7, Input10,Input12 };