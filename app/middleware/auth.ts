import { Context, Application } from 'egg';

const isAutoFun = (data) => {
    const whitelist = ['login', 'register', 'sendSms', 'githubURL', "hello"];
    return whitelist.includes(data);
}

export default function AuthMiddleware(_options: any, _app: Application) {
    return async (ctx: Context, next: any) => {
        if (ctx.app.config.graphql.graphiql) {
            const bodyData = ctx.request.body;
            //不需要验证的接口
            const Au_token = ctx.request.header['Au_token'];
            //有接口名字
            const operationName = bodyData.operationName
            if (operationName !== null) {
                //如果存在不需要验证token
                if(isAutoFun(operationName)){
                    return await next()
                }else{
                    return Au_token ? await next() : null
                }
            } else {
                let str = bodyData.query.split('{')[1].split("(")[0].trim();
                if(!isAutoFun(str)){
                    return await next(111111);
                }else{
                    return Au_token ? await next() : null
                }
            }
        }else{
            return await next()
        }
    }
}