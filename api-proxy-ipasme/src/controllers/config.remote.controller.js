import { Router } from "express";
const router = Router();
import apiAdapter from './apiAdapter';


const BASE_URL = 'http://localhost:8000';
const api = apiAdapter(BASE_URL);


export const crearIpasme = (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
};

export const obtenerIpasme = (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
};

export const obtenerIpasmeId = (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
};

export const actualizarIpasmeId = (req, res) => {
    api.put(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
};

export const borrarIpasmeId = (req, res) => {
    api.delete(req.path).then(resp => {
        res.send(resp.data)
    })
};