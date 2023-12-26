import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data1 = [
  { label: '시설 건의사항', value: '1' },
  { label: '어플 건의사항', value: '2' },
  { label: '버그신고', value: '3' },
];

const DropdownComponent1 = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'rgba(255, 255, 255, 1)' }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
           style={[
            styles.dropdown,
            isFocus && { borderColor: 'rgba(255, 255, 255, 1)' },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        

        data={data1}
      
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="카테고리"

        value={value}
  
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 1,
    borderRadius: 10,
    marginBottom: 20,


   
  
  },
 
  dropdown: {
    width: 365,
    height: 40,
    borderColor: 'rgba(0, 0, 0, 0.9)',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
   
  },
  label: {
    position: 'absolute',
    borderRadius: 10,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 20,
  },
  placeholderStyle: {
    
   
    fontSize: 20,
  },
  selectedTextStyle: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontSize: 20, 
  },
 
});







const data2 = [
  { label: '종체', value: '1' },
  { label: '무도대체육관', value: '2' },

];

const DropdownComponent2 = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'rgba(255, 255, 255, 1)' }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
           style={[
            styles.dropdown,
            isFocus && { borderColor: 'rgba(255, 255, 255, 1)' },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        

        data={data2}
      
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="장소를 선택해주세요."

        value={value}
  
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export { DropdownComponent1, DropdownComponent2 };

