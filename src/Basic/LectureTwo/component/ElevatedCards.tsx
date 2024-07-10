import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Xem nhiều</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Hello</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Hello</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Hello</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardElevated: {
    backgroundColor: 'lightblue',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'blue',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
