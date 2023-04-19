const dateFormatter = (date) => {
    let day = date.getDate();
    
    let month = date.getMonth();
    
    let year = date.getFullYear();

    let format = day + "-" + month + 1 + "-" + year;

    return format
};


module.exports = { dateFormatter };
