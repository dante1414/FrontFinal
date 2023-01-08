import { useTarea } from "../context/TareaProvider";
import { useNavigate } from "react-router-dom";

function TareasCard({ tarea }) {
  const { funcionDeEliminar, botonDeEstado } = useTarea();
  const navegacion = useNavigate();

  const estadoBoton = async () => {
    await botonDeEstado(tarea._id);
  };
  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2>{tarea.titulo}</h2>
        <span>{tarea.done == 1 ? "✍" : "☠"}</span>
      </header>
      <p className="text-xs">{tarea.descripcion}</p>
      <div className="flex gap-x-1">
        <button
          className="bg-red-500 px-2 py-1 text-black"
          onClick={() => funcionDeEliminar(tarea._id)}
        >
          Eliminar
        </button>
        <button
          className="bg-slate-500 px-2 py-1 text-black"
          onClick={() => navegacion(`/editar/${tarea._id}`)}
        >
          Editar
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-black"
          onClick={() => estadoBoton(tarea.done)}
        >
          Estado
        </button>
      </div>
    </div>
  );
}

export default TareasCard;
