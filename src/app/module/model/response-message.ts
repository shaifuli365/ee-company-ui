
export class ResponseMessage<T> {

  status: boolean;
  message: string;
  data: T;


  constructor(status: boolean, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
