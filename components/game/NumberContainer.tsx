import {Text, View, StyleSheet} from "react-native";

function NumberContainer ({children}:any){
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}
export default NumberContainer;
const styles = StyleSheet.create({
    container:{
   borderWidth:4,
        borderColor: '#644d02',
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color:'#644d02',
        fontSize:36,
        fontWeight:'bold'
    }

})
