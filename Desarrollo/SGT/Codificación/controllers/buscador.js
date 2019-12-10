const Facultad = require('../models/Facultad')
const Documento = require('../models/Documento')
const AppError = require("../helpers/AppError")

const util = require('../helpers')

console.log('1a.- buscador.buscar')

exports.buscar = async (req, res, next) => {

    console.log('1b.- buscador.buscar')
    try {
        const query = req.query

        console.log(req.query)
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

        const { previous_page, next_page } = util.getPagination(page, pages)
        console.log(documentos);

        res.render('buscador/buscar',
            {
                title: "Búsqueda por título de tesis",
                layout: "main",
                query,
                limit,
                count,
                page,
                pages,
                previous_page,
                next_page,
                documentos
            })

        // res.status(200).send({
        //     limit,
        //     count,
        //     page,
        //     pages,
        //     documentos,
        //     titulo
        // })
    } catch (error) {
        next(new AppError(error))
    }

};


exports.asesor = async (req, res, next) => {

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

        if (query.page && query.page != '') {
            page = parseInt(query.page)
        }

        if (query.limit && query.limit != '') {
            limit = parseInt(query.limit)
        }

        if (query.min && query.min != '' && query.max && query.max != '') {
            filter.fecha = { $gte: parseInt(query.min), $lte: parseInt(query.max) }
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
        const { previous_page, next_page } = util.getPagination(page, pages)

        res.render('buscador/asesor',
            {
                title: "Búsqueda por asesor de tesis",
                layout: "main",
                query,
                limit,
                count,
                page,
                pages,
                query,
                previous_page,
                next_page,
                documentos
            })

    } catch (error) {
        next(new AppError(error))
    }
}


exports.comunidades_coleccion = async (req, res, next) => {
    console.log('comunidades y coleccion');
    try {
        res.render('buscador/comunidades_coleccion', { title: "Comunidades & Colección", layout: "main" });
    } catch (error) {
        next(new AppError(error))
    }
}

