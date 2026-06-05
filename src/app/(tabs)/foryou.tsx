import { SplitView } from "@/components/SplitView";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedView } from "@/components/themed-view";
import {Colors} from '@/constants/Colors'
import { useLibraryWallpapers,useLikedWallpapers,useSuggestedWallpapers,useWallpapers } from "@/hooks/useWallpapers";
import {createMaterialTopNavigator} from '@/react-navigation/material-top-tabs'
import { Background } from "expo-router/build/react-navigation";
import {Text,useColorScheme} from 'react-native'
import {View,StyleSheet} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopNavigator();


export default function ForYou(){
    const theme = useColorScheme()?? 'light'

    return (
        <ThemedSafeAreaView style = {style.container}>
            <Tab.Navigator style={{
                flex:1,
            }} screenOptions={{
                tabBarActiveTintColor:Colors[theme].tint,
                tabBarStyle:{
                    backgroundColor:Colors[theme].background,
                },
                tabBarIndicatorStyle:{
                    backgroundColor:Colors[theme].indicator,
                    height:5
                }
            }}>
                <Tab.Screen name="Library" components={LibraryScreen}/>
                <Tab.Screen name="Liked" components={LikedScreen}/>
                <Tab.Screen name="Suggested" components={SuggestedScreen}/>

            </Tab.Navigator>
        </ThemedSafeAreaView>
    )
}


function LibraryScreen(){
    const wallpapers = useLibraryWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

function LikedScreen(){
    const wallpapers = useLikedWallpapers();
    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

function SuggestedScreen(){
    const wallpapers = useSuggestedWallpapers();
    return <ThemedView style={styles.container}>
            <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

const styles = StyleSheet.create({
    container : {
        flex :1
    }
})