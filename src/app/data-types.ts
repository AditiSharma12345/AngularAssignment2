export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string;
    password:string;
}

export interface product{
    name:string;
    heading:string;
    subHeading:string;
    stock:string;
    expiry:Date;
    tags:string
    description:string;
    id:number;
    checked?:boolean;
}

export interface productSearch{
    name:string;
    heading:string;
    subHeading:string;
    tags:string
    id:number;
    
}

