import { View, ScrollView, StyleSheet,Alert, SafeAreaView } from "react-native";
import RegionCard from "../components/RegionCard"
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import PopupDetail from "../pages/PopupDetail";
import BottomTab from "../components/BottomTab";

// 임시 데이터
const regions = [
    { name: '서울', image: require('../../assets/seoul.jpg') },
    { name: '충청북도', image: require('../../assets/seoul.jpg') },
    { name: '인천', image: require('../../assets/seoul.jpg') },
    { name: '경상북도', image: require('../../assets/seoul.jpg') },
    { name: '서울', image: require('../../assets/seoul.jpg') },
    { name: '충청북도', image: require('../../assets/seoul.jpg') },
    { name: '인천', image: require('../../assets/seoul.jpg') },
    { name: '경상북도', image: require('../../assets/seoul.jpg') },
    { name: '서울', image: require('../../assets/seoul.jpg') },
    { name: '충청북도', image: require('../../assets/seoul.jpg') },
    { name: '인천', image: require('../../assets/seoul.jpg') },
    { name: '경상북도', image: require('../../assets/seoul.jpg') },
]

const MainScreen = ({navigation}) => {
    const [selectedRegion, setSelectedRegion] = useState(null)

    const handleSearch = (keyword) => {
        const found = regions.find(region => region.name === keyword)
        if (found) {
            setSelectedRegion(found)
        } else {
            Alert.alert('검색 결과가 없습니다.')
            setSelectedRegion(null)
        }
    }

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <ScrollView>
                <View style={styles.regionList}>
                    {regions.map((region, index) => (
                        <RegionCard key={index} region={region} onPress={() => setSelectedRegion(region)} />
                    ))}
                </View>
            </ScrollView>
            <BottomTab />

            {selectedRegion && (
                <PopupDetail region={selectedRegion} onClose={() => setSelectedRegion(null)} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    regionList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 10,
    },
})

export default MainScreen;