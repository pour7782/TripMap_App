import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./pages/MainScreen";
import MyPage from "./pages/MyPage";
import KakaoMap from "./pages/KakaoMap";
import ReviewWriteScreen from "./screens/ReviewWriteScreen";
import ScheduleReviewListScreen from "./screens/ScheduleReviewListScreen";
import ReviewDetailScreen from "./screens/ReviewDetailScreen";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ReviewProvider } from "./contexts/ReviewContext";
import { ReviewSettingsProvider } from "./contexts/ReviewSettingsContext";
import DepartureTransportationScreen from "./screens/DepartureTransportationScreen";
import ReturnTransportationScreen from "./screens/ReturnTransportationScreen";
import ScheduleFlow from "./screens/ScheduleFlow";

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <ReviewProvider>
                <ReviewSettingsProvider>
                <NavigationContainer>
                    {/*  screenOptions={{headerShown: false}} -> 상단 바 유무 */}
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="MainScreen" component={MainScreen} />
                        <Stack.Screen name="MyPage" component={MyPage} />
                        <Stack.Screen name="LoginPage" component={LoginPage} />
                        <Stack.Screen name="SignupPage" component={SignupPage} />
                        <Stack.Screen name="KakaoMap" component={KakaoMap} />
                        <Stack.Screen name="ReviewWriteScreen" component={ReviewWriteScreen} />
                        <Stack.Screen name="ScheduleReviewListScreen" component={ScheduleReviewListScreen} />
                        <Stack.Screen name="ReviewDetailScreen" component={ReviewDetailScreen} />
                        <Stack.Screen name="DepartureTransportationScreen" component={DepartureTransportationScreen} />
                        <Stack.Screen name="ReturnTransportationScreen" component={ReturnTransportationScreen} />
                        <Stack.Screen name="ScheduleFlow" component={ScheduleFlow} />
                    </Stack.Navigator>
                </NavigationContainer>
              </ReviewSettingsProvider>
            </ReviewProvider>
        </SafeAreaProvider>
    )
}

export default App;