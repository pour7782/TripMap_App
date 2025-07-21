import { useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import TransportationOption from '../components/popup/TransportationOption';
import { useNavigation, useRoute } from '@react-navigation/native';
import FlowHeader from '../components/scheduleFlow/FlowHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const dummyTransportationOptions = [
    { id: '1', type: '버스', departure: '09:00', duration: '2시간', price: '₩10,000' },
    { id: '2', type: '기차', departure: '10:00', duration: '1시간 30분', price: '₩15,000' },
]

const DepartureTransportationScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const insets = useSafeAreaInsets()
    const { startDate, departureTime } = route.params || {};

    const [selectedOption, setSelectedOption] = useState(null)

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d)) return '';
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
        return `${year}-${month}-${day} (${dayOfWeek})`;
    };

    const formatTime = (date) => {
        if (!date) return '';
        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        return `${h}:${m}`;
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <FlowHeader onBack={() => navigation.goBack()} />
            <Text style={styles.title}>가는 날 교통편 선택</Text>

            <Text style={styles.summaryText}>
                가는 날: <Text style={styles.highlightText}></Text>
            </Text>
            <Text style={styles.summaryText}>
                출발 시간: <Text style={styles.highlightText}>{formatTime(new Date(departureTime))}</Text>
            </Text>

            <FlatList
                data={dummyTransportationOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TransportationOption
                        option={item}
                        selected={selectedOption?.id === item.id}
                        onSelect={() => setSelectedOption(item)}
                    />
                )}
            />

            <Button
                title="다음"
                onPress={() => {
                    if (!selectedOption) {
                        Alert.alert('교통편을 선택해주세요.')
                        return
                    }
                    navigation.navigate('ReturnTransportationScreen', {
                        startDate,
                        departureTime,
                        selectedDepartureTransportation: selectedOption,
                    })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 22,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
    },
    summaryText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    highlightText: {
        color: '#000',
        fontWeight: 'normal',
    },
})

export default DepartureTransportationScreen;
