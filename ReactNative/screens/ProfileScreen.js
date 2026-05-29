import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import Projects from '../components/Projects';

const ProfileScreen = ({ navigation }) => {
  const sections = [
    { id: 'profile' },
    { id: 'projects' },
  ];

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={sections}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        if (item.id === 'profile') {
          return (
            <ProfileInfo
              name="JOHN DOE"
              position="UI/UX Designer"
              description="We're passionate about creating beautiful desing for startups & leading brands"
              profileImage={require('../assets/download.png')}
            />
          );
        }

        return <Projects onViewAll={() => navigation.navigate('Projects')} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    paddingBottom: 24,
  },
});

export default ProfileScreen;
