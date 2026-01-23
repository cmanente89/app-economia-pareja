import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  //botones conceptos presetados
  contenedorChips: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
    width: "100%", // Asegura que ocupe todo el ancho
  },
  chip: {
    // Usamos flexBasis en lugar de width para que Flexbox sea más estable
    flexBasis: "45%",
    height: 55, // Altura fija para que no desaparezca al clickear
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // Esto evita que el botón se achique bajo presión
    flexShrink: 0,
    flexGrow: 0,
  },
  chipText: {
    fontSize: 13, // Un pelín más chico para que "Supermercado" no sufra
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },

  chipActivo: {
    backgroundColor: "#007AFF", // El azul que venís usando
    borderColor: "#007AFF",
  },

  //botones categorias
  gridCategorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  botonCuadricula: {
    width: "31%", // Esto hace que entren 3 por fila
    paddingVertical: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e9ecef",
    alignItems: "center",
    marginBottom: 10,
  },
  botonCuadriculaActivo: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  textoCuadricula: {
    fontSize: 12,
    color: "#495057",
    fontWeight: "500",
  },
  textoCuadriculaActivo: {
    color: "#fff",
  },
});
