export class Model {

  constructor(
    public publishKey: string,
    public subscriptionKey: string,
    public channel: string,
    public filter: string,
    public message: object,
    public timeToken: string
  ) {  }

}
