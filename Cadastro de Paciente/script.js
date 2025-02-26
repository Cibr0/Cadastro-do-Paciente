// validação de email retorna o regex 
function validarEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarTel(tel){
    const regextel = /^(?:\+?\d{1,2}\s?)?(\(?\d{2}\)?\s?)?(\d{4,5})[\s.-]?\d{4}$/;
    return regextel.test(tel);
}

function validarCpf(cpf){
    const regexcpf = /^(\d{3}\.\d{3}\.\d{3}-\d{2})$/;
    return regexcpf.test(cpf);
}


//segundo comando criar function validar formulario
function validarForm(event){
    event.preventDefault()//evita reload de pagina
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let data = document.getElementById('data').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;

    let valido = true;

    if (nome.length>100){
        document.getElementById('nomeERROR').innerText="muitho texto";
        valido=false;
    }else{
        document.getElementById('nomeERROR').innerText="";
        valido=true;
    }

    if (!validarCpf(cpf)){
        document.getElementById('cpfERROR').innerText="cpf invalido";
        valido=false;
    }else{
        document.getElementById('cpfERROR').innerText="";
        valido=true;
        
    }

    if (!validarTel(tel)){
        document.getElementById('telERROR').innerText="telefone invalido";
        valido=false;
    }else{
        document.getElementById('telERROR').innerText="";
        valido=true;
    }

    if (!validarEmail(email)){
        document.getElementById('emailERROR').innerText="email invalido";
        valido=false;
    }else{
        document.getElementById('emailERROR').innerText="";
        valido=true;
    }

}




//primeiro comando puxar o id do form e verificar quando o buttom que tem o submit for clicado ele vai executar a function validarForm
document.getElementById('formcd').addEventListener('submit', validarForm)