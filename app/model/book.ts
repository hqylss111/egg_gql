import { Application } from 'egg'
import { BookData } from '../type/bookType'
module.exports = (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    //总数据列表
    const BOOK: any = app.model.define("book", {
        bookName: STRING, //数据名称
        bookType: STRING, //数据类型
        bookPrice: INTEGER, //价格
        picture: STRING,//图片
        created_at: STRING,//存放日期
    })

    //新建书籍
    BOOK.createBook = async function (data: BookData) {
        const result = await this.create(data)
        return result
    }

    //通过书的id 查询书籍
    BOOK.idFindBook = async function (id:number) {
        const result = await this.findAll({
            where:{
                id
            }
        })
        return result
    }

    //修改书籍 
    BOOK.updateBook = async function (data) {
        const result = await this.update(data,{
            where:{
                id:data.id
            }  
        })
        return result;
    }

    //查询全部的数据分页
    BOOK.findAllData = async function (limit:number) {
        const offset = (limit - 1) * limit
        const result = await this.findAll({
            limit,
            offset
        })
        return result
    }

    return BOOK;
}