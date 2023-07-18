import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaSpeakerDeck, FaUserAlt, FaCaretDown, FaHome, FaPaste, FaPrescriptionBottleAlt, FaPiggyBank, FaHospitalUser, FaUserAltSlash, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/favicon.png"
import logoComp from "../../assets/img/logo-artificial-blanco.svg"


export const Aside = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(true);

  return (
    <nav className="fixed z-20">
      <div
        className={` bg-Azul h-screen p-5 pt-8 ${
          open ? "w-60" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-14 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <img src={logo} width={25}
            className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            } ${open && "scale-0"}`}
          />
          <img src={logoComp}  width={160}
            className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              !open && "scale-0"
            }`}
          />
        </div>
        <ul className="pt-2">
          {/*Inicio */}
          <Link to="/inicio"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaHome />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Inicio
            </span>
          </li></Link>

          {/*Empleado */}
          <Link to="/empleado"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              < FaUserTie />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Empleados
            </span>
          </li></Link>

          {/*Departamentos */}
          <Link to="/departamento"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPaste />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Departamentos
            </span>
          </li></Link>
          
          {/*Prestaciones */}
          <Link to="/prestaciones"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPrescriptionBottleAlt />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Prestaciones
            </span>
          </li></Link>
          
          {/*Faltas */}
          <li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPiggyBank  />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Faltas
            </span>
            <span>
              <FaCaretDown
                 className={`duration-500 ${!open && "hidden"} ${!submenuOpen && "rotate-180"}`}
                onClick={() => setSubmenuOpen(!submenuOpen)}
              />
            </span>
          </li>
          <ul className={`${submenuOpen && "hidden"}`}>
            {/*Incapacidades */}
            <Link to="/incapacidad">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                Incapacidades
              </li>
            </Link>

            {/*Ausencias*/}
            <Link to="/ausencia">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                Ausencias
              </li>
            </Link>

          </ul>

          {/*Indemnizaciones */}
          <Link to="/indemnizaciones"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaHospitalUser />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Indemnizaciones
            </span>
          </li></Link>

          {/*Usuarios */}
          <Link to="/usuarios"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaUserAlt />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Usuarios
            </span>
          </li></Link>

          {/*Salir*/}
          <a href="/"><li
            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaUserAltSlash />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Salir
            </span>
          </li></a>
        </ul>
      </div>
    </nav>
  );
};
