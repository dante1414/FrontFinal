import { Form, Formik } from "formik";
import { useTarea } from "../context/TareaProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FormularioTareas() {
  const { creardorTarea, getTarea, actualizarTarea } = useTarea();
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });
  const parametro = useParams();
  const navegacion = useNavigate();
  useEffect(() => {
    const cargarTarea = async () => {
      if (parametro._id) {
        const tarea = await getTarea(parametro._id);
        setTarea({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
        });
      }
    };
    cargarTarea();
  }, []);
  return (
    <div>
      <Formik
        initialValues={tarea}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (parametro._id) {
            await actualizarTarea(parametro._id, values);
          } else {
            await creardorTarea(values);
          }

          navegacion("/");
          setTarea({
            titulo: "",
            descripcion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {parametro._id ? "Editar Tarea" : "Nueva Tarea"}
            </h1>

            <label className="block">Titulo</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="titulo"
              placeholder="Ingrese un titulo"
              onChange={handleChange}
              value={values.titulo}
            />

            <label className="block">Descripción</label>
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              name="descripcion"
              placeholder="Ingrese un comentario"
              cols="30"
              rows="3"
              onChange={handleChange}
              value={values.descripcion}
            ></textarea>

            <button
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormularioTareas;
