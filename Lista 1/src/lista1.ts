import CPF = require('cpf');

const login = (login: string, senha: string) => {
    if (login.length > 100 || senha.length > 100) {
        throw new Error("Ultrapassou o limite de caracteres")
    }

    const originalString = `${login}:${senha}`;
    const base64 = Buffer.from(originalString).toString('base64');
    return base64;
}


const validaCpf = (id: number, nome: string, cpf: string, endereco: string) => {
    if (!id || (!nome || nome.length > 150) || !cpf || (!endereco || endereco.length > 200))
        throw new Error("Dados invalidos, tente novamente.")
    else
        return CPF.isValid(cpf);
}

export default {login, validaCpf};


