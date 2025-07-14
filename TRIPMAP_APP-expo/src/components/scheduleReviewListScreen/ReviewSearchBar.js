import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// 추천 일정 및 후기 상단 검색 바
const ReviewSearchBar = ({ value, onChangeText, onSearch }) => {
    return (
        <View style={styles.searchBox}>
            <TextInput
                style={styles.searchInput}
                placeholder="지역, 제목, 해시태그 검색"
                value={value}
                onChangeText={onChangeText}
            />
            <Pressable style={styles.searchButton} onPress={onSearch}>
                <Text style={styles.searchButtonText}>검색</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        padding: 10,
        flex: 1,
        marginRight: 10,
        borderRadius: 8,
        fontSize: 14,
    },
    searchButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default ReviewSearchBar;