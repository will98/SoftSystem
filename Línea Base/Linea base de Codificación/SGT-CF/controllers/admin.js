exports.homeadmin = (req, res, next) => {

    const query = req.query;
    console.log(query);
    
    
    if(query.usuario == "admin" && query.clave=="admin")
        res.render('Admin/homeadmin', {title: "Home del Admin", layout: "main2"});
    else
        res.render('Admin/loginadmin', {title: "Home del Admin",msj:"Usuario o clave invalida", layout: "main2"});

}

exports.tesis = (req, res, next) => { 
    res.render('Admin/Tesis', {title: "Tesis", layout: "main2"});
}

exports.loginadmin = (req, res, next) => { 

    res.render('Admin/loginadmin', {title: "login Admin", layout: "main2"});
}