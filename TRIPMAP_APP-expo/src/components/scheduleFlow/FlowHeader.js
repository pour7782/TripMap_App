import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FlowHeader = ({ onBack }) => {
    const insets = useSafeAreaInsets()

    return (
        <>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top -5, left: 20 }]}
                onPress={onBack}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={styles.backArrow}>◂</Text>
            </TouchableOpacity>
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
        marginTop: 22,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
    },
})

export default FlowHeader;