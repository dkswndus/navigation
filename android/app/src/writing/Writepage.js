import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { DropdownComponent1 } from '../compponents/DropDown';
import { useState } from 'react';
import { TopBar1 } from '../compponents/TopBar';
import { useNavigation } from '@react-navigation/native';
const WritePage = ({ route }) => {  
    const navigation = useNavigation();
  
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [nickname, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(null);

  const handleNameChange = (inputName) => {
    setName(inputName);
  };

  const handlePwdChange = (inputPwd) => {
    setPwd(inputPwd);
  };

  const handleTitleChange = (inputTitle) => {
    setTitle(inputTitle);
  };

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleDropdownChange = (value) => {
    setSelectedDropdownValue(value);
    // Dropdown에서 선택한 값을 콘솔에 출력
    console.log('Dropdown에서 선택한 값:', value);
  };

  const handleButtonPress = () => {
    // 입력된 텍스트를 처리하는 코드 입력칸---------------------------------------------------------------------
    console.log('Dropdown에서 선택한 값:', selectedDropdownValue);
    console.log('제목:', title);
    console.log('내용:', text);
    console.log('이름:', nickname);
    console.log('비번:', pwd);
  };

  return (
    <View style={{ backgroundColor: '#e0e0e0' }}>
      <TopBar1 />
      <View style={[styles.viewcontainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TextInput
          style={[styles.inputcontainer, { flex: 1 }]}
          onChangeText={handleNameChange}
          value={nickname}
          placeholder="닉네임"
          placeholderTextColor="gray"
        />

        <TextInput
          style={[styles.inputcontainer, { flex: 1 }]}
          onChangeText={handlePwdChange}
          value={pwd}
          placeholder="비밀번호"
          placeholderTextColor="gray"
        />

      </View>

      <View style={styles.viewcontainer}>
        <DropdownComponent1 onChange={handleDropdownChange} />
        <TextInput
          style={styles.inputcontainer}
          onChangeText={handleTitleChange}
          value={title}
          placeholder="제목을 입력하세요"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.viewcontainer}>
        <TextInput
          style={[styles.inputcontainer]}
          onChangeText={handleTextChange}
          value={text}
          placeholder="내용을 입력하세요"
          placeholderTextColor="gray"
        />
      </View>
      <View style={{ padding: 10 }}>
        {/* Button 스타일 적용 수정 */}
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: 'blue',
            padding: 10,
          }}
          onPress={handleButtonPress}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewcontainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputcontainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },

});

export default WritePage;