import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Projects';

const ProfileScreen = () => {
  const studentData = {
    fullname: 'JOHN DOE',
    position: 'UI/UX Designer',
    description: "We're passionate about creating beautiful designing for startups & leading brands",
    profileImage: require('../assets/avatar1.png'),
  };

  const projectImages = [
    require('../assets/project1.png'),
    require('../assets/project2.png'),
  ];

  return (
    <ScrollView style={styles.container}>
      <StudentInfo
        fullname={studentData.fullname}
        position={studentData.position}
        description={studentData.description}
        profileImage={studentData.profileImage}
      />
      <Projects images={projectImages} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ProfileScreen;
