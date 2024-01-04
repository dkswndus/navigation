import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, BackHandler } from 'react-native';
import redheart from "../assets/image/redheart.png";
import emptyheart from "../assets/image/emptyheart.png";
import x from "../assets/image/x.png";
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Dropdown } from 'react-native-element-dropdown';

export const generalGymData = [
  { id: '1', title: '랫풀다운' },
  { id: '2', title: '랫 풀다운 머신' },
  { id: '3', title: '패러럴 그립 랫 풀 다운' },
  { id: '4', title: '언더핸드 케이블 랫 풀 다운' },
  { id: '5', title: '백 랫 풀 다운' },
  { id: '6', title: '클로즈 그립 케이블 랫 풀 다운' },
  { id: '7', title: '레그익스텐션' },
  { id: '8', title: '원 레그 익스텐션' },
  { id: '9', title: '시티드 레그 프레스' },
  { id: '10', title: '레그컬' },
  { id: '11', title: '싱글 라잉 레그 컬' },
  { id: '12', title: '시티드 케이블 로우' },
  { id: '13', title: '원 암 시티드 케이블 로우' },
  { id: '14', title: '패러럴 그립 시티드 케이블 로우' },
  { id: '15', title: '와이드 그립 시티드 케이블 로우' },
  { id: '16', title: '싯업' },
  { id: '17', title: '인클라인 트위스트 싯업' },
  { id: '18', title: '인클라인 밴치 프레스 머신' },
  { id: '19', title: '팩덱 리어 델트' },
  { id: '20', title: '팩덱 플라이' },
  { id: '21', title: '스미스머신 벤치 프레스' },
  { id: '22', title: '스미스 머신 스쿼트' },
  { id: '23', title: '스미스 머신 바벨 로우' },
  { id: '24', title: '언더핸드 스미스 머신 바벨 로우' },
  { id: '25', title: '스미스 머신 데드리프트' },
  { id: '26', title: '디클라인 스미스 머신 벤치 프레스' },
  { id: '27', title: '스미스 머신 슈러그' },
  { id: '28', title: '스미스 머신 오버헤드 프레스' },
  { id: '29', title: '스미스 머신 런지' },
  { id: '30', title: '스미스 머신 비하인드 넥 프레스' },
  { id: '31', title: '스미스 머신 와이드 스쿼트' },
  { id: '32', title: '스미스 머신 카프 레이즈' },
  { id: '33', title: '스미스 머신 힙 쓰러스트' },
  { id: '34', title: '스미스 머신 스티프 레그 데드리프트' },
  { id: '35', title: '인클라인 스미스 머신 벤치 프레스' },
  { id: '36', title: '케이블 트라이셉 푸쉬다운' },
  { id: '37', title: '케이블 바이셉 컬' },
  { id: '38', title: '암 풀다운' },
  { id: '39', title: '케이블 로프 트라이셉 익스텐션' },
  { id: '40', title: '케이블 크로스오버' },
  { id: '41', title: '페이스 풀' },
  { id: '42', title: '케이블 헤머 컬' },
  { id: '43', title: '케이블 레터럴 레이즈' },
  { id: '44', title: '로우 케이블 크로스오버' },
  { id: '45', title: '케이블 프론트 레이즈' },
  { id: '46', title: '스탠딩 케이블 로우' },
  { id: '47', title: '케이블 리버스 컬' },
  { id: '48', title: '인클라인 케이블 플라이' },
  { id: '49', title: '브이 스쿼트' },
  { id: '50', title: '암 컬 벤치' },
  { id: '51', title: '디클라인 프레스' },


];

export const martialArtsgymData =[
    { id: '1', title: '랫풀다운' },
    { id: '2', title: '랫 풀다운 머신' },
    { id: '3', title: '패러럴 그립 랫 풀 다운' },
    { id: '4', title: '언더핸드 케이블 랫 풀 다운' },
    { id: '5', title: '백 랫 풀 다운' },
    { id: '6', title: '클로즈 그립 케이블 랫 풀 다운' },
    { id: '7', title: '레그익스텐션' },
    { id: '8', title: '원 레그 익스텐션' },
    { id: '9', title: '시티드 레그 프레스' },
    { id: '10', title: '레그프레스' },
    { id: '11', title: '원 레그 프레스' },
    { id: '12', title: '레그컬' },
    { id: '13', title: '싱글 라잉 레그 컬' },
    { id: '14', title: '시티드 케이블 로우' },
    { id: '15', title: '원 암 시티드 케이블 로우' },
    { id: '16', title: '패러럴 그립 시티드 케이블 로우' },
    { id: '17', title: '와이드 그립 시티드 케이블 로우' },
    { id: '18', title: '싯업' },
    { id: '19', title: '인클라인 트위스트 싯업' },
    { id: '20', title: '인클라인 밴치 프레스 머신' },
    { id: '21', title: '팩덱 리어 델트' },
    { id: '22', title: '팩덱 플라이' },
    { id: '23', title: '버티컬 플라이' },
    { id: '24', title: '백 익스텐션' },
    { id: '25', title: '힙어덕션머신' },
    { id: '26', title: '힙어브덕션머신' },
];

