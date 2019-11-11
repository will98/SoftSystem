const Documento = require('../models/Documento')
const AppError = require("../helpers/AppError")

console.log('buscar1');

exports.buscar = async (req, res, next) => {
    console.log('buscar2');
    
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
            documentos,
            titulo
        })
    } catch (error) {
        next(new AppError(error))
    }

};


exports.asesor = async (req, res, next) => {
    console.log('buscar3');
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

        if (query.asesor && query.asesor != '') {
            filter.asesores = {
                $elemMatch: {
                    $regex: new RegExp(`${query.asesor}+?`), 
                    $options: 'i'
                }
            }
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
}


exports.comunidad_coleccion = async (req, res, next) => {
    console.log('buscar4');
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
    console.log('buscar5');
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

        if (query.grado && query.grado != '') {
            filter.grado = query.grado
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
}


exports.palabra_clave = async (req, res, next) => {
    console.log('buscar6');
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

        if (query.clave && query.clave != '') {
            filter.palabras_clave = {
                $elemMatch: {
                    $regex: new RegExp(`${query.clave}+?`), 
                    $options: 'i'
                }
            }
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
}


exports.buqueda_avanzada = async (req, res, next) => {
    console.log('buscar7');
    try {
        throw new Error("No soportado")
    } catch (error) {
        next(new AppError(error))
    }
}


exports.mas_visitadas = async (req, res, next) => {
    console.log('buscar8');
    console.log('hola visitadas');
    try {
        console.log('hola visitadas');
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

        if (query.min && query.min != '') {
            filter.numero_vistas = { $gte: parseInt(query.min)}
        }

        if (query.max && query.max != '') {
            filter.numero_vistas = { $lte: parseInt(query.max)}
        }

        const count = await Documento.countDocuments(filter)
        const pages = Math.ceil(count / limit)
        const skip = limit * (page - 1)
        
        const documentos = await Documento.find(filter).skip(skip).limit(limit).sort({ "numero_vistas": -1, "fecha": -1 })

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
}


exports.rango_anios = async (req, res, next) => {
    console.log('buscar9');
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

        if (query.min && query.min != '') {
            filter.fecha = { $gte: parseInt(query.min)}
        }

        if (query.max && query.max != '') {
            filter.fecha = { $lte: parseInt(query.max)}
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
}