
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Body from './Body';

export default class FlatListComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 50,
  
  },
  title: {
    fontWeight: '800',
    fontSize: 40, 
    marginLeft: 20,
    marginBottom: 20,
  },
});
