const Contador = require('../models/Contador');

exports.getCounterByModel = async (model) => {
    let contador = await Contador.findOne({ _id: model });
    if (!contador) {
        contador = new Contador({
            seq: 0,
            _id: model
        });
    }
    contador.seq = contador.seq + 1;
    return await contador.save();
}