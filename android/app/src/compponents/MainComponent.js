import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



import Body from './Body';
import FlatListComponent from './FlatListComponent';
export default function MainComponent() {
  const [isFlatListVisible, setFlatListVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <Body />

      {/* isFlatListVisible이 true일 때 FlatList를 표시합니다. */}
      {isFlatListVisible && <FlatListComponent />}

      {/* FlatList 가시성을 전환하는 버튼 */}
      <TouchableOpacity onPress={() => setFlatListVisibility(!isFlatListVisible)}>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+ 운동 추가하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: '#EEE',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
});
