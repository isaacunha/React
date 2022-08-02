interface UserLogin {
    id:number;
    nome:string;
    foto?: string|null;
    usuario: string;
    senha: string;
    token?: string|null;

}

export default UserLogin;