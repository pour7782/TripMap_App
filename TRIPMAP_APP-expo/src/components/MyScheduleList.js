import { StyleSheet, View, Text, Image } from "react-native";

const MyScheduleList = ({destination}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.label}>제목: {destination}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 17,
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30, // 동그라미
        marginRight: 15,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#90caf9',
    },
    info: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: '#000',
    },
})

export default MyScheduleList;