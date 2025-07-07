import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const RegionCard = ({ region, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={region.image} style={styles.image} />
            <Text style={styles.name}>{region.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '45%',
        aspectRatio: 1,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 3,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: '75%',
    },
    name: {
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
    },
})

export default RegionCard;