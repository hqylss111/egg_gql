import { Service } from 'egg';
export default class Test extends Service {
  /**
   * 如果传递了id 就是修改数据 如果没有传递就是新增数据
   */
  public async updataBookISamendBookServerFun(data) {
    const { ctx } = this;
    let resultData = {}
    if (!data.id) {
      const result = await ctx.model.Book.createBook(data);
      resultData = {
        id: result.id,
        bookName: result.bookName,
        bookType: result.bookType,
        bookPrice: result.bookPrice,
        picture: result.picture,
        created_at: result.created_at
      }
    } else {
      const result = await ctx.model.Book.updateBook(data);
      if (result[0] == 1) {
        const res = await ctx.model.Book.findOneData(data.id)
        resultData = {
          id: res.id,
          bookName: res.bookName,
          bookType: res.bookType,
          bookPrice: res.bookPrice,
          picture: res.picture,
          created_at: res.created_at
        }
      }
    }
    return resultData
  }

  public async findAllBookData(page, size) {
    console.log(page,size);
    
    // const offset = (page - 1) * page
    // const result = await this.ctx.model.Book.findAllData(page, offset)
    
  }
}
