import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StudentInfoScreen = () => {
  const firstName = 'Arta';
  const surname = 'Krasniqi';
  let fullName = `${firstName} ${surname}`;
  fullName = `${fullName}`;

  const birthday = 'March 14, 2008';
  const city = 'Prishtina';
  const classroom = '11th Grade';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Personal Info</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{fullName}</Text>

        <Text style={styles.label}>Birthday:</Text>
        <Text style={styles.value}>{birthday}</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{city}</Text>

        <Text style={styles.label}>Class:</Text>
        <Text style={styles.value}>{classroom}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7ff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dbe4ff',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#457b9d',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    color: '#1d3557',
    marginTop: 2,
  },
});

export default StudentInfoScreen;
