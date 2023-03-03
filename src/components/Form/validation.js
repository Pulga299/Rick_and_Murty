const validation = (userData) => {
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email es inválido";
    }
    if(!userData.username){
        errors.username = "Este campo no puede estare vacío";
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede tener más de 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;