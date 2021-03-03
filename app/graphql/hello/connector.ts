import { Context } from 'egg';
export default class HelloConnector {
    loader: any;
    ctx: Context;
    constructor(ctx: Context) {
        this.ctx = ctx;
    }
    async hellos() {
        return []
    }
    
   
    //使用github进行登陆
    public githubURL() {
        const { login_url, client_id, scope } = this.ctx.app.config.github;
        return `${login_url}?client_id=${client_id}&scope=${scope}&state=${Date.now()}`;
      }
}


