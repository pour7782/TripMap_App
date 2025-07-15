import { Text, TextInput, View, StyleSheet } from "react-native";

const ReviewForm = ({
    title, setTitle,
    hashtag, setHashtag,
    body, setBody,
    pros, setPros,
    cons, setCons,
    conclusion, setConclusion
}) => {
    return (
        <View>
            <Text style={styles.label}>제목</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="리뷰 제목"
            />

            <Text style={styles.label}>해시태그</Text>
            <TextInput
                style={styles.input}
                value={hashtag}
                onChangeText={setHashtag}
                placeholder="#해시태그 입력"
            />

            <Text style={styles.label}>리뷰 본문</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={body}
                onChangeText={setBody}
                placeholder="리뷰 내용을 입력하세요."
                multiline
            />

            <Text style={styles.label}>장점</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={pros}
                onChangeText={setPros}
                placeholder="장점을 입력하세요."
                multiline
            />

            <Text style={styles.label}>단점</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={cons}
                onChangeText={setCons}
                placeholder="단점을 입력하세요."
                multiline
            />

            <Text style={styles.label}>결론</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={conclusion}
                onChangeText={setConclusion}
                placeholder="결론을 입력하세요."
                multiline
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
})

export default ReviewForm;