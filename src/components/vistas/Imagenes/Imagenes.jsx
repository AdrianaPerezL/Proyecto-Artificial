import { useEffect, useState } from "react";
import { FaPlusCircle, FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Aside } from "../../Componentes/Aside";
import { Link } from "react-router-dom";
import { Paginacion } from "../../Componentes/Paginacion";
import Swal from "sweetalert2";
import axios from "axios";
import { Navbar } from "../../Componentes/NavBar";

export const Imagen = () => {
    useEffect(() => {
      document.title = "Expedientes";
    }, []);

//Paginación
const [dataPage, setDataPage] = useState(4);
const [currentPage, setCurrentPage] = useState(1);
const [tablaData, setTablaData] = useState([]);
const [busqueda, setBusqueda] = useState("");

const sigIndex = currentPage * dataPage;
const primerIndex = sigIndex - dataPage;

//Llamar API
const [datosServidor, setDatosServidor] = useState([]);
const totalData = datosServidor.length;
console.log("Listar datos", datosServidor);

  async function getInfo() {
    const url = "http://127.0.0.1:8000/empleados/empleados"; //AQUI METE LA URL

    let config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    try {
      const resp = await axios.get(url, config);
      setDatosServidor(resp.data);
      setTablaData(resp.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
  getInfo();
  },[]);

 //Busqueda

 const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaData.filter((elemento) => {
      if (
        elemento.nombres
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.id_departamento
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setDatosServidor(resultadosBusqueda);
  }

  //eliminar
  const eliminarEmpleado = async (id) => {
    try{
      const url = `http://127.0.0.1:8000/empleados/empleados/${id}`;
      await axios.delete(url);
      getInfo();
    }catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        "Ocurrió un error al eliminar empleado",
        "error"
      );  
    };
  }
  const FuncionEliminar = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarEmpleado(id);
        Swal.fire("Eliminado", "El expediente ha sido removido", "success");
      }
    });
  };

  return (
    <div className="flex">
      <Aside />
      <div className="ml-24 mb-8  w-full h-full mr-5">
        <div className="flex">
            <section className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-between pt-24">
                <div></div>
                <h1 className=" text-center text-3xl text-black">IMAGENES</h1>
                <div className="">
                  <div className="flex items-center md:justify-end px-5 m-2">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <button className="btn btn-agregar rounded-full">
                        <span className="text-col4 text-4xl">
                          <FaPlusCircle />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-5">
                <div className="flex items-center md:justify-end pb-3 m-2">
                  <label htmlFor="table-search" className="sr-only">
                    Buscar
                  </label>
                  <div className="relative md:content-center">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-black dark:text-black"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block p-2 pl-10 text-sm text-black border border-gray-700 rounded-lg w-80 bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="        Ingrese nombre o id de expediente"
                      value={busqueda}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-black  dark:text-gray-400 ">
                    <thead className="text-xs text-black uppercase text-center bg-col2">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                          DUI
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Departamento
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Cargo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                    <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                              <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                              >
                                <div className="pl-3 text-start">
                                  <div className="text-base font-semibold text-black">
                                    2545242
                                  </div>
                                  <div className="font-normal text-gray-500">
                                    42424
                                  </div>
                                </div>
                              </th>
                              <td className="px-6 py-4">
                                24242
                              </td>
                              <td className="px-6 py-4">4242</td>
                              <td className="px-6 py-4">4242</td>
                              <td className="px-6 py-8 text-center flex justify-evenly content-center">
                                <Link
                                  to={`#`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  <button className="btn btn-ver">
                                    <span className="text-azul-ver text-2xl">
                                      <FaRegEye />
                                    </span>
                                  </button>
                                </Link>
                                <Link
                                   to={`#`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  <button className="btn btn-editar ">
                                    <span className="text-amarillo-editar text-2xl">
                                      <FaRegEdit />
                                    </span>
                                  </button>
                                </Link>
                                <button className="btn btn-eliminar " onClick={()=> FuncionEliminar(2)}>
                                  <span className="text-rojo-eliminar text-xl">
                                    <FaTrashAlt />
                                  </span>
                                </button>
                              </td>
                            </tr>
                      {datosServidor &&
                        datosServidor.map(empl => {
                          return (
                            <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                              <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                              >
                                <div className="pl-3 text-start">
                                  <div className="text-base font-semibold text-black">
                                    {empl.nombres} {empl.apellidos}
                                  </div>
                                  <div className="font-normal text-gray-500">
                                    {empl.correo}
                                  </div>
                                </div>
                              </th>
                              <td className="px-6 py-4">
                                {empl.documento_identidad}
                              </td>
                              <td className="px-6 py-4">{empl.id_departamento}</td>
                              <td className="px-6 py-4">{empl.cargo}</td>
                              <td className="px-6 py-8 text-center flex justify-evenly content-center">
                                <Link
                                  to={`/ver-empleado/${empl.id}`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  <button className="btn btn-ver">
                                    <span className="text-azul-ver text-2xl">
                                      <FaRegEye />
                                    </span>
                                  </button>
                                </Link>
                                <Link
                                   to={`/editar-empleado/${empl.id}`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  <button className="btn btn-editar ">
                                    <span className="text-amarillo-editar text-2xl">
                                      <FaRegEdit />
                                    </span>
                                  </button>
                                </Link>
                                <button className="btn btn-eliminar " onClick={()=> FuncionEliminar(empl.id)}>
                                  <span className="text-rojo-eliminar text-xl">
                                    <FaTrashAlt />
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        }).slice(primerIndex, sigIndex)}
                    </tbody>
                  </table>
                </div>
                <Paginacion dataPage={dataPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalData={totalData}/>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
};
