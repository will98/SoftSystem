const Documento = require('../models/Documento')
exports.findAll = (req, res) => {
    Documento.find()
    .then(documentos => {
        res.send(documentos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Se produjo un error al recuperar los documentos"
        });
    });
};