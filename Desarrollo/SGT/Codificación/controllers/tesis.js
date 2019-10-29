const Documento = require('../models/Documento')

// Crear y guardar un nuevo documento
exports.crear = (req, res) => {

    // Crear un nuevo documento
    const documento = new Documento({
        titulo: req.body.titulo, 
        tipo: req.body.tipo,
        resumen: req.body.resumen,
        fecha: req.body.fecha,
        URL_archivo: req.body.URL_archivo,
        grado: req.body.grado,
        cita: req.body.cita,
        URI: req.body.URI,
        descripcion: req.body.descripcion,
        disciplina: req.body.disciplina,
        numero_vistas: req.body.numero_vistas,
        tipo_documento: req.body.tipo_documento
    });

    // Guardar un documento en la base de datos
    documento.save()
    .then(data => {
        res.send(data);//Se envia el documento para mostrar
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error ocurrido mientras se guardaba el documento."
        });
    });
};
