// Import React for JSX
import React from 'react';
// Import RN primitives used by this component
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Small array of project image items used by the FlatList
export const projectImages = [
  // Each item has a stable `id` and a local image asset
  { id: '1', image: require('../assets/project1.png') },
  { id: '2', image: require('../assets/project2.png') },
  { id: '3', image: require('../assets/project1.png') },
  { id: '4', image: require('../assets/project2.png') },
  { id: '5', image: require('../assets/project1.png') },
  { id: '6', image: require('../assets/project2.png') },
];

// `Projects` renders a horizontal list of project thumbnails and a header
const Projects = ({ onViewAll }) => {
  // Renders one project card for the FlatList
  const renderProject = ({ item }) => (
    <View style={styles.projectCard}>
      {/* Project thumbnail image */}
      <Image source={item.image} style={styles.projectImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with title and a 'View All' action */}
      <View style={styles.header}>
        <Text style={styles.title}>PROJECTS</Text>
        <TouchableOpacity onPress={onViewAll}>
          {/* Tapping this should call the onViewAll prop */}
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal FlatList showing project thumbnails */}
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

// Styles used by the component
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
