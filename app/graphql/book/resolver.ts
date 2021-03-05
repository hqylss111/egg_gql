export default {
    Query: {
        async findBookAllData(_root: any, { connector }) {
            return connector.book.findAllbookFun();
        }
    }
}