import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileInfo = ({ name, position, description, profileImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.fullname}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  heroSection: {
    height: 355,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    backgroundColor: '#6CC5E6',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '78%',
    height: '78%',
    resizeMode: 'contain',
  },
  cardContent: {
    marginTop: -48,
    marginHorizontal: 24,
    borderRadius: 24,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  fullname: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#101010',
    marginBottom: 4,
  },
  position: {
    fontSize: 30,
    color: '#4F4F4F',
    marginBottom: 10,
  },
  description: {
    fontSize: 17,
    color: '#2D2D2D',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 25,
  },
  hireButton: {
    backgroundColor: '#FFD400',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 28,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default ProfileInfo;
