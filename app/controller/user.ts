import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async githubLogin() {
        // const { ctx,  app} = this;
        // const { client_id, client_secret } = app.config.github;
        // const code = '7bc7a6146bab32368235';
        // const tokenResult = await ctx.curl('https://github.com/login/oauth/access_token', {
        //     method: 'POST',
        //     contentType: 'json',
        //     data: {
        //         client_id,
        //         client_secret,
        //         code,
        //     },
        //     dataType: 'json',
        //     timeout: 8000,
        // });
        // // const token = 'a047f96df088ef7f49feb4a2b3354a053a07c7b8'
        // console.log(tokenResult,111);
        // const userResult = await ctx.curl(`https://api.github.com/user`, {
        //     dataType: 'json',
        //     timeout: 8000,
        //     headers:{
        //         'Authorization-token':'a047f96df088ef7f49feb4a2b3354a053a07c7b8'
        //     }
        // });
        // console.log(userResult.data);
        // // 如果有错误信息或者状态码不等于200 那我们就不让他继续走下去了
        // if (tokenResult.data.error || tokenResult.status !== 200) {
        //     return await this.ctx.render('transit.html', { uuid: tokenResult.data.error });
        // }

    }
}
