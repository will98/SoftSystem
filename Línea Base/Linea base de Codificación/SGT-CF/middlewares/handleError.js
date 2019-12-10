exports.handleError = (error, req, res, next) => {
    console.log('Ha ocurrido un error');
    const err = error.error;
    const redirect = (error || {}).redirect;
    if (err) {
      if (err.response && err.response.data) {
        const error = err.response.data.msg;
        if (error) {
          error.split("/n").map((msg) => {
            req.flash('errors', { msg });
            req.flash('time', 2500);
          });
        }
      } else if (err.message || err.error) {
        req.flash('errors', { msg: err.message || err.error });
      }
    } else {
      req.flash('errors', { msg: "Ups! Ha ocurrido un error." });
    }
    console.log(error);
    return res.redirect(redirect);
  }