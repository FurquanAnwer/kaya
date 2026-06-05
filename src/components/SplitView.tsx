import {Wallpaper} from "@/hooks/useWallpapers"
import { ThemedView } from "./themed-view"
import {View,StyleSheet,Flatlist} from "react-native;
import {ImageCard} from "./ImageCard";
import { useState } from "react";
import { DownloadPicture } from "./BottomSheet";

export function SplitView({wallpapers,onPress}:{
    wallpapers:Wallpaper[];
    onScroll?:(yoffset:number)=>void;
}){
    const [selectedWallpaper,setSelectedWallpaper] = useState<null | Wallpaper>(null)

    return <>
            <Flatlist
                onScroll={(e)=>{
                    let yoffset = e.nativeEvent.contentOffset.y/1;
                    onscroll?.(yoffset);
                }}
                data={wallpapers.filter((_,index)=>index%2===0).map((_,index)=>[wallpapers[index],wallpapers[index+1]])}
                renderItems = {({item:[first,second]})=><ThemedView style={styles.container}>
                        <ThemedView style={styles.innerContainer}>
                            <View style={styles.imageContainer}><ImageCard onPress={()=>{
                                setSelectedWallpaper(first)
                            }}wallpaper={first}/>

                            </View>
                            <ThemedView style={styles.innerContainer}>
                                {second && <View style={styles.imageContainer}><ImageCard wallpaper={second} onPress={()=>{
                                    setSelectedWallpaper(second)
                                }}/></View>}
                            </ThemedView>

                        </ThemedView>
                </ThemedView>
                }
                keyExtractor = {item=>item[0].name}
            />
            {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
    </>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:10
    },
    imageContainer:{
        paddingVertical:10
    }
})