import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import PopupSharedSchedule from "./PopupSharedSchedule";

const Boards = () => {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()

        // ------------------------------ 후기에 들어갈 임시 팝업 테스트
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        setShowPopup(true);
    }, [])
    // -------------------------------------

    return (
        <View>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top + -5, left: 20 }]}
                onPress={() => navigation.goBack()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={{ fontSize: 39, color: '#286699' }}>◂</Text>
            </TouchableOpacity>

            <ScrollView>

            </ScrollView>

            {/* --------------- */}
            <PopupSharedSchedule
                visible={showPopup}
                onClose={() => setShowPopup(false)}
            />
            {/* --------------- */}
        </View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        zIndex: 1,
    },
})

export default Boards;