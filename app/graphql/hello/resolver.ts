export default {
    Query: {
        hellos(_root: any, { }, { connector }) {
            //然后我在 schema里面定义了一个  hellos
            return connector.hello.hellos();  //去connector 去找hellos这个函数
        },
        async githubURL(_root: any, { }, { connector }) {
            return await connector.hello.githubURL();
        },
    },
    Mutation: {
        async addUserFun(_root: any, { data }, { connector }) {
            return connector.hello.addUser(data)
        }
    }
}