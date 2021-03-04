export default {
    Query: {
        async passIsFindUser(_root: any, { phone }, { connector }) {
            return connector.user.phoneiSfindUser(phone)
        }
    },
    Mutation: {
        async addUserFun(_root: any, { data }, { connector }) {
            return connector.user.addUser(data)
        },
        async upDataUser(_root: any, { data }, { connector }) {
            return connector.user.upDataUserMessage(data, connector)
        }
    }
}