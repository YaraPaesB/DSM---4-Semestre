import lista1 from "../src/lista1"
import * as CPF from 'cpf';


describe("testes lista 1", () => {
    it("deve calcular o base64", () => {
        const login = 'meulogin';
        const senha = 'minhasenha';
        const base64 = Buffer.from(`${login}:${senha}`).toString('base64');
        const resultadoEsperado = base64;
        let result = lista1.login(login, senha);

        expect(result).toBe(resultadoEsperado);
    })

    it("valida numero de caracteres para parametro login", () => {
        let hasError = false
        try {
            const login = 'y'.repeat(200);
            let result = lista1.login(login, 'senha');
            
        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBe(true);
    })

    it("valida numero de caracteres para parametro senha", () => {
        const senha = 'y'.repeat(200);
        expect(() => lista1.login('login', senha)).toThrowErrorMatchingSnapshot();
    })

    it.only("valida cpf", () => {
        const cpf = CPF.generate();
        expect(() => lista1.validaCpf(1, 'teste', cpf, 'rua teste 123')).toBe(true);
    })

    it.only("valida cpf errado", () => {
        // const cpf = CPF.generate();
        const cpf = "1111111111111111111111"
        expect(() => lista1.validaCpf(1, 'teste', cpf, 'rua teste 123')).toBe(false);
    })

    it("valida numero de caracteres para parametro endereço", () => {
        let hasError = false
        try {
            const cpf = CPF.generate();
            const endereco = 'y'.repeat(200);
            let result = lista1.validaCpf(1, 'teste', cpf, endereco);

        } catch (error) {
            hasError = true;
        }
        expect(hasError).toBe(true);
    })

})
