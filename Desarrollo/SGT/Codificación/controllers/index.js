exports.home = (req, res, next) => {
    res.render('home/home', {title: "Página de Inicio", layout: "main"});
}

exports.buscar = (req, res, next) => {
    res.render('home/buscar', {title: "Buscar", layout: "main"});
}
exports.busqueda_avanzada = (req, res, next) => {
    res.render('buscador/busqueda_avanzada', {title: "Búsqueda Avanzada", layout: "main3"});
}
exports.mas_visitadas = (req, res, next) => {
    res.render('buscador/mas_visitadas', {title: "Tesis más visitadas", layout: "main"});
}
exports.rango_anios = (req, res, next) => {
    res.render('buscador/rango_anios', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.comunidades = (req, res, next) => {
    res.render('buscador/comunidades', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.comunidad = (req, res, next) => {
    res.render('buscador/comunidad', {title: "Búsqueda por rango de años", layout: "main"});
}
exports.asesor = (req, res, next) => {
    res.render('buscador/asesor/asesor', {title: "Asesor", layout: "main"});
}
exports.comunidad_coleccion = (req, res, next) => {
    res.render('buscador/comunidad_coleccion/comunidad_coleccion', {title: "Comunidad & Coleccion", layout: "main"});
}
exports.facultad = (req, res, next) => {
    res.render('buscador/facultad', {title: "Facultad", layout: "main"});
}
exports.grado_academico = (req, res, next) => {
    res.render('buscador/grado_academico', {title: "Grado Académico", layout: "main"});
}
exports.palabra_clave = (req, res, next) => {
    res.render('buscador/palabra_clave/palabra_clave', {title: "Palabra clave", layout: "main"});
}
exports.login = (req, res, next) => {
    res.render('acceso/login', {title: "Puerta de Logeo", layout: "main2"});
}

exports.homeadmin = (req, res, next) => {
    res.render('Admin/homeadmin', {title: "Homeadmin", layout: "main2"});
}
