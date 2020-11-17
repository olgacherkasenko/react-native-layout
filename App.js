import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import NotesList from './components/NotesList/index';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NotesList />
    </SafeAreaView>
  );
}