exports.comunidad = async (req, res, next) => {
    console.log('comunidad');
    try {
        const query = req.query;
        const stage = []
        
        if (query.comunidad  && query.comunidad != '') {
            stage.push({
                $match: {
                    "tipo.escuela_profesional.facultad.area_academica._id" : parseInt(query.comunidad)
                }
            })
        }

        let limit = 10;
        let page = 1;
    
        if (query.limit && query.limit != 0 && !isNaN(query.limit)) limit = parseInt(query.limit);
        if (query.page && !isNaN(query.page) && query.page != 0) page = parseInt(query.page);

        const skip = (page - 1) * limit;

        const aggregate = (await Documento.aggregate([
            {
                $lookup: {
                    from: "tipos",
                    localField: "tipo",
                    foreignField: "_id",
                    as: "tipo"
                }
            },
            {
                $unwind: "$tipo"
            },
            {
                $lookup: {
                    from: "escuelaprofesionals",
                    localField: "tipo.escuela_profesional",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional"
            },
            {
                $lookup: {
                    from: "facultads",
                    localField: "tipo.escuela_profesional.facultad",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional.facultad"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional.facultad"
            },
            {
                $lookup: {
                    from: "areaacademicas",
                    localField: "tipo.escuela_profesional.facultad.area_academica",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional.facultad.area_academica"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional.facultad.area_academica"
            },
            ...stage,
            {
                $facet: {
                    count: [
                        {
                            $count: "count"
                        }
                    ],
                    documentos: [
                        {
                            $skip: skip
                        },
                        {
                            $limit: limit
                        }
                    ]
                }
            }
        ]))[0]

        const count = aggregate ? aggregate.count.length > 0 ? aggregate.count[0].count : 0 : 0
        const documentos = aggregate ? aggregate.documentos.length > 0 ? aggregate.documentos : [] : []
        const pages = Math.ceil(count / limit)

        const { previous_page, next_page } = util.getPagination(page, pages)
        //e.log(documentos);

        var comunidad_titulo = ''
        
        switch (query.comunidad){
            case '1':
                comunidad_titulo = 'Ingeniería'
                break;
            case '2':
                    comunidad_titulo = 'Ciencias Básicas'
                    break;
            case '3':
                    comunidad_titulo = 'Ciencias de la Salud'
                    break;
            case '4':
                    comunidad_titulo = 'Ciencias Económicas y de la Gestión'
                    break;
            case '5':
                    comunidad_titulo = 'Humanidades Jurídicas y sociales'
                    break;
        }

        res.render('buscador/comunidad', { 
            title: "Comunidad", 
            layout: "main",
            comunidad_titulo,
            limit,
            count,
            page,
            pages,
            query,
            previous_page,
            next_page,
            documentos
         });
    } catch (error) {
        next(new AppError(error))
    }
}


exports.facultad = async (req, res, next) => {
    try {
        const facultades = await Facultad.find()

        const query = req.query;
        const stage = []
        
        if (query.facultad  && query.facultad != '') {
            stage.push({
                $match: {
                    "tipo.escuela_profesional.facultad._id" : parseInt(query.facultad)
                }
            })
        }

        let limit = 10;
        let page = 1;
    
        if (query.limit && query.limit != 0 && !isNaN(query.limit)) limit = parseInt(query.limit);
        if (query.page && !isNaN(query.page) && query.page != 0) page = parseInt(query.page);

        const skip = (page - 1) * limit;

        const aggregate = (await Documento.aggregate([
            {
                $lookup: {
                    from: "tipos",
                    localField: "tipo",
                    foreignField: "_id",
                    as: "tipo"
                }
            },
            {
                $unwind: "$tipo"
            },
            {
                $lookup: {
                    from: "escuelaprofesionals",
                    localField: "tipo.escuela_profesional",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional"
            },
            {
                $lookup: {
                    from: "facultads",
                    localField: "tipo.escuela_profesional.facultad",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional.facultad"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional.facultad"
            },
            ...stage,
            {
                $facet: {
                    count: [
                        {
                            $count: "count"
                        }
                    ],
                    documentos: [
                        {
                            $skip: skip
                        },
                        {
                            $limit: limit
                        }
                    ]
                }
            }
        ]))[0]

        const count = aggregate ? aggregate.count.length > 0 ? aggregate.count[0].count : 0 : 0
        const documentos = aggregate ? aggregate.documentos.length > 0 ? aggregate.documentos : [] : []
        const pages = Math.ceil(count / limit)

        const { previous_page, next_page } = util.getPagination(page, pages)
        
        res.render('buscador/facultad', { 
            title: "Facultad", 
            layout: "main",
            facultades,
            limit,
            count,
            page,
            pages,
            query,
            previous_page,
            next_page,
            documentos
         });
    } catch (error) {
        next(new AppError(error))
    }
}


exports.grado_academico = async (req, res, next) => {

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

        if (query.page && query.page != '') {
            page = parseInt(query.page)
        }

        if (query.limit && query.limit != '') {
            limit = parseInt(query.limit)
        }

        if (query.min && query.min != '' && query.max && query.max != '') {
            filter.fecha = { $gte: parseInt(query.min), $lte: parseInt(query.max) }
        }

        const count = await Documento.countDocuments(filter)
        const pages = Math.ceil(count / limit)
        const skip = limit * (page - 1)

        const documentos = await Documento.find(filter).skip(skip).limit(limit).sort({ "fecha": -1 })

        const { previous_page, next_page } = util.getPagination(page, pages)

        res.render('buscador/grado_academico',
            {
                title: "Búsqueda por grado academico de tesis",
                layout: "main",
                limit,
                count,
                page,
                pages,
                query,
                previous_page,
                next_page,
                documentos
            })
    } catch (error) {
        next(new AppError(error))
    }
}


exports.palabra_clave = async (req, res, next) => {

    try {
        const query = req.query
        const filter = {
            tipo_documento: 1
        }
        let page = 1, limit = 10

        if (query.page && query.page != '') {
            page = parseInt(query.page)
        }

        if (query.min && query.min != '') {
            filter.numero_vistas = { $gte: parseInt(query.min) }
        }

        if (query.max && query.max != '') {
            filter.numero_vistas = { $lte: parseInt(query.max) }
        }

        if (query.limit && query.limit != '') {
            limit = parseInt(query.limit)
        }

        if (query.min && query.min != '' && query.max && query.max != '') {
            filter.fecha = { $gte: parseInt(query.min), $lte: parseInt(query.max) }
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

        const { previous_page, next_page } = util.getPagination(page, pages)

        res.render('buscador/palabra_clave',
            {
                title: "Búsqueda por palabras claves",
                layout: "main",
                query,
                limit,
                count,
                page,
                pages,
                previous_page,
                next_page,
                documentos
            })
    } catch (error) {
        next(new AppError(error))
    }
}


exports.buqueda_avanzada = async (req, res, next) => {
    try {
        res.render('buscador/busqueda_avanzada', {
            title: "Búsqueda Avanzada", 
            layout: "main3",

        });
    } catch (error) {
        next(new AppError(error))
    }
}


exports.mas_visitadas = async (req, res, next) => {

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
            filter.numero_vistas = { $gte: parseInt(query.min) }
        }

        if (query.max && query.max != '') {
            filter.numero_vistas = { $lte: parseInt(query.max) }
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

    try {

        console.log(req.min);

        const query = req.query


        console.log(query.min);
        console.log(req.max);

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

        if (query.min && query.min != '' && query.max && query.max != '') {
            filter.fecha = { $gte: parseInt(query.min), $lte: parseInt(query.max) }
        }

        const count = await Documento.countDocuments(filter)
        const pages = Math.ceil(count / limit)
        const skip = limit * (page - 1)

        const documentos = await Documento.find(filter).skip(skip).limit(limit).sort({ "fecha": -1 })

        const { previous_page, next_page } = util.getPagination(page, pages)
        console.log(documentos);

        res.render('buscador/rango_anios',
            {
                title: "Búsqueda por rango de años",
                layout: "main",
                query,
                limit,
                count,
                page,
                pages,
                previous_page,
                next_page,
                documentos
            })

    } catch (error) {
        next(new AppError(error))
    }
}



exports.comunidadadmin = async (req, res, next) => {
    console.log('comunidad');
    try {
        const query = req.query;
        const stage = []
        
        if (query.comunidad  && query.comunidad != '' && query.comunidad) {
            stage.push({
                $match: {
                    "tipo.escuela_profesional.facultad.area_academica._id" : parseInt(query.comunidad)
                }
            })
        }

        let limit = 10;
        let page = 1;
    
        if (query.limit && query.limit != 0 && !isNaN(query.limit)) limit = parseInt(query.limit);
        if (query.page && !isNaN(query.page) && query.page != 0) page = parseInt(query.page);

        const skip = (page - 1) * limit;

        const aggregate = (await Documento.aggregate([
            {
                $lookup: {
                    from: "tipos",
                    localField: "tipo",
                    foreignField: "_id",
                    as: "tipo"
                }
            },
            {
                $unwind: "$tipo"
            },
            {
                $lookup: {
                    from: "escuelaprofesionals",
                    localField: "tipo.escuela_profesional",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional"
            },
            {
                $lookup: {
                    from: "facultads",
                    localField: "tipo.escuela_profesional.facultad",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional.facultad"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional.facultad"
            },
            {
                $lookup: {
                    from: "areaacademicas",
                    localField: "tipo.escuela_profesional.facultad.area_academica",
                    foreignField: "_id",
                    as: "tipo.escuela_profesional.facultad.area_academica"
                }
            },
            {
                $unwind: "$tipo.escuela_profesional.facultad.area_academica"
            },
            ...stage,
            {
                $facet: {
                    count: [
                        {
                            $count: "count"
                        }
                    ],
                    documentos: [
                        {
                            $skip: skip
                        },
                        {
                            $limit: limit
                        }
                    ]
                }
            }
        ]))[0]

        const count = aggregate ? aggregate.count.length > 0 ? aggregate.count[0].count : 0 : 0
        const documentos = aggregate ? aggregate.documentos.length > 0 ? aggregate.documentos : [] : []
        const pages = Math.ceil(count / limit)

        const { previous_page, next_page } = util.getPagination(page, pages)
        //e.log(documentos);

        var comunidad_titulo = ''
        
        switch (query.comunidad){
            case '1':
                comunidad_titulo = 'Ingeniería'
                break;
            case '2':
                    comunidad_titulo = 'Ciencias Básicas'
                    break;
            case '3':
                    comunidad_titulo = 'Ciencias de la Salud'
                    break;
            case '4':
                    comunidad_titulo = 'Ciencias Económicas y de la Gestión'
                    break;
            case '5':
                    comunidad_titulo = 'Humanidades Jurídicas y sociales'
                    break;
        }

        res.render('buscador/comunidad', { 
            title: "Comunidad", 
            layout: "main",
            comunidad_titulo,
            limit,
            count,
            page,
            pages,
            query,
            previous_page,
            next_page,
            documentos
         });
    } catch (error) {
        next(new AppError(error))
    }
}