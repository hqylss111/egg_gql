export default {
    Query: {
        async findBookAllData(_root: any, { page, size } ,{ connector }) {
            return connector.book.findAllbookFun(page, size);
        }
    },
    Mutation: {
        async upDataBookIsAmendBookData(_root: any, { data }, { connector }) {
            return connector.book.upDataBookIsAmendBookDataFun(data)
        }
    }
}