import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614566966730_3094';

  // add your egg config in here
  config.middleware = ['auth','graphql'];


  //配置CSRF
  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  //配置 graphql
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    apolloServerOptions: {
      tracing: true, // 设置为true时，以Apollo跟踪格式收集和公开跟踪数据
      debug: true, // 一个布尔值，如果发生执行错误，它将打印其他调试日志记录
    },
  };

  //配置数据库
  config.sequelize = {
    dialect: 'mysql',  // support: mysql, mariadb, postgres, mssql
    host: '127.0.0.1',
    port: 3306,
    password: "123456",
    username: 'root',
    database: 'test', // /数据库名
  }

  //配置请求头
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  //配置github
  config.github = {
    // 固定的
    login_url: 'https://github.com/login/oauth/authorize',
    // github Client ID
    client_id: 'a2548c0913c5f7300e9a',
    // github Client Secret
    client_secret: '01d25c5144ecca627fcf6f67b2934112f7c19a0d',
    // 此参数表示只获取用户信息
    scope: ['user'],
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
