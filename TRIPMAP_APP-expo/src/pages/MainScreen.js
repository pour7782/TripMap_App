import { View, ScrollView, StyleSheet,Alert, Text } from "react-native";
import RegionCard from "../components/mainScreen/RegionCard";
import SearchBar from "../components/mainScreen/SearchBar";
import { useState } from "react";
import PopupDetail from "../pages/PopupDetail";
import BottomTab from "../components/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

// asdfsafsafsfasd

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

const MainScreen = () => {
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>나랏말싸미 듕귁에 달아</Text>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    titleText: {
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'left',
        marginLeft: 27,
    },
    regionList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    },
})

export default MainScreen;