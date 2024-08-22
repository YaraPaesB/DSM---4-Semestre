const login = (login: string, senha: string) => {
    if (login.length > 100 || senha.length > 100) {
        throw new Error("Ultrapassou o limite de caracteres")
    }

    const originalString = `${login}:${senha}`;
    const base64 = Buffer.from(originalString).toString('base64');
    return base64;
}


const validaCpf = () => {

}

export default {login, validaCpf};