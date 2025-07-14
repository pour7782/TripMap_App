import { useState } from "react";
import { View, StyleSheet, TextInput, Button, TouchableOpacity, Text } from "react-native";

// 메인 화면 상단 지역 검색 바
const SearchBar = ({onSearch}) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
      if (keyword.trim() !== '') {
        onSearch(keyword.trim())
      }
  }

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="지역을 입력하세요"
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSearch}
        hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
        style={styles.searchButton}
      >
        <Text style={styles.searchButtonText}>검색</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginTop: 10,
    paddingHorizontal: 10,
    margin: 13,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 7,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 17,
    backgroundColor: 'white',
  },
  searchButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
  }
})

export default SearchBar;