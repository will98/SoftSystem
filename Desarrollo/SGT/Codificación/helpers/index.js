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

exports.getPagination = (page, pages) => {
    
    const pagination = {
        previous_page: page,
        next_page: page
    }
    
    if (page > 1 && page < pages){
        pagination.previous_page = page - 1
        pagination.next_page = page + 1
    }else if(page == 1 && page < pages){
        pagination.previous_page = 1
        pagination.next_page = page + 1   
    }else if(page > 1 && page == pages){
        pagination.previous_page = page - 1
        pagination.next_page = pages   
    }

    return pagination
}