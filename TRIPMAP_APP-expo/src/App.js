import MainScreen from "./components/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/*  screenOptions={{headerShown: false}} -> 상단 바 유무 */}
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainScreen} />
                    {/* <Stack.Screen name="MyPage" component={MyPage} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;