import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import redheart from "../assets/image/redheart.png";
import emptyheart from "../assets/image/emptyheart.png";
import x from "../assets/image/x.png";
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { generalGymData, martialArtsGymData, generalGymchestExercisesData,generalGymchestbackExercisesData,
generalGymchestlowerBodyExercisesData, generalGymchestshoulderExercisesData, 
generalGymchesttricepsExercisesData,generalGymchestbicepsExercisesData,
forearmExercisesData,coreExercisesData,cardioExercisesData   } from './data';


const FlatListWithSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentGeneralGymData, setGeneralGymData] = useState(generalGymData);
  const navigation = useNavigation();

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
    const likedExercises = currentGeneralGymData.filter((exercise) => exercise.isLiked);
    setGeneralGymData(likedExercises);
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

  const navigateToTimeLimitOFF = () => {
    navigation.navigate('TimeLimitOFF', { selectedItems });
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
          <Exercise title={"안주연"} />
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => setGeneralGymData(generalGymchestExercisesData)}>
            <Exercise title={"가슴"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGeneralGymData(generalGymchestbackExercisesData)}>
          <Exercise title={"등"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGeneralGymData(generalGymchestlowerBodyExercisesData)}>
          <Exercise title={"하체"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData( generalGymchestshoulderExercisesData)}>
            <Exercise title={"어께"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData(generalGymchesttricepsExercisesData)}>
            <Exercise title={"삼두"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData(generalGymchestbicepsExercisesData)}>
            <Exercise title={"이두"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData(coreExercisesData)}>
            <Exercise title={"코어"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData(forearmExercisesData)}>
            <Exercise title={"전완근"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setGeneralGymData(cardioExercisesData )}>
            <Exercise title={"유산소"} />
            </TouchableOpacity>
      
        
    
      
        </View>
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        {currentGeneralGymData.map((exercise) => (
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

const ExerciseContainer = styled(View)`
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