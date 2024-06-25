import {View,Text} from "react-native";
import Tabs from ".../components/tiempo";

export default Tabs = (props) => {
    const {setSeleccion,setTiemmpo, seleccion}= props;
    const opciones =["Pomodoro", "Descanso","Desscansito"];
    const handlePress= (index) => {
        setSeleccion(index);
        
        const nuevoTiempo= index === 0 ? 25 : index === 1 ?
        5 : 10;

        setTiemmpo(nuevoTiempo * 60);
    }
    return(
        <View style={{flexDirection : "row",justifyContent: "space-around", padding:5,}}>
            { opciones.map((item,index)=>(
            <TouchableOpacitiy key={index} onPress={()=> handlePress(index)}
             style={[styles.boton, seleccion!== index &&
             {borderColor: "transparent"},
             ]}>
            <Text style={styles.texto}>
                {item}
            </Text>
            </TouchableOpacitiy>  
                ))
            }
           
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor : {},
    boton : {
        padding:10,
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 5,//asentua al borde
        margin:5,
    },
    texto : {
        fonstSize: 15,
        fontWeight:"bold"//ancho
    }

})