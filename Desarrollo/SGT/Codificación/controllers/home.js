exports.home = (req, res, next) => {
    res.render('home/home', {title: "Inicio", layout: "main"});
}
