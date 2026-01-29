import { useState } from "react"; // Quitamos useEffect por ahora para simplificar
import {
  Alert,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles/styles.js";

const CONCEPTOS_FAVORITOS = [
  {
    id: "1",
    icono: "🛒",
    nombre: "Súper",
    concepto: "Supermercado",
    categoria: "Vida",
  },
  {
    id: "2",
    icono: "🏠",
    nombre: "Casa",
    concepto: "Gastos Casa",
    categoria: "Impuestos/Servicios",
  },
  {
    id: "3",
    icono: "🚕",
    nombre: "Taxi",
    concepto: "Taxi/Coche",
    categoria: "Transporte",
  },
  {
    id: "4",
    icono: "🍕",
    nombre: "Salidas",
    concepto: "Salida/Cena",
    categoria: "Entretenimiento",
  },
  {
    id: "5",
    icono: "🐱",
    nombre: "Gatas",
    concepto: "Gatas",
    categoria: "Vida",
  },
  {
    id: "6",
    icono: "🍺",
    nombre: "Escabio",
    concepto: "Escabio",
    categoria: "Vicios",
  },
  {
    id: "7",
    icono: "🍾",
    nombre: "Almacén",
    concepto: "Almacen",
    categoria: "Vida",
  },
  {
    id: "8",
    icono: "🛵",
    nombre: "Delivery",
    concepto: "Delivery",
    categoria: "Extras",
  },
  {
    id: "9",
    icono: "➕",
    nombre: "Otro",
    concepto: "",
    categoria: "Varios/Extras",
  },
];

const SCRIPT_URL = process.env.EXPO_PUBLIC_SCRIPT_URL;

export default function App() {
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [pagador, setPagador] = useState("Carlos");
  const [cuotas, setCuotas] = useState("1");
  const [proximoMes, setProximoMes] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [categoria, setCategoria] = useState("Vida");
  const [dividir, setDividir] = useState(true);
  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const [modalNuevoVisible, setModalNuevoVisible] = useState(false);

  const enviarGasto = async () => {
    if (!concepto || !monto) {
      Alert.alert("Error", "Por favor completa concepto y monto.");
      return;
    }
    setCargando(true);
    try {
      // Simulación de envío para probar que arranca
      console.log("Enviando...");
      setTimeout(() => {
        Alert.alert("¡Éxito!", "App funcionando.");
        setCargando(false);
      }, 1000);
    } catch (error) {
      Alert.alert("Error");
      setCargando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.subheader}
        onPress={() => setMostrarSaldo(!mostrarSaldo)}
      >
        <Text style={styles.textoSaldo}>
          {mostrarSaldo ? "💰 Saldo: $45.200" : "👁️ Ver Saldo"}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        ¿En qué gastamos?
      </Text>

      <View style={styles.gridCategorias}>
        {CONCEPTOS_FAVORITOS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.botonCuadricula,
              concepto === item.concepto && styles.botonCuadriculaActivo,
            ]}
            onPress={() => {
              if (item.id === "9") {
                setModalNuevoVisible(true); // El botón "+" abrirá el modal luego
              } else {
                setConcepto(item.concepto);
                setCategoria(item.categoria);
              }
            }}
          >
            <Text style={{ fontSize: 22 }}>{item.icono}</Text>
            <Text
              style={[
                styles.textoCuadricula,
                concepto === item.concepto && styles.textoCuadriculaActivo,
              ]}
            >
              {item.nombre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contenedorMonto}>
        <Text style={styles.moneda}>$</Text>
        <TextInput
          style={styles.inputMontoGigante}
          value={monto}
          onChangeText={setMonto}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#ccc"
        />
      </View>

      {/* Selector de Pagador */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.botonPersona,
            pagador === "Carlos" && styles.botonActivo,
          ]}
          onPress={() => setPagador("Carlos")}
        >
          <Text
            style={
              pagador === "Carlos" ? styles.textoActivo : styles.textoPersona
            }
          >
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
          <Text
            style={
              pagador === "Milagros" ? styles.textoActivo : styles.textoPersona
            }
          >
            Milagros
          </Text>
        </TouchableOpacity>
      </View>

      {/* Switches en una sola línea para ahorrar espacio */}
      <View style={styles.rowOpciones}>
        <View style={styles.opcionSwitch}>
          <Text style={styles.labelGrande}>¿Se divide? 👫</Text>
          <Switch
            value={dividir}
            onValueChange={setDividir}
            // Violeta cuando está activo, gris cuando no
            trackColor={{ false: "#edf2f7", true: "#7b61ff" }}
            thumbColor={"#fff"}
            ios_backgroundColor="#edf2f7"
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
        </View>

        <TouchableOpacity
          style={styles.botonTarjetaMejorado}
          onPress={() => setModalTarjetaVisible(true)}
        >
          <Text style={styles.textoTarjetaMejorado}>💳 ¿Cuotas/Tarjetas?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.botonEnviar,
          cargando && { backgroundColor: "#ccc" }, // Si está cargando se pone gris
        ]}
        onPress={enviarGasto}
        disabled={cargando}
      >
        <Text style={styles.textoBoton}>
          {cargando ? "ENVIANDO..." : "GUARDAR GASTO"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
