import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const SearchBar = ({onSearch}) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      onSearch({ name: keyword, image: require('../../assets/default.png') })
      // default 이미지는 임시로 넣어둔겁니다.
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
      <Button title="검색" onPress={handleSearch} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
    margin: 13,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#90caf9',
    borderRadius: 7,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 17,
    backgroundColor: 'white',
  },
})

export default SearchBar;