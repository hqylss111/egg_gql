import { Service } from 'egg';
import { IUser } from '../type/userType'
export default class User extends Service {

    //通过name phone 查询有没有这个用户

    public async findNameIsPhone(name: String, phone: String) {
        const { ctx } = this
        const result = await ctx.model.User.findByLogin(name, phone)
        return result
    }

    //添加用户
    public async addUserService(data: IUser) {
        const { ctx } = this;
        const res = await ctx.model.User.findByLogin(data);
        if (res.length === 0) {
            const result = await ctx.model.User.CreateData(data)
            return {
                id: result.id,
                phone: result.phone,
                name: result.name,
                avatar: result.avatar,
                password: result.password
            }
        }
    }

    // 查找用户 
    public async phoneIsFindUser(phone: String) {
        const { ctx } = this;
        const result = await ctx.model.User.phoneIsFindUserModel(phone)
        return result ? true : false
    }

    //修改用户信息
    public async updateUserMessageFun(data: any) {
        const { ctx } = this;
        const result = await ctx.model.User.updateUser(data)
        return result[0] === 1 ? true : false
    }
}