

export interface IUser {
    phone: String,
    name: String,
    password: String,
    avatar: String
}

export interface IUsers extends IUser {
    id: number
} 