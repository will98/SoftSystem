exports.home = (req, res, next) => {
    res.render('usuario/principal', {title: "Home del usuario", layout: "mainUsuario"});
}

exports.getEditar = (req, res, next) => {
    res.render('usuario/editarPerfil', {title: "Editar usuario", layout: "mainUsuario"});
}

exports.postEditar = (req, res, next) => {
    res.render('usuario/editarPerfil', {title: "Editar usuario", layout: "mainUsuario"});
}

exports.getTesisFavorita = (req, res, next) => {
    res.render('usuario/tesisFavorita', {title: "Tesis", layout: "mainUsuario"});
}

exports.getTesisRecomendado = (req, res, next) => {
    res.render('usuario/tesisRecomendado', {title: "Tesis", layout: "mainUsuario"});
}

exports.getVisualizarNoticias = (req, res, next) => {
    res.render('usuario/visualizarNoticias', {title: "Noticias", layout: "mainUsuario"});
}