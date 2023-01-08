import { useContext, useState } from "react";
import {
  traerTareas,
  eliminar,
  crearTareas,
  traerTarea,
  editarTarea,
  estadoBoton,
} from "../api/tareas.api.js";
import { TareaContex } from "./TareaContex";

export const useTarea = () => {
  const contexto = useContext(TareaContex);
  if (!contexto) {
    throw new Error("No hay contexto");
  }
  return contexto;
};

export const TareaContexProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  async function cargandoTarea() {
    const respuesta = await traerTareas();
    setTareas(respuesta.data);
  }
  const funcionDeEliminar = async (_id) => {
    try {
      const respuesta = await eliminar(_id);
      setTareas(tareas.filter((tarea) => tarea._id !== _id));
    } catch (error) {
      console.error(error);
    }
  };

  const creardorTarea = async (tarea) => {
    try {
      const respuesta = await crearTareas(tarea);
      console.log(respuesta);
    } catch (err) {
      console.log(err);
    }
  };

  const getTarea = async (_id) => {
    try {
      const responderTarea = await traerTarea(_id);
      return responderTarea.data;
    } catch (error) {
      console.error(error);
    }
  };

  const actualizarTarea = async (_id, nuevaTarea) => {
    try {
      const respuestaEditar = await editarTarea(_id, nuevaTarea);
      console.log(respuestaEditar);
    } catch (error) {
      console.error(error);
    }
  };

  const botonDeEstado = async (_id) => {
    try {
      const tareaEstado = tareas.find((tarea) => tarea._id === _id);
      await estadoBoton(_id, tareaEstado.done === false ? true : false);
      setTareas(
        tareas.map((tarea) =>
          tarea._id === _id ? { ...tarea, done: !tarea.done } : tarea
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TareaContex.Provider
      value={{
        tareas,
        cargandoTarea,
        funcionDeEliminar,
        creardorTarea,
        getTarea,
        actualizarTarea,
        botonDeEstado,
      }}
    >
      {children}
    </TareaContex.Provider>
  );
};
