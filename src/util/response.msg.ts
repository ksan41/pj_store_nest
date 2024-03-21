export class ResponseMsg {
    status: number;
    message: string;
    body: any

    success() {
        this.status = 200;
        this.message = "OK";
    }

    successWithBody(data: any) {
        this.status = 200;
        this.message = "OK";
        this.body = data;
    }

    failed(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}