import axios from "axios";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  //StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles/styles.js";

// URL DE GOOGLE APPS SCRIPT
//(modificado) Leemos la URL desde el archivo .env
const SCRIPT_URL = process.env.EXPO_PUBLIC_SCRIPT_URL;

const CATEGORIAS_MADRE = [
  "Vida",
  "Impuestos/Servicios",
  "Transporte",
  "Entretenimiento",
  "Vicios",
  "Varios/Extras",
];

//console.log("DEBUG - URL cargada:", process.env.EXPO_PUBLIC_SCRIPT_URL);

export default function App() {
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [pagador, setPagador] = useState("Carlos"); // Podés cambiar el nombre inicial
  const [cuotas, setCuotas] = useState("1");
  const [proximoMes, setProximoMes] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [categoria, setCategoria] = useState("Vida");
  const [dividir, setDividir] = useState(true); // Por defecto se divide

  const enviarGasto = async () => {
    if (!concepto || !monto) {
      Alert.alert("Error", "Por favor completa concepto y monto.");
      return;
    }

    const datos = {
      categoria: categoria,
      concepto: concepto,
      monto: parseFloat(monto),
      cuotas: parseInt(cuotas),
      pagador: pagador,
      pagaProximoMes: proximoMes,
      compartido: dividir,
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

      {/* botones de categorias */}

      <Text style={styles.label}>Categoría General</Text>
      <View style={styles.gridCategorias}>
        {CATEGORIAS_MADRE.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.botonCuadricula,
              categoria === cat && styles.botonCuadriculaActivo,
            ]}
            onPress={() => {
              setCategoria(cat);
              setConcepto(""); //limpia el concepto si cambia la categoria
            }}
          >
            <Text
              style={[
                styles.textoCuadricula,
                categoria === cat && styles.textoCuadriculaActivo,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* botones conceptos */}

      <View style={styles.contenedorChips}>
        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Supermercado" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Supermercado");
            setCategoria("Vida");
          }}
        >
          <Text style={styles.chipText}>🛒 Súper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Gatas" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Gatas");
            setCategoria("Vida");
          }}
        >
          <Text style={styles.chipText}>🐱 Gatas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Salidas" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Salidas");
            setCategoria("Entretenimiento");
          }}
        >
          <Text style={styles.chipText}>🍕 Salidas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Escabio" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Escabio");
            setCategoria("Vicios");
          }}
        >
          <Text style={styles.chipText}>🍷 Escabio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Bibi" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Bibi");
            setCategoria("Transporte");
          }}
        >
          <Text style={styles.chipText}>🚗 Bibi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.chip,
            concepto === "Delivery" && styles.chipActivo, // Si está seleccionado, aplica este estilo extra
          ]}
          onPress={() => {
            setConcepto("Delivery");
            setCategoria("Varios/Extras");
          }}
        >
          <Text style={styles.chipText}>🍔 Delivery</Text>
        </TouchableOpacity>
      </View>

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

      <View style={styles.contenedorDividir}>
        <Text style={styles.textoDividir}>¿Dividir gasto con mi pareja?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={dividir ? "#007AFF" : "#f4f3f4"}
          onValueChange={() => setDividir((previousState) => !previousState)}
          value={dividir}
        />
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
