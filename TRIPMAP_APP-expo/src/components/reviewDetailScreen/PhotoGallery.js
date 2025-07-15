import { ScrollView, Image, Text, StyleSheet } from 'react-native';

const PhotoGallery = ({ photos }) => (
  <>
    {photos && photos.length > 0 ? (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {photos.map((photo, index) => (
          <Image key={index} source={photo} style={styles.image} />
        ))}
      </ScrollView>
    ) : (
      <Text style={styles.body}>사진이 없습니다.</Text>
    )}
  </>
)

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 17,
    color: '#333',
  },
  horizontalScroll: {
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
  body: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
  },
})

export default PhotoGallery;
