import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const StudentInfo = ({ name, position, description, profileImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />

      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity style={styles.settingsIcon}>
        <Text style={styles.settingsText}>⚙️</Text>
      </TouchableOpacity>

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
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerBackground: {
    height: 120,
    backgroundColor: '#5DADE2',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
    zIndex: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#333',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 15,
  },
  settingsText: {
    fontSize: 20,
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  fullname: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  position: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 18,
  },
  hireButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default StudentInfo;
