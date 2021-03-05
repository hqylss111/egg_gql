import { Context } from 'egg';
export default class HelloConnector {
    loader: any;
    ctx: Context;
    constructor(ctx: Context) {
        this.ctx = ctx;
    }
    async findAllbookFun(page,size) {
        return await this.ctx.service.book.findAllBookData(page,size)
    }

    async upDataBookIsAmendBookDataFun(data) {
        return await this.ctx.service.book.updataBookISamendBookServerFun(data)
    }
}



