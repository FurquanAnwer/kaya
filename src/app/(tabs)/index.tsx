import { StyleSheet,Dimensions,Text,View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers } from "@/hooks/useWallpapers";
import { SplitView } from "@/components/SplitView";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import Animated,{interpolate,useAnimatedStyle} from "react-native-reanimated";
import {LinearGradient} from 'expo-linear-gradient';
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";



const TOPBAR_HEIGHT = 250

export default function explore(){
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yoffset,setScrollY] = useState(0)
    const carouselItems = useCarousel();

    const headerAnimatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[
                {
                    scale:interpolate(yoffset,[-TOPBAR_HEIGHT,0,TOPBAR_HEIGHT],[1.5,1,1]),

                },
            ],
        };
    });

    const textAnimatedStyle = useAnimatedStyle(()=>{
        return {
            opacity:interpolate(yoffset,[-TOPBAR_HEIGHT,TOPBAR_HEIGHT/2,TOPBAR_HEIGHT],[1,1,0]),
        }
    });

    return <ThemedSafeAreaView style={{flex:1}}>
        <Animated.View style={[{height:Math.nax(0,TOPBAR_HEIGHT - yoffset)},headerAnimatedStyle]}>
            <Carousel 
                width={width}
                data={carouselItems}
                onSnapToItem={(index)=>console.log('current index:',index)}
                renderItem = {({index})=>(
                    <>
                        <View
                            style={{
                                flex:1,
                                borderWidth:1,
                                justifyContent:'center',
                            }}
                        >
                            <Image source={{uri:carouselItems[index].image}} style={{height:TOPBAR_HEIGHT}} />
                        </View>
                        <linearGradient colors={['transparent','black']} style={{flex:1,position:'absolute',zIndex:10,height:TOPBAR_HEIGHT/2,width:"100%",bottom:0}}>
                            <Animated.View style={textAnimatedStyle}>
                                <Text style={[{color:"white",paddingTop:TOPBAR_HEIGHT/3,textAlign:"center",fontSize:30,fontWeight:"600"}]}>

                                    {carouselItems[index].title}
                                </Text>
                            </Animated.View>

                        </linearGradient>
                    </>
                )}
                />
        </Animated.View>
        <View style={{borderRadius:20}}>
            <SplitView onScroll={(yoffset)=>{
                setScrollY(yoffset)
            }} wallpapers={wallpapers}/>
        </View>
    </ThemedSafeAreaView>
}

const style = StyleSheet.create({
    container : {
        flexDirection : "row",
        flex : 1
    },
    innerContainer : {
        flex:1,
        padding : 10
    },
    imageContainer : {
        paddingVertical : 10
    }
})