import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Note from '../Note/index';
import notes from '../../mock/notes.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  footer: {
    backgroundColor: '#ededed',
    borderTopWidth: 5,
    borderTopColor: '#000',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 50,
    backgroundColor: '#E91E63',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

const NotesList = () => {
  const notesList = notes.map((note) => <Note key={note.title} note={note} />);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NOTER</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>{notesList}</ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.headerText}>FOOTER</Text>
      </View>
    </View>
  );
};

export default NotesList;
