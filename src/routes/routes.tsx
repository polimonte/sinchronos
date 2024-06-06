//import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";
//import { CircularProgress } from "@mui/material";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Recuperar from "../pages/Recuperar";
import Ponto from "../pages/Ponto";
import Confirmação from "../pages/Confirmação";
import Justificativa from "../pages/Justificar";


export default function PagesRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/recuperar-senha" element={<Recuperar />} />
                <Route path="/ponto" element={<Ponto />} />
                <Route path="/Confirmação" element={<Confirmação />} />
                <Route path="/Justificativa" element={<Justificativa />} />
            </Routes>
        </BrowserRouter>
    );
}