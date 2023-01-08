import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>ANOTADOR</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-yellow-500 px-2 py-1">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nuevo" className="bg-teal-400 px-2 py-1">
            Crear una Tarea
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
