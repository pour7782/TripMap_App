import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// 리뷰 페이지 상단 바
const HeaderBackButton = ({ onBack }) => {
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
      <Text style={styles.screenTitle}>리뷰</Text>
    </>
  )
}

const styles = StyleSheet.create({
    closeButton: {
      position: 'absolute', zIndex: 1
    },
    backArrow: {
      fontSize: 39, color: '#286699'
    },
    screenTitle: {
      paddingTop: 20,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 22,
      textAlign: 'center',
      color: '#333',
    },
})


export default HeaderBackButton;