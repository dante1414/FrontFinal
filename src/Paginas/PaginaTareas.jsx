import { useEffect } from "react";
import TareasCard from "../Components/TareasCard.jsx";
import { useTarea } from "../context/TareaProvider";

function PaginaTareas() {
  const { tareas, cargandoTarea } = useTarea();

  useEffect(() => {
    cargandoTarea();
  }, []);

  function contenidoPrincipal() {
    if (tareas.length === 0)
      return (
        <h1 className="text-10xl text-white font-bold text-center my-5">
          No hay tareas, ingrese una por favor
        </h1>
      );

    return tareas.map((tarea) => <TareasCard tarea={tarea} key={tarea._id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center my-5">Tareas</h1>
      <div className="grid grid-cols-3 gap-2">{contenidoPrincipal()}</div>
    </div>
  );
}

export default PaginaTareas;
