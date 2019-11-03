const Documento = require('../models/Documento')
const TipoDocumento = require('../models/TipoDocumento')

const AppError = require("../helpers/AppError")


exports.buscar = async (req, res, next) => {
    try {
        const query = req.query
        const filter = {
            tipo_documento: 1
        }
        let page = 1, limit = 10

        if (query.page && query.page != '') {
            page = parseInt(query.page)
        }

        if (query.limit && query.limit != '') {
            limit = parseInt(query.limit)
        }

        if (query.titulo && query.titulo != '') {
            filter.titulo = { $regex: new RegExp(`${query.titulo}+?`), $options: 'i' } 
        }

        const count = await Documento.countDocuments(filter)
        const pages = Math.ceil(count / limit)
        const skip = limit * (page - 1)
        const documentos = await Documento.find(filter).skip(skip).limit(limit).sort({ "fecha": -1 })

        res.status(200).send({
            limit,
            count,
            page,
            pages,
            documentos
        })
    } catch (error) {
        next(new AppError(error))
    }
   
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