import { DownloadPicture } from "@/components/BottomSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {Button,Pressable,Text,View,useColorSchema,StyleSheet,Appearance} from "react-native";
import {Colors} from '@/constants/Colors';
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

export default function account(){
    return <ThemedSafeAreaView styles={{flex:1}}>
        <ScrollView style={{flex:1}}>
            <Header/>
            <ThemedView style={{flex:1}}>
                <LoginButtons/>
                <ThemeSelector/>
                <About/>
            </ThemedView>
        </ScrollView>
    </ThemedSafeAreaView>
}


function About(){
    return <ThemedView style={styles.margin}>
        <ThemedText style={styles.textBig}>About</ThemedText>
        <ThemedView style={{marginTop:10}}>
            <Pressable>
                <ThemedText style={{margin:10,fontSize:18}}>Account</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10,fontSize:18}}>Privacy Policy</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10,fontSize:18}}>Terms of Service</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10,fontSize:18}}>Licenses</ThemedText>
            </Pressable>

        </ThemedView>

    </ThemedView>
}

function ThemeSelector(){
    return <ThemedView style={styles.margin}>
        <ThemedText style={styles.textBig}>Settings</ThemedText>
        <ThemedText>Theme</ThemedText>
        <ThemedView style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <ThemeButton title={"Dark"} selected={false} colorScheme="dark" />
            <ThemeButton title={"Light"} selected={false} colorScheme="dark" />
            <ThemeButton title={"System"} selected={false} colorScheme="null" />
        </ThemedView>
    </ThemedView>
}

function ThemeButton({title,selected,colorScheme}:{selected:boolean,title:string,colorScheme:"dark"|"light"|null}){
    const theme = useColorSchema();

    return <Pressable style={{padding:10,
        borderWidth:1,
        borderColor:theme == 'light' ? Colors.light.text : Colors.dark.icon,borderRadius:5,flex:0.3}} onPress={()=>{
            Appearance.setColorScheme(colorScheme)
        }}>
        <ThemedText style={{width:"100%",textAlign:'center'}}>{title}</ThemedText>

    </Pressable>
}


function LoginButtons(){
    const theme = useColorSchema()??'light';
    return <>
        <AuthButton 
            label={"Sign in"}
            icon = {<Ionicons
                    name={'logo-google'}
                    size={24}
                    color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            />}
        />
        <AuthButton 
            label = {"Sign in"}
            icon = {<Ionicons
                    name={'logo-apple'}
                    size={24}
                    colors={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            />}
        />
    </>
}


function Header(){
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}>Panels</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
}


function AuthButton({label,icon}:{
    label:string,
    icon:any
}){
    const theme = useColorSchema()??'light';
    return <Pressable style={{
        backgroundColor:theme,
        padding:10,
        marginHorizontal:40,
        marginVertical:5,
        justifyContent:'center',
        flexDirection:"row",
        borderRadius:10,
        borderWidth:1,
        borderColor:theme === 'light' ? Colors.light.text : Colors.dark.icon

    }}>
        {icon}
        <ThemedText
            style={{
                fontSize:20,
                fontWeight:"600",
            }}
        >{label}
        </ThemedText>
        </Pressable>
}

const styles = StyleSheet.create({
    textBig:{
        fontSize:25,
        fontWeight:"600"
    },
    topbar:{
        padding:20
    },
    themeSelectorContainer:{
        flex:1    
    },
    themeSelectorChild:{

    },
    margin:{
        padding:20
    }
})