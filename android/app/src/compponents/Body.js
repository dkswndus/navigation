import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import redheart from "../assets/image/redheart.png";
import blackheart from "../assets/image/blackheart.png";
import x from "../assets/image/x.png";

class Body extends Component {
  state = {
    GeneralGymData: [
      {
        id: '1',
        title: '랫풀다운',
      },
      {
        id: '2',
        title: '레그 익스텐션',
      },
      {
        id: '3',
        title: '레그 프레스',
      },
      {
        id: '4',
        title: '라잉 레그 컬',
      },
      {
        id: '5',
        title: '백 하이퍼 익스텐션',
      },
      {
        id: '6',
        title: '브이 스쿼트',
      },
      {
        id: '7',
        title: '스미스머신',
      },
      {
        id: '8',
        title: '시티드 케이블 로우',
      },
      {
        id: '9',
        title: '업디미날보드',
      },
      {
        id: '10',
        title: '인크라인프레스',
      },
    ],
  };
  toggleLike = (id) => {
    this.setState((prevState) => ({
      GeneralGymData: prevState.GeneralGymData.map((exercise) =>
        exercise.id === id ? { ...exercise, isLiked: !exercise.isLiked } : exercise
      ),
    }));
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
       
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButton}
          
          >
            <Text style={styles.addButtonText}>운동 추가하기</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TimeLimitOFF');
            }}
            style={styles.xButton }
          
          >
            <Image source={x} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>

     
        {this.state.GeneralGymData.map((exercise) => (
          <View style={styles.GeneralGymData} key={exercise.id}>
            <View style={styles.todoText}>
              <Text>{exercise.title}</Text>
            </View>
            <TouchableOpacity onPress={() => this.toggleLike(exercise.id)}>
              <Image
                source={exercise.isLiked ? redheart : blackheart}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
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
    marginBottom: 10,
  },
  addButton: {
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.9)',
    marginLeft: 100

  },
  xButton: {
    marginRight: 3,
  },
});

export default Body;
