import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyScheduleList from "../components/MyScheduleList"
import MyReviewList from "../components/MyReviewList";
import MySharedScheduleList from "../components/MySharedScheduleList";
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MyPage = () => {
    const [selectedTab, setSelectedTab] = useState('schedule')
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    
    const renderTab = () => {
        switch (selectedTab) {
        case 'schedule':
            return <MyScheduleList destination="서울여행기" />
        case 'review':
            return <MyReviewList />
        case 'shared':
            return <MySharedScheduleList destination="딸기시루"/>
        default:
            return null
        }
    }

    const handleTabChange = (tab) => {
        setSelectedTab(tab);

        // '내가 쓴 리뷰' 탭을 선택했을 때, 리뷰 작성 페이지로 이동
        if (tab === 'review') {
            navigation.navigate('ReviewWriteScreen');
        }
    }

    const handleLoginClick = () => {
        navigation.navigate('LoginPage');  // 'LoginPage'로 이동
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top + -5, left: 20 }]}
                onPress={() => navigation.goBack()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={{ fontSize: 39, color: '#286699' }}>◂</Text>
            </TouchableOpacity>

            {/* 프로필 영역 */}
            <View style={styles.profileSection}>
                <View style={styles.profileWrapper}>
                    <Image
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editIcon} hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}>
                        <Ionicons name="create-outline" size={18} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.username}>사용자 이름</Text>
            </View>

            <TouchableOpacity onPress={handleLoginClick}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>

            {/* 탭 버튼 */}
            <View style={styles.tabMenu}>
                {['schedule', 'review', 'shared'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={styles.tabItem}
                        onPress={() => handleTabChange(tab)}
                        // onPress={() => setSelectedTab(tab)} // handleTabChange
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

            {/* 내용 표시 */}
            <ScrollView style={styles.content}>
                {renderTab()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    buttonText: {
        textAlign: 'right',
        color: '#286699',
        paddingRight: 15,
    },
    closeButton: {
        position: 'absolute',
        zIndex: 1,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileWrapper: {
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#000',
        justifyContent: 'center',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 4,
        borderWidth: 1,
        borderColor: '#fff',
    },
    username: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tabMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#43749c',
        paddingBottom: 10,
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
    content: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
    },
})

export default MyPage;