import React from "react";
import { Aside } from "../../Componentes/Aside";
import { FaPlusCircle, FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Tabla= () => {
  useEffect(() => {
    document.title = "Proyectos";
  }, []);

  /* Modals */
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);

  return (
    <>
      <div classname="flex ">
        <Aside />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full relative overflow-x-auto sm:rounded-lg pb-8">
              <div className="flex justify-between pt-24">
                <div></div>
                <h1 className=" text-center text-3xl text-black">PROYECTOS</h1>
                <div className="">
                  <div className="flex items-center md:justify-end px-5 m-2">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button
                        className="btn btn-agregar rounded-full"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        <span className="text-col4 text-green-600 text-4xl">
                          <FaPlusCircle />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Empieza el modal */}
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className=" text-black flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="title text-black">Agregar Proyecto</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div>
                            <div className="-mx-3 flex flex-wrap">
                              <div className="w-full px-3 sm:w-1/2">
                                {/*Nombre proyecto */}
                                <div className="mb-5">
                                  <label
                                    htmlFor="nproyecto"
                                    className="mb-3 block text-base font-medium text-[#263562]"
                                  >
                                    Nombre proyecto
                                  </label>
                                  <input
                                    type="text"
                                    name="nombre_proyecto"
                                    id="nombre_proyecto"
                                    placeholder="Nombre proyecto"
                                    className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              {/*N° expediente */}
                              <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                  <label
                                    htmlFor="expediente"
                                    className="mb-3 block text-base font-medium text-[#263562]"
                                  >
                                    N° Expediente
                                  </label>
                                  <input
                                    type="text"
                                    name="expediente"
                                    id="expediente"
                                    placeholder="N° Expediente"
                                    className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*Descripción */}
                            <div className="-mx-3 flex flex-wrap">
                              <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                  <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#263562]"
                                  >
                                    Descripción
                                  </label>
                                  <input
                                    type="text"
                                    name="descripcion"
                                    id="descripcion"
                                    placeholder="Descripción"
                                    className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Cancelar
                          </button>
                          <button
                            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Registrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
              {/*Termina el modal*/}
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
                          Nombre de proyecto
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Expediente
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Descripción
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
                            <div className="text-base font-semibold text-black"></div>
                            <div className="font-normal text-gray-500"></div>
                          </div>
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>

                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-8 text-center flex justify-evenly content-center">
                          <button className="btn btn-ver">
                            <span className="text-blue-500 text-2xl">
                              <FaRegEye />
                            </span>
                          </button>

                          <button
                            className="btn btn-editar "
                            onClick={() => setShowModal1(true)}
                          >
                            <span className="text-yellow-500 text-2xl">
                              <FaRegEdit />
                            </span>
                          </button>
                          {/* Empieza el modal */}
                          {showModal1 ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                      <h3 className="title">Editar Proyecto</h3>
                                      <button
                                        className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal1(false)}
                                      >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          ×
                                        </span>
                                      </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                      <div>
                                        <div className="-mx-3 flex flex-wrap">
                                          <div className="w-full px-3 sm:w-1/2">
                                            {/*Nombre proyecto */}
                                            <div className="mb-5">
                                              <label
                                                htmlFor="nproyecto"
                                                className="mb-3 block text-base font-medium text-[#263562]"
                                              >
                                                Nombre proyecto
                                              </label>
                                              <input
                                                type="text"
                                                name="nombre_proyecto"
                                                id="nombre_proyecto"
                                                placeholder="Nombre proyecto"
                                                className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                              />
                                            </div>
                                          </div>
                                          {/*N° expediente */}
                                          <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                              <label
                                                htmlFor="expediente"
                                                className="mb-3 block text-base font-medium text-[#263562]"
                                              >
                                                N° Expediente
                                              </label>
                                              <input
                                                type="text"
                                                name="expediente"
                                                id="expediente"
                                                placeholder="N° Expediente"
                                                className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        {/*Descripción */}
                                        <div className="-mx-3 flex flex-wrap">
                                          <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                              <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#263562]"
                                              >
                                                Descripción
                                              </label>
                                              <input
                                                type="text"
                                                name="descripcion"
                                                id="descripcion"
                                                placeholder="Descripción"
                                                className="w-full rounded-xl border border-[#E2231A] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#263562] focus:shadow-md"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                      <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal1(false)}
                                      >
                                        Close
                                      </button>
                                      <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal1(false)}
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                          {/*Termina el modal*/}
                          <button className="btn btn-eliminar ">
                            <span className="text-red-500 text-xl">
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
