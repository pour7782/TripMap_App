import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// 팝업 PopupDetail 사진 옆 텍스트
const RecommendationList = ({ region }) => {
    const [departure, setDeparture] = useState("서울") // 기본 출발지
    const [isEditing, setIsEditing] = useState(false)

    const handleEndEditing = () => {
        setIsEditing(false)
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={handleEndEditing}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.title}>출발지:</Text>
                    {isEditing ? (
                        <TextInput
                            style={styles.input}
                            value={departure}
                            onChangeText={setDeparture}
                            onSubmitEditing={handleEndEditing}
                            onBlur={handleEndEditing}
                            returnKeyType="done"
                            autoFocus
                        />
                    ) : (
                        <View style={styles.inlineRow}>
                            <Text style={styles.text}>{departure}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setIsEditing(true)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.buttonText}>변경</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                <View style={styles.row}>
                    <Text style={styles.title}>도착지:</Text>
                    <Text style={styles.text}>{region}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        margin: 5,
        padding: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 5,
    },
    inlineRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        padding: 8,
        borderRadius: 8,
        marginBottom: 10,
        width: 100,
    },
    text: {
        fontSize: 16,
        marginRight: 10,
        color: "#1e90ff",
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        marginLeft: 10,
    },
    buttonText: {
        color: "#999",
        fontWeight: 'bold',
        fontSize: 12,
    }
})

export default RecommendationList;