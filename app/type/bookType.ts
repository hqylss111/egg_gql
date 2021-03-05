export interface BookData {
    bookName: string,
    bookTyoe: string,
    picture: string,
    created_at: Date,
    id:number
}


export interface IBook {
    createBook(data:BookData):BookData
}