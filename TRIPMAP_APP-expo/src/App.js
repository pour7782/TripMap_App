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

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/*  screenOptions={{headerShown: false}} -> 상단 바 유무 */}
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="MyPage" component={MyPage} />
                    <Stack.Screen name="LoginPage" component={LoginPage} />
                    <Stack.Screen name="SignupPage" component={SignupPage} />
                    <Stack.Screen name="KakaoMap" component={KakaoMap} />
                    <Stack.Screen name="ReviewWriteScreen" component={ReviewWriteScreen} />
                    <Stack.Screen name="ScheduleReviewListScreen" component={ScheduleReviewListScreen} />
                    <Stack.Screen name="ReviewDetailScreen" component={ReviewDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;