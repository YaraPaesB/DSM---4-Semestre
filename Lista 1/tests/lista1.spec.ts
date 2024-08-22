import lista1 from "../src/lista1"


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
    it.only("valida numero de caracteres para parametro senha", () => {
        const senha = 'y'.repeat(200);
        expect(() => lista1.login('login', senha)).toThrowErrorMatchingSnapshot();
    })
})