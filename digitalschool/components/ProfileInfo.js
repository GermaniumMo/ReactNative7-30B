// Import React so we can use JSX and functional components
import React from 'react';
// Import React Native building blocks used in this component
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// `ProfileInfo` is a presentational component that receives props
// and renders a stylized profile card (image, name, position, bio, CTA).
const ProfileInfo = ({ name, position, description, profileImage }) => {
  // Return the component's UI as JSX
  return (
    // Root container for the profile card
    <View style={styles.container}>
      {/* Hero section: colored background that holds the profile image */}
      <View style={styles.heroSection}>
        {/* Profile image provided via the `profileImage` prop */}
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      {/* Card content that overlaps the hero section */}
      <View style={styles.cardContent}>
        {/* Display full name */}
        <Text style={styles.fullname}>{name}</Text>
        {/* Display position/title */}
        <Text style={styles.position}>{position}</Text>
        {/* Short description or bio */}
        <Text style={styles.description}>{description}</Text>
        {/* Call-to-action button (non-functional in this snippet) */}
        <TouchableOpacity style={styles.hireButton}>
          {/* Button label */}
          <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// StyleSheet for the component; each key maps to a named style object
const styles = StyleSheet.create({
  // Outer container spacing
  container: {
    marginBottom: 18,
  },
  // Hero section with background color and rounded bottom corners
  heroSection: {
    height: 355,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    backgroundColor: '#6CC5E6',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  // Profile image sizing and scaling
  profileImage: {
    width: '78%',
    height: '78%',
    resizeMode: 'contain',
  },
  // Card content styling (overlapping the hero section)
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
  // Large, prominent full name text
  fullname: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#101010',
    marginBottom: 4,
  },
  // Position/title text styling
  position: {
    fontSize: 30,
    color: '#4F4F4F',
    marginBottom: 10,
  },
  // Description/bio styling
  description: {
    fontSize: 17,
    color: '#2D2D2D',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 25,
  },
  // CTA button container
  hireButton: {
    backgroundColor: '#FFD400',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 28,
  },
  // CTA button text
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

// Export the component as default
export default ProfileInfo;
