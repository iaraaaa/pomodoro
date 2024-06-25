import { Text, View ,StyleSheet} from "react-native";

export default Tiempo = ({Tiempo}) => {
    const fomatoTiempo =`${Math.floor(Tiempo/60).toString
    .padStart(2,"0")} : ${(Tiempo % 60 ).toString().padStart(2, "0")}`;

    return (
        <View style={styles.contenedor}>
            <Text style={styles.text} >{Tiempo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor :{
        padding: 110,
        borderWidth : 1,
        backgroundColor: "red",
        margin: 15,
        borderRadius: 10,
    },

    text:{
        fontSize: 15,
    }

});