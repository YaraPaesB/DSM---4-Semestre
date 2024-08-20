export class ErrorApi {
    private httpStatus: number;
    private message: string;

    constructor(httpStatus: number, message: string) {
        this.httpStatus = httpStatus;
        this.message = message;
    }
    
    public get getHttpStatus() : number {
        return this.httpStatus;
    }
    
    public get getMessage() : string {
        return this.message;
    }
    
}