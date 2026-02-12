import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const hobbies = [
  { id: '1', name: 'Reading novels' },
  { id: '2', name: 'Playing volleyball' },
  { id: '3', name: 'Drawing' },
  { id: '4', name: 'Listening to music' },
  { id: '5', name: 'Cycling' },
];

const HobbiesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Hobbies</Text>
      <FlatList
        data={hobbies}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.hobbyItem}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  hobbyItem: {
    fontSize: 18,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default HobbiesScreen;
