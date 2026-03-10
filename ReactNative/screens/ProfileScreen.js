import React from 'react';
import { View, StyleSheet } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Projects';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StudentInfo name="JOHN DOE" position="UI/UX Designer" description="We're passionate about creating beautiful designing for startups & leading brands" profileImage={require('../assets/avatar1.png')}/>
      <Projects image1={require('../assets/project1.png')} image2={require('../assets/project2.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ProfileScreen;
