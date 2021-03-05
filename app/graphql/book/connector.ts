import { Context } from 'egg';
export default class HelloConnector {
    loader: any;
    ctx: Context;
    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    async findAllbookFun() {
        return []
    }

}

