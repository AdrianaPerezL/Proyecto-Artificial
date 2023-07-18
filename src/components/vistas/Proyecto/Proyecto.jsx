import React from "react";
import { Aside } from "../../Componentes/Aside";
import { FaPlusCircle, FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";

function Tabla() {
  return (
    <>
      <div classname="flex ">
        <Aside />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full relative overflow-x-auto sm:rounded-lg pb-8">
              <div className="flex justify-between pt-24">
                <div></div>
                <h1 className=" text-center text-3xl text-black">Proyectos</h1>
                <div className="">
                  <div className="flex items-center md:justify-end px-5 m-2">
                    <a
                      href="/agregar-empleado"
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
                      placeholder="Ingrese nombre de empleado"
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
                              <tr className=" border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                                <th
                                  scope="row"
                                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                >
                                  <div className="pl-3 text-start">
                                    <div className="text-base font-semibold text-black">
                                    </div>
                                    <div className="font-normal text-gray-500">
                                    </div>
                                  </div>
                                </th>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-8 text-center flex justify-evenly content-center">

                                    <button className="btn btn-ver">
                                      <span className="text-azul-ver text-2xl">
                                        <FaRegEye />
                                      </span>
                                    </button>

                                    <button className="btn btn-editar ">
                                      <span className="text-amarillo-editar text-2xl">
                                        <FaRegEdit />
                                      </span>
                                    </button>
                                  <button
                                    className="btn btn-eliminar "
                                  >
                                    <span className="text-rojo-eliminar text-xl">
                                      <FaTrashAlt />
                                    </span>
                                  </button>
                                </td>
                              </tr>
                            ;
                          
                          
                    </tbody>
                  </table>
                </div>
                
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Tabla;
