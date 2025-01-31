type UserAttributes = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    password
}

export interface LoginInterface {
    email: string;
    password: string;
    phone: number;
}

export interface SignUpInterface extends LoginInterface{
    id?: string;
    firstName: string;
    lastName: string;
}

export default UserAttributes