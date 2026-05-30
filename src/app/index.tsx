import { useEffect, useState } from "react";
import {Text, View, Button} from "react-native";

export default function (){


    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        let interval = setInterval(()=>{
            setCount(c=>c+1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return <View>
        <Text>
            Hi there!
        </Text>
        <Text>{count}</Text>
        <Button title = "Sign Up" >

        </Button>
    </View>
}

