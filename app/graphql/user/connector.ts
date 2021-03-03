import { Context } from 'egg';
export default class HelloConnector {
    loader: any;
    ctx: Context;
    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    async phoneiSfindUser(data){
        return await this.ctx.service.user.phoneIsFindUser(data)
    }

    async addUser(data) {
        const { ctx } = this;
        const result = await ctx.service.user.addUserService(data)
        return result
    }


    //修改用户信息
    async upDataUserMessage(data){
        const { ctx } = this;
        return await ctx.service.user.updateUserMessageFun(data)
    }
}

