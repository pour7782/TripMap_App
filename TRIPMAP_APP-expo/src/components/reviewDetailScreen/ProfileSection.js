import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileSection = ({ profileImage, user, hashtag }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>작성자: {user}</Text>
        <Text style={styles.hashtag}>{hashtag}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  username: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  hashtag: {
    fontSize: 16,
    color: '#888',
  },
})

export default ProfileSection;
