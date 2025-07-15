import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

const PhotoList = ({ photos, onRemovePhoto }) => {
    if (photos.length === 0) {
        return <Text>사진이 없습니다.</Text>
    }

    return (
        <ScrollView horizontal style={styles.photoScroll} contentContainerStyle={{ alignItems: 'center' }}>
            {photos.map((photo, index) => (
                <Pressable
                    key={index}
                    onLongPress={() =>
                        Alert.alert(
                        '사진 삭제',
                        '이 사진을 삭제하시겠어요?',
                        [
                            { text: '취소', style: 'cancel' },
                            { text: '삭제', style: 'destructive', onPress: () => onRemovePhoto(index) },
                        ]
                        )
                    }
                    style={styles.photoContainer}
                >
                    <Image source={photo} style={styles.photo} />
                </Pressable>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    photoScroll: {
        marginTop: 10,
        maxHeight: 160,
    },
    photoContainer: {
        marginRight: 10,
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
})

export default PhotoList;