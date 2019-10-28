
exports.test = (req, res, next) => {
    res.render('test', {title: "Página de inicio", layout: "main"});
}


exports.home = (req, res, next) => {
    res.render('home/home', {title: "Home", layout: "main"});
}

exports.buscar = (req, res, next) => {
    res.render('home/buscar', {title: "Buscar", layout: "main"});
}
exports.busqueda_avanzada = (req, res, next) => {
    res.render('home/busqueda_avanzada', {title: "Búsqueda Avanzada", layout: "main3"});
}
exports.mas_visitadas = (req, res, next) => {
    res.render('home/mas_visitadas', {title: "Tesis más visitadas", layout: "main"});
}
exports.rango_anios = (req, res, next) => {
    res.render('home/rango_anios', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.comunidades = (req, res, next) => {
    res.render('home/comunidades', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.comunidad = (req, res, next) => {
    res.render('home/comunidad', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.asesor = (req, res, next) => {
    res.render('Buscador/asesor/asesor', {title: "Asesor", layout: "main"});
}
exports.comunidad_coleccion = (req, res, next) => {
    res.render('Buscador/comunidad_coleccion/comunidad_coleccion', {title: "Comunidad & Coleccion", layout: "main"});
}
exports.facultad = (req, res, next) => {
    res.render('Buscador/facultad/facultad', {title: "Facultad", layout: "main"});
}
exports.grado_academico = (req, res, next) => {
    res.render('Buscador/grado_academico/grado_academico', {title: "Grado Académico", layout: "main"});
}
exports.palabra_clave = (req, res, next) => {
    res.render('Buscador/palabra_clave/palabra_clave', {title: "Palabra clave", layout: "main"});
}

