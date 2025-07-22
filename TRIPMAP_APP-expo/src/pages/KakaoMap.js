import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const KakaoMap = () => {
    const insets = useSafeAreaInsets()
    const route = useRoute()
    const navigation = useNavigation()
    
    const params = route.params || {};
    const latitude = params.latitude ?? 37.5665;
    const longitude = params.longitude ?? 126.9780;
    const startDate = params.startDate ?? null;
    const endDate = params.endDate ?? null;

    const shouldShowMarker = !(latitude === 37.5665 && longitude === 126.9780);

    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=1c43752237b063f419bac60bbe6da0c8&libraries=services"></script>
                <style>
                    body, html { margin:0; padding:0; height:100%; }
                    #map { width:100%; height:100%; }
                </style>
            </head>
            <body>
                <div id="map"></div>
                <script>
                    window.onload = function() {
                        const container = document.getElementById('map');
                        const options = {
                            center: new kakao.maps.LatLng(${latitude}, ${longitude}),
                            level: 3
                        };
                        const map = new kakao.maps.Map(container, options);
                        ${
                          shouldShowMarker
                            ? `const markerPosition = new kakao.maps.LatLng(${latitude}, ${longitude});
                               const marker = new kakao.maps.Marker({ position: markerPosition });
                               marker.setMap(map);`
                            : ''
                        }
                    };
                </script>
            </body>
        </html>
    `;

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <TouchableOpacity
                style={[styles.closeButton, { top: insets.top + -5, left: 25 }]}
                onPress={() => navigation.goBack()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <Text style={{ fontSize: 39, color: '#286699' }}>◂</Text>
            </TouchableOpacity>

            <WebView
                originWhitelist={['*']}
                source={{ html: htmlContent }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                style={styles.webview}
            />

            <View style={[styles.dateBox, { top: insets.top + 25 }]}>
                {startDate && endDate ? (
                    <Text style={styles.dateText}>{startDate} ~ {endDate}</Text>
                ) : (
                    <Text style={styles.dateText}>여행 날짜를 선택해주세요</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        zIndex: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 6,
        borderRadius: 8,
    },
    webview: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    dateBox: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 13,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#d0e6ff',
        shadowColor: '#aaa',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
        zIndex: 10,
    },
    dateText: {
        fontSize: 16,
        color: '#333',
    },
})

export default KakaoMap;