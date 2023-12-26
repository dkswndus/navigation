import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import redheart from "../assets/image/redheart.png";
import blackheart from "../assets/image/blackheart.png";

// const GeneralGymData = [
//     {
//         id: '1',
//         title: '랫풀다운',
//     },
//     {
//         id: '2',
//         title: '레그 익스텐션',
//     },
//     {
//         id: '3',
//         title: '레그 프레스',
//     },
//     {
//         id: '4',
//         title: '라잉 레그 컬',
//     },
//     {
//         id: '5',
//         title: '백 하이퍼 익스텐션',
//     },
//     {
//         id: '6',
//         title: '브이 스쿼트',
//     },
//     {
//         id: '7',
//         title: '스미스머신',
//     },
//     {
//         id: '8',
//         title: '시티드 케이블 로우',
//     },
//     {
//         id: '9',
//         title: '업디미날보드',
//     },
//     {
//         id: '10',
//         title: '인크라인프레스',
//     },
// ];





// const MartialGymData = [
//     {
//         id: '1',
//         title: '랫풀다운',
//     },
//     {
//         id: '2',
//         title: '레그 익스텐션',
//     },
//     {
//         id: '3',
//         title: '레그 프레스',
//     },
//     {
//         id: '4',
//         title: ' 시티드 레그컬',
//     },
//     {
//         id: '5',
//         title: '시티드 케이블 로우',
//     },
//     {
//         id: '6',
//         title: ' 펙 덱 리어 델트',
//     },
//     {
//         id: '7',
//         title: '펙 덱 플라이',
//     },
//     {
//         id: '8',
//         title: '하이퍼 백 익스텐션',
//     },
//     {
//         id: '9'
//         title: ' 힙 어덕션 머신',
//     },
//     {
//         id: '10',
//         title: '힙 어브덕션 머신',
//     },
// ];



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
    return (
      <View style={styles.container}>
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

    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  GeneralGymData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoCheckbox: {
    marginRight: 5,
  },
  todoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoDelBtn: {
    color: '#777',
  },
});

export default Body;
