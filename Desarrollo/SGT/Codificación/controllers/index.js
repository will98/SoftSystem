exports.test = (req, res, next) => {
    res.render('test', {title: "Página de inicio", layout: "main"});
}

exports.comunidad_coleccion = (req, res, next) => {
    res.render('Buscador/comunidad_coleccion/comunidad_coleccion', {title: "Comunidad & Coleccion", layout: "main"});
}