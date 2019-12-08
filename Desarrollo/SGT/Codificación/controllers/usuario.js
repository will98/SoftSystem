exports.home = (req, res, next) => {
    res.render('usuario/principal', {title: "Home del usuario", layout: "mainUsuario"});
}