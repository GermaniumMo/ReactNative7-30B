import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { projectImages } from '../components/Projects';

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={projectImages}
        keyExtractor={(item) => item.id}
        horizontal={false}
        nestedScrollEnabled
        scrollEnabled
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Image source={item.image} style={styles.projectImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 14,
  },
  projectCard: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
});

export default ProjectsScreen;
