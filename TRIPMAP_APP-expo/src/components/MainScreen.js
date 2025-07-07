import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import RegionCard from "./RegionCard"
import ButtomTab from "./BottomTab"
import SearchBar from "./SearchBar";
import { useState } from "react";
import PopupDetail from "./PopupDetail";

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
    const [selectedRegion, setSelectedRegion] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={region => setSelectedRegion(region)} />
            <ScrollView>
                <View style={styles.regionList}>
                    {regions.map((region, index) => (
                        <RegionCard key={index} region={region} onPress={() => setSelectedRegion(region)} />
                    ))}
                </View>
            </ScrollView>
            <ButtomTab />

            {selectedRegion && (
                <PopupDetail region={selectedRegion} onClose={() => setSelectedRegion(null)} />
            )}
        </SafeAreaView>
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