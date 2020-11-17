import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    borderLeftWidth: 5,
    borderLeftColor: '#e91e63',
    backgroundColor: '#fff',
  },
  noteText: {
    paddingLeft: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

const Note = ({ note }) => {
  const { title, vechiclesNumber, cities } = note;

  const citiesList = cities.map((city) => (
    <Text key={city} style={styles.noteText}>
      {city}
    </Text>
  ));
  return (
    <View key={title} style={styles.note}>
      <Text style={[styles.noteText, styles.boldText]}>{title}</Text>
      <Text style={styles.noteText}>{`${vechiclesNumber} vehicles`}</Text>
      {citiesList}
    </View>
  );
};

export default Note;
