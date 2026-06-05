import {Wallpaper} from "@/hooks/useWallpapers";
import {View,StyleSheet,Image,useColorScheme,Pressable} from "react-native";
import { ThemedText } from "./themed-text";
import Ionicons from "@expo/vector-icons/Ionicons"
import {colors} from '@/constants/Colors'
import { Color } from "expo-router";


export function ImageCard({wallpaper,onPress}:{
    wallpaper:Wallpaper,
    onPress:()=>void
}){
    const themes = useColorScheme() ?? 'light';
    return <Pressable onPress={onPress}>
        <View>
            <Image source={{uri:wallpaper.url}} style={style.image} />
            <View style={styles.labelcontainer}>
                <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name={'heart'}
                        size={18}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    />
                </View>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    iconContainer :{
        display:"flex",
        justifyContent:"center"
    },
    image:{
        flex:1,
        height:220,
        borderRadius:20
    },
    label:{
        color:"white"
    },
    labelContainer:{
        position:"absolute",
        bottom:0,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
})