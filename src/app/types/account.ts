export interface Account {
    userLogin: string;
    userPassword: string;
    useremail: string;
}

export interface Product {
    name: string;
    price: string;
    category: string;
    id: string;
    description?: string;
}

export interface Filter {
    name: string;
    category: string;
}


export enum Roles {
    ADMIN = 'ADMIN',
    BUYER = 'BUYER'
}
