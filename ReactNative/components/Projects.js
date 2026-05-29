import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export const projectImages = [
  { id: '1', image: require('../assets/project1.png') },
  { id: '2', image: require('../assets/project2.png') },
  { id: '3', image: require('../assets/project1.png') },
  { id: '4', image: require('../assets/project2.png') },
  { id: '5', image: require('../assets/project1.png') },
  { id: '6', image: require('../assets/project2.png') },
];

const Projects = ({ onViewAll }) => {
  const renderProject = ({ item }) => (
    <View style={styles.projectCard}>
      <Image source={item.image} style={styles.projectImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROJECTS</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={projectImages}
        keyExtractor={(item) => item.id}
        horizontal={true}
        nestedScrollEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.projectsContainer}
        renderItem={renderProject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    marginBottom: 20,
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#161616',
  },
  viewAll: {
    fontSize: 31,
    color: '#fff',
    backgroundColor: '#FFD400',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 22,
    fontWeight: '600',
    overflow: 'hidden',
  },
  projectsContainer: {
    paddingRight: 6,
  },
  projectCard: {
    width: 170,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: '100%',
    height: 190,
    borderRadius: 16,
  },
});

export default Projects;
