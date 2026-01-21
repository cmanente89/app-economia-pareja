import axios from "axios";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// URL DE GOOGLE APPS SCRIPT
//(modificado) Leemos la URL desde el archivo .env
const SCRIPT_URL = process.env.EXPO_PUBLIC_SCRIPT_URL;

//console.log("DEBUG - URL cargada:", process.env.EXPO_PUBLIC_SCRIPT_URL);

export default function App() {
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [pagador, setPagador] = useState("Carlos"); // Podés cambiar el nombre inicial
  const [cuotas, setCuotas] = useState("1");
  const [proximoMes, setProximoMes] = useState(false);
  const [cargando, setCargando] = useState(false);

  const enviarGasto = async () => {
    if (!concepto || !monto) {
      Alert.alert("Error", "Por favor completa concepto y monto.");
      return;
    }

    setCargando(true);
    const datos = {
      concepto: concepto,
      monto: parseFloat(monto),
      pagador: pagador,
      cuotas: parseInt(cuotas),
      pagaProximoMes: proximoMes,
      compartido: true, // Por defecto lo enviamos como compartido
    };

    try {
      await axios.post(SCRIPT_URL, JSON.stringify(datos));
      Alert.alert("¡Éxito!", "Gasto cargado correctamente.");
      setConcepto("");
      setMonto("");
      setCuotas("1");
      setProximoMes(false);
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el Excel.");
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Nuevo Gasto</Text>

      <Text style={styles.label}>Concepto</Text>
      <TextInput
        style={styles.input}
        value={concepto}
        onChangeText={setConcepto}
        placeholder="Ej: Supermercado"
      />

      <Text style={styles.label}>Monto Total</Text>
      <TextInput
        style={styles.input}
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
        placeholder="$ 0.00"
      />

      <Text style={styles.label}>¿Quién pagó?</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.botonPersona,
            pagador === "Carlos" && styles.botonActivo,
          ]}
          onPress={() => setPagador("Carlos")}
        >
          <Text style={pagador === "Carlos" ? styles.textoActivo : null}>
            Carlos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.botonPersona,
            pagador === "Milagros" && styles.botonActivo,
          ]}
          onPress={() => setPagador("Milagros")}
        >
          <Text style={pagador === "Milagros" ? styles.textoActivo : null}>
            Milagros
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Cuotas</Text>
      <TextInput
        style={styles.input}
        value={cuotas}
        onChangeText={setCuotas}
        keyboardType="numeric"
      />

      <View style={styles.rowSpace}>
        <Text style={styles.label}>¿Paga el próximo mes?</Text>
        <Switch value={proximoMes} onValueChange={setProximoMes} />
      </View>

      <TouchableOpacity
        style={[styles.botonEnviar, cargando && { backgroundColor: "#ccc" }]}
        onPress={enviarGasto}
        disabled={cargando}
      >
        <Text style={styles.textoBoton}>
          {cargando ? "Enviando..." : "GUARDAR GASTO"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: "#fff", flexGrow: 1 },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { fontSize: 16, marginBottom: 5, color: "#555" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    padding: 8,
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  botonPersona: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  botonActivo: { backgroundColor: "#007AFF", borderColor: "#007AFF" },
  textoActivo: { color: "#fff", fontWeight: "bold" },
  botonEnviar: {
    backgroundColor: "#28a745",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBoton: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
