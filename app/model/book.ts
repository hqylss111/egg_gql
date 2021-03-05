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
    },{
        
    })

    //新建书籍
    BOOK.createBook = async function (data: BookData) {
        console.log(data, 16);
        const result = await this.create(data)
        return result
    }

    //通过书的id 查询书籍
    BOOK.idFindBook = async function (id: number) {
        const result = await this.findAll({
            where: {
                id
            }
        })
        return result
    }

    //修改书籍 
    BOOK.updateBook = async function (data) {
        const { bookName, bookType, bookPrice, picture, created_at } = data;
        const result = await this.update({ bookName, bookType, bookPrice, picture, created_at }, {
            where: {
                id: 2
            }
        })
        return result;
    }

    //查询全部的数据分页
    BOOK.findAllData = async function (limit: number,offset:number) {
        const result = await this.findAll({
            attributes:['id','bookName','bookType','bookPrice','picture',"created_at"],
            limit,
            offset
        })
        return result
    }


    //查询一条数据
    BOOK.findOneData = async function (id) {
        return await this.findOne({
            where: {
                id
            }
        })
    }

    return BOOK;
}