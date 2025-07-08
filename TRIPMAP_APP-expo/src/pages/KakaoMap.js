import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

const KakaoMap = ({ latitude = 37.5665, longitude = 126.9780, level = 3 }) => {
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
                    const markerPosition = new kakao.maps.LatLng(${latitude}, ${longitude});
                    // const marker = new kakao.maps.Marker({ position: markerPosition });
                    marker.setMap(map);
                };
                </script>
            </body>
        </html>
    `;

    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            style={{ flex: 1 }}
        />
    )
}

export default KakaoMap;