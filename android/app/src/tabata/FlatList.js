import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import redheart from "../assets/image/redheart.png";
import emptyheart from "../assets/image/emptyheart.png";
import x from "../assets/image/x.png";
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cardioExercisesData, coreExercisesData, 
  forearmExercisesData, generalGymbackExercisesData, 
  generalGymbicepsExercisesData, generalGymchestExercisesData, 
  generalGymlowerBodyExercisesData, generalGymshoulderExercisesData, 
  generalGymtricepsExercisesData, martialArtsgymbackExercisesData, 
  martialArtsgymbicepsExercisesData, martialArtsgymchestExercisesData, 
  martialArtsgymlowerBodyExercisesData, martialArtsgymshoulderExercisesData, 
  martialArtsgymtricepsExercisesData,generalGymData,martialArtsGymData } from './data';



const FlatListWithSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [exerciseLikes, setExerciseLikes] = useState({});
  const [currentData, setCurrentData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { dropdownValue } = route.params || {};

  useEffect(() => {
    // 드롭다운 값에 따라 현재 데이터 설정
    switch (dropdownValue) {
      case '1':
        setCurrentData(generalGymData);
        break;
      case '2':
        setCurrentData(martialArtsGymData);
        break;
    }
  }, [dropdownValue]);
  
  const showSelectedExercise = (category) => {
    switch (dropdownValue)
     {
      case '1':
        switch (category) {
          case '가슴':
            setCurrentData(generalGymchestExercisesData);
            break;
          case '등':
            setCurrentData(generalGymbackExercisesData);
            break;
          case '하체':
            setCurrentData(generalGymlowerBodyExercisesData);
            break;
          case '어께':
            setCurrentData(generalGymshoulderExercisesData);
            break;
          case '삼두':
            setCurrentData(generalGymtricepsExercisesData);
            break;
          case '이두':
            setCurrentData(generalGymbicepsExercisesData);
            break;
            case '코어':
              setCurrentData(coreExercisesData);
              break;
            case '전완근':
              setCurrentData(forearmExercisesData);
              break;
            case '유산소':
              setCurrentData(cardioExercisesData);
              break;




        }
        break;

      case '2':
        switch (category) {
          case '가슴':
            setCurrentData(martialArtsgymchestExercisesData);
            break;
          case '등':
            setCurrentData(martialArtsgymbackExercisesData);
            break;
          case '하체':
            setCurrentData(martialArtsgymlowerBodyExercisesData);
            break;
          case '어께':
            setCurrentData(martialArtsgymshoulderExercisesData);
            break;
          case '삼두':
            setCurrentData( martialArtsgymtricepsExercisesData);
            break;
          case '이두':
            setCurrentData( martialArtsgymbicepsExercisesData);
            break;
            case '코어':
              setCurrentData(coreExercisesData);
              break;
            case '전완근':
              setCurrentData(forearmExercisesData);
              break;
            case '유산소':
              setCurrentData(cardioExercisesData);
              break;

        }
        break;
  
    }
  };
  

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };
  const showLikedExercises = () => {
    const likedExercises = currentData.filter((exercise) => exerciseLikes[exercise.title]);
    setCurrentData(likedExercises);
  };

  const toggleLike = (id, title) => {
    setExerciseLikes((prevLikes) => ({
      ...prevLikes,
      [title]: !prevLikes[title],
    }));
  };

  const navigateBackToTimeLimitOFF = () => {
    navigation.goBack();
  };

 

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

        <TouchableOpacity onPress={showLikedExercises}>
          <Exercise title={"즐겨찾기"} />
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => showSelectedExercise("가슴")}>
  <Exercise title={"가슴"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("등")}>
  <Exercise title={"등"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("하체")}>
  <Exercise title={"하체"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("어께")}>
  <Exercise title={"어께"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("삼두")}>
  <Exercise title={"삼두"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("이두")}>
  <Exercise title={"이두"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("코어")}>
  <Exercise title={"코어"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("전완근")}>
  <Exercise title={"전완근"} />
</TouchableOpacity>

<TouchableOpacity onPress={() => showSelectedExercise("유산소")}>
  <Exercise title={"유산소"} />
</TouchableOpacity>

        
    
      
        </View>
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        {currentData.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            onPress={() => toggleSelection(exercise.id)}
            style={{
              backgroundColor: selectedItems.includes(exercise.id) ? 'rgba(217, 217, 217, 0.08)' : 'rgba(252, 253, 255, 0.49)',
              paddingHorizontal: 20,
            }}>
            <View style={styles.GeneralGymData}>
              <View style={styles.todoText}>
                <Text>{exercise.title}</Text>
              </View>

              <TouchableOpacity onPress={() => toggleLike(exercise.id, exercise.title)}>
                <Image
                  source={exerciseLikes[exercise.title] ? redheart : emptyheart}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button7 title={"추가 완료"} onPress={navigateBackToTimeLimitOFF} />
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
    marginTop: 35,
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

    flexDirection: 'row',
   
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

const ExerciseContainer = styled(View)`
  width: 100px;
  height: 35px;
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