import React, { useEffect, useState } from "react";
import { Aside } from "../Componentes/Aside";
import { Navbar } from "../Componentes/NavBar";


export const Inicio = () =>{

    return(

        <div className="flex">
            <Aside/>
            <div className="w-full">
                <Navbar/>
            </div>
        </div>
    )
}