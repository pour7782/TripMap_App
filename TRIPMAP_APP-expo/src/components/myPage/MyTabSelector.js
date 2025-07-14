import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const MyTabSelector = ({ selectedTab, onTabChange }) => {
    return (
        <View style={styles.tabMenu}>
            {['schedule', 'review', 'shared'].map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={styles.tabItem}
                    onPress={() => onTabChange(tab)}
                    hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
                >
                    <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>
                        {tab === 'schedule' && '내 일정 리스트'}
                        {tab === 'review' && '내가 쓴 리뷰'}
                        {tab === 'shared' && '공유한 일정'}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#43749c',
        paddingBottom: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 14,
        color: '#d3d3d3',
        padding: 10,
    },
    activeTab: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#1e90ff',
    },
})

export default MyTabSelector;
