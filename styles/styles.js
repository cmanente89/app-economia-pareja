import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 70, // Subimos de 45/50 a 70 para bajar todo el diseño
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  // Ver Saldo
  subheader: {
    backgroundColor: "#f3f0ff",
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: "#e0d7ff",
    marginHorizontal: 10, // Margen extra para que sea más corto que el resto
  },
  textoSaldo: { fontSize: 13, fontWeight: "800", color: "#7b61ff" },

  titulo: {
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 15,
    textAlign: "center",
    color: "#2d3748",
  },

  // Grid 3x3 Compacto
  gridCategorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  botonCuadricula: {
    width: "31%",
    height: 65, // Un pelín más bajos
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#7b61ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    borderWidth: 1.5,
    borderColor: "#f7fafc",
  },
  botonCuadriculaActivo: {
    backgroundColor: "#7b61ff",
    borderColor: "#5a43d1",
    borderWidth: 2,
  },
  textoCuadricula: {
    fontSize: 10,
    color: "#718096",
    fontWeight: "700",
    marginTop: 3,
  },
  textoCuadriculaActivo: { color: "#fff" },

  // Monto Compacto
  contenedorMonto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#f3f0ff",
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#e0d7ff",
    marginHorizontal: 5, // Un poco de aire a los costados
  },
  moneda: { fontSize: 26, color: "#7b61ff", marginRight: 6, fontWeight: "900" },
  inputMontoGigante: {
    fontSize: 42, // Bajamos a 42 para que no sea tan invasivo
    fontWeight: "900",
    color: "#2d3748",
    minWidth: 100,
    textAlign: "center",
  },

  // Selector Persona
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  botonPersona: {
    padding: 12,
    borderWidth: 2,
    borderColor: "#edf2f7",
    borderRadius: 16,
    width: "48%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  botonActivo: { backgroundColor: "#7b61ff", borderColor: "#5a43d1" },
  textoActivo: { color: "#fff", fontWeight: "800" },
  textoPersona: { color: "#a0aec0", fontWeight: "700" },

  // Switches y Opciones (Centrados y cerca)
  opcionSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 8,
  },
  labelGrande: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4a5568",
    marginRight: 10,
  },

  // Tarjeta (Más compacto)
  botonTarjetaMejorado: {
    backgroundColor: "#f9f8ff",
    padding: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#d6bcfa",
    borderStyle: "dashed",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 10, // Le damos aire lateral
  },
  textoTarjetaMejorado: { color: "#7b61ff", fontWeight: "800", fontSize: 13 },

  // Guardar Gasto
  botonEnviar: {
    backgroundColor: "#7b61ff",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 5, // No toca los bordes
    shadowColor: "#7b61ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
