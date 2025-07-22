import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MyProfile from "../components/myPage/MyProfile";
import MyTabSelector from "../components/myPage/MyTabSelector";
import MyTabContent from "../components/myPage/MyTabContent";
import { useAuth } from "../contexts/AuthContext";

const MyPage = () => {
    const [selectedTab, setSelectedTab] = useState('schedule')
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const lastPressRef = useRef(0)

    const { user } = useAuth()

    // 로그인 안 되어 있으면 바로 로그인 페이지로 이동
    useEffect(() => {
        if (!user) {
            navigation.replace("LoginPage"); 
        }
    }, [user]);

    const handleTabChange = (tab) => {
        const now = Date.now()
        const DOUBLE_PRESS_DELAY = 300

        if (tab === 'review') {
            if (now - lastPressRef.current < DOUBLE_PRESS_DELAY) {
                navigation.navigate('ReviewWriteScreen')
            }
            setSelectedTab(tab)
            lastPressRef.current = now
        } else {
            setSelectedTab(tab)
        }
    }

    const handleLoginClick = () => {
        navigation.navigate('LoginPage')
    }

    // 로그인 되어 있을 때만 마이페이지 보여주기
    if (!user) return null;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top + -5, left: 20 }]}
                onPress={() => navigation.goBack()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={{ fontSize: 39, color: '#286699' }}>◂</Text>
            </TouchableOpacity>

            <MyProfile onLoginClick={handleLoginClick} />
            <MyTabSelector selectedTab={selectedTab} onTabChange={handleTabChange} />

            <ScrollView style={styles.content}>
                <MyTabContent selectedTab={selectedTab} />
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
    closeButton: {
        position: 'absolute',
        zIndex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
    },
})

export default MyPage;