import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hola");
  const [data, setData] = useState({});
  const [foco, setFoco] = useState('apagado');

  const Enviar = () => {
    fetch("https://manukga.onrender.com", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data), // Convierte los datos a JSON
    })
      .then((response) => response.json())
      .then((responseData) => {
        setText("Respuesta de la API:"+responseData[0]);
        console.log("Respuesta de la API:", responseData)
        // Puedes realizar acciones adicionales aquí, como mostrar un mensaje al usuario.
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.bottomView}>
        
      </View>
      <Text>
        {text}
      </Text>
      <View style={styles.inputsDiv}>
        <TextInput
          style={styles.inputs1}
          onChangeText={(text) => setData({ ...data, frecuencia: text })}
          placeholder="Frecuencia"
        />
        <TextInput
          style={styles.inputs1}
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="Longitud"
        />
      </View>
      <View style={styles.inputsDiv}>
        <TextInput
          style={styles.inputs1}
          onChangeText={(text) => setData({ ...data, frecuencia: text })}
          placeholder="e"
        />
        <TextInput
          style={styles.inputs1}
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="u"
        />
        <TextInput
          style={styles.inputs1}
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="o"
        />
      </View>
      <View style={styles.inputsDiv}>
        <TouchableOpacity
          style={styles.botonEnviar}
          onPress={Enviar()}
        >
          <Text style={styles.textBtn1}>Enviar</Text>
        </TouchableOpacity>
        <Button title="Encender foco" onPress={setFoco(Encendido)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width:'100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    backgroundColor: "cyan", // Color de fondo del div negro
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: "100%",
    marginBottom:50
  },
  itemName: {
    alignSelf: "center",
    color: "red",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.16,
  },
  inputsDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  inputs1: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  botonEnviar: {
    backgroundColor: "green",
    padding: 5,
    width: 100,
    color: "white",
    textAlign: "center",
    borderRadius: 10,
  },
  textBtn1: {
    color: "white",
    textAlign: "center",
  },
});
