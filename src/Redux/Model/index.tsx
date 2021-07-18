export interface Props{
    [key:string]:any
}
export interface State{
    [key:string]:any
}
export class InitialAuthStateModel {
    [key: string]: any;
    public token!:string;
    public isAuthenticated!: boolean;
    public isExpired!: boolean;
}
