export interface BookData {
    bookName: string,
    bookTyoe: string,
    picture: string,
    created_at: Date
}


export interface IBook {
    createBook(data:BookData):BookData
}