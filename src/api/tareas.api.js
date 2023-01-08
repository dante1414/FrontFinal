import axios from "axios";

export const crearTareas = async (tarea) =>
  await axios.post("https://backfinal-production-f96c.up.railway.app/api/agregar", tarea);
export const traerTareas = async () =>
  await axios.get(`https://backfinal-production-f96c.up.railway.app/api`);

export const eliminar = async (_id) =>
  await axios.delete(`https://backfinal-production-f96c.up.railway.app/api/${_id}`);

export const traerTarea = async (_id) =>
  await axios.get(`https://backfinal-production-f96c.up.railway.app/api/${_id}`);

export const editarTarea = async (_id, nuevaTarea) =>
  await axios.put(`https://backfinal-production-f96c.up.railway.app/api/${_id}`, nuevaTarea);

export const estadoBoton = async (_id, done) =>
  await axios.put(`https://backfinal-production-f96c.up.railway.app/api/${_id}`, {
    done,
  });
