import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 뒤로가기 및 후기 타이틀
const Header = ({ onBack }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top -5, left: 20 }]}
                onPress={onBack}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={styles.backArrow}>◂</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitle}>추천 일정 및 후기</Text>
        </>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        zIndex: 1
    },
    backArrow: {
        fontSize: 39, color: '#286699'
    },
    screenTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#000',
    },
})

export default Header;