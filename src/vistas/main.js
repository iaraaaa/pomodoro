import { Text, View } from "react-native";
import Tabs  from "../components/tabs";
import Timer from "../components/timer"
import Boton  from "../components/boton";
import  {StatusBar} from "expo-status-bar";
import{useEffect,useState} from "react";
import{Audio} from "expo-av";



export default  Main = () => {
    const color =["#5170D5","#5CAFF2","#5CDEF2"];
    const [seleccion, setSeleccion] = useState("POMO" | "SHORT"| "LONG") ;
    const [activo,setActivo] = useState(false);
    const [Tiempo,setTiempo] = useState(25 * 60);

    useEffect(() => {
        let interval = null;
    
        if (activo) {
          interval = setInterval(() => {
            setTiempo(tiempo - 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
    
        if (tiempo === 0) {
          setActivo(false);
          setTiempo(seleccion === 0 ? 1500 : seleccion === 1 ? 300 : 600);
          playSonido();
        }
        const playSonido = async () => {
            const { sound } = await Audio.Sound.createAsync(
              require("../../assets/duck.mp3")
            );
            await sound.playAsync();
        };
    
        return () => clearInterval(interval);
      }, [tiempo, activo]);

    return (
        <SafeAreaView style={[{ flex: 1 },{backgroundColor:color[seleccion]}]}> 
        <StatusBar style="light"/>
        <View style={{maginTop: Plataform.OS ==="android" && 30}}>
            <Tabs seleccion={seleccion} setSeleccion ={setSeleccion}
            tiempo={tiempo} setTiempo={setTiempo} />
            <Timer tiempo={tiempo}/> 
            <Boton activo={activo} setActivo={setActivo}/>
        </View>
        </SafeAreaView>
    );
}
