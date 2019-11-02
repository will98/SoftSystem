const Documento = require('../models/Documento')
const TipoDocumento = require('../models/TipoDocumento')

const AppError = require("../helpers/AppError")


exports.buscar = (req, res) => {
    Documento.find()
        .then(documentos => {
            res.send(documentos);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al recuperar los documentos"
            });
        });
};


exports.asesor = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.comunidad_coleccion = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.facultad = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.grado_academico = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.palabra_clave = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.buqueda_avanzada = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.mas_visitadas = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}

exports.rango_anios = async (req, res, next) => {
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}