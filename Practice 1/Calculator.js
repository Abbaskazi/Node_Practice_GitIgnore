function add(a,b){
    console.log(a+b);
}

function display(name){
    console.log("This is only for checking that The function is working or not by module : "+ name);
}

module.exports = {
    addition : add,
    Msg : display
}