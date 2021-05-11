function UserInicials(nome){
    const nomeCompleto = nome.split(' ');
    const iniciais = nomeCompleto.shift().charAt(0) + nomeCompleto.pop().charAt(0);
    
    return iniciais.toUpperCase();
}

export default UserInicials;