const FlatListWithSelection = ({ route }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentGymData, setGymData] = useState([]);
  const navigation = useNavigation();
  const selectedValueFromDropdown = route.params?.selectedValueFromDropdown;
  const defaultSelectedValue = selectedValueFromDropdown || '1';
  useEffect(() => {
    console.log("드롭다운에서 선택한 값:", selectedValueFromDropdown);
    
    // 선택된 값에 따라 데이터 설정
    if (defaultSelectedValue === '1') {
      console.log("generalGymData로 업데이트");
      setGymData(generalGymData);
    } else if (defaultSelectedValue === '2') {
      console.log("martialArtsgymData로 업데이트");
      setGymData(martialArtsgymData);
    }
  
    // 아래 부분을 주석 처리하거나 제거해 보세요.
    // setSelectedItems([]);
  }, [defaultSelectedValue]);

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const toggleLike = (id) => {
    setGeneralGymData((prevData) =>
      prevData.map((exercise) =>
        exercise.id === id ? { ...exercise, isLiked: !exercise.isLiked } : exercise
      )
    );
  };

  const navigateBackToTimeLimitOFF = () => {
    navigation.goBack();
  };



  if (!selectedValueFromDropdown) {
    // If no location is selected, you can choose to render something else
    return (
      <View style={styles.container}>
        <Text>Please select a location first</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Text style={styles.addButtonText}>운동 추가하기</Text>
        <TouchableOpacity onPress={navigateBackToTimeLimitOFF} style={styles.xButton}>
          <Image source={x} style={{ width: 20, height: 20, marginRight: 10 }} />
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal={true} style={styles.horizontaaScrollView}>
        <View style={styles.exerciseContainer}>
          <Exercise title={"하트"} />
          <Exercise title={"가슴"} />
          <Exercise title={"등"} />
          <Exercise title={"하체"} />
          <Exercise title={"어께"} />
          <Exercise title={"삼두"} />
          <Exercise title={"이두"} />
          <Exercise title={"코어"} />
          <Exercise title={"전완근"} />
          <Exercise title={"유산소"} />
        </View>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
      {currentGymData.map((exercise) => (
    <TouchableOpacity
      key={exercise.id}
      onPress={() => toggleSelection(exercise.id)}
      style={{
        backgroundColor: selectedItems.includes(exercise.id) ? 'rgba(217, 217, 217, 0.08)' : 'rgba(252, 253, 255, 0.49)',
        paddingHorizontal: 10,
      }}>
      <View style={styles.GeneralGymData}>
        <View style={styles.todoText}>
          <Text>{exercise.title}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleLike(exercise.id)}>
          <Image
            source={exercise.isLiked ? redheart : emptyheart}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

      <Button7 title={"추가 완료"} onPress={navigateToTimeLimitOFF} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    padding: 20,
    backgroundColor: 'rgba(252, 253, 255, 0.49)',
    borderRadius: 30,
  },
  scrollView: {
    flexDirection: 'column',
    marginTop: 25,
  },
  GeneralGymData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(252, 253, 255, 0.49)',
  },
  addButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.9)',
    marginLeft: 100,
  },
  xButton: {
    marginRight: 3,
  },
  horizontaaScrollView: {
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 10,
  },
  exerciseContainer: {
    flexDirection: 'row',
    padding: 15,
  },
});

const Button7Container = styled(TouchableOpacity)`
  width: 200px;
  height: 42px;
  background-color: #1A6DFF;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
  margin-top: 20px;
`;

const Button7Title = styled(Text)`
  font-size: 27px;
  font-weight: bold;
  color: #FFFFFF;
`;

const ExerciseContainer = styled(TouchableOpacity)`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border: 2px solid #6FA1FF;
`;

const ExerciseTitle = styled(Text)`
  font-size: 20px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.9);
`;

export const Exercise = (props) => {
  return (
    <ExerciseContainer onPress={props.onPress}>
      <ExerciseTitle>{props.title}</ExerciseTitle>
    </ExerciseContainer>
  );
};

export const Button7 = (props) => {
  return (
    <Button7Container onPress={props.onPress}>
      <Button7Title>{props.title}</Button7Title>
    </Button7Container>
  );
};






export default FlatListWithSelection;
