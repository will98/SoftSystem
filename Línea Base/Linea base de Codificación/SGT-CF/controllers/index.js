exports.home = (req, res, next) => {
    res.render('home/home', {title: "Página de Inicio", layout: "main"});
}
console.log('0.- exports.buscar')
exports.buscar = (req, res, next) => {
    res.render('buscador/buscar', {title: "Buscar", layout: "main"});
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
exports.comunidades_coleccion = (req, res, next) => {
    res.render('buscador/comunidades_coleccion', {title: "Comunidades & Colección", layout: "main"});
}
exports.comunidad = (req, res, next) => {
    res.render('buscador/comunidad', {title: "Comunidad", layout: "main"});
}
exports.asesor = (req, res, next) => {
    res.render('buscador/asesor', {title: "Asesor", layout: "main"});
}
exports.facultad = (req, res, next) => {
    res.render('buscador/facultad', {title: "Facultad", layout: "main"});
}
exports.grado_academico = (req, res, next) => {
    res.render('buscador/grado_academico', {title: "Grado Académico", layout: "main"});
}
exports.palabra_clave = (req, res, next) => {
    res.render('buscador/palabra_clave', {title: "Palabra clave", layout: "main"});
}
exports.login = (req, res, next) => {
    res.render('acceso/login', {title: "Puerta de Logeo", layout: "main2"});
}
/** */
exports.homeadmin = (req, res, next) => {
    res.render('Admin/homeadmin', {title: "Homeadmin", layout: "main2"});
}
exports.loginadmin = (req, res, next) => {
    res.render('Admin/loginadmin', {title: "Login Admin", layout: "main2"});
}

exports.tesis = (req, res, next) => {
    res.render('Admin/Tesis', {title: "Tesis", layout: "main2"});
}

exports.comunidadadmin = (req, res, next) => {
    res.render('Admin/Tesis', {title: "Tesis", layout: "main2"});
}