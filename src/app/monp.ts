export class Monp {
    constructor(private _id:string, private  _libb: string,private _imge:any,private  _prix:number,private _remise:boolean,private _datf:Date,private _taille:string)  {
    }
    public get id(): string {
    return this._id;
    }
    public set id(value: string) {
    this._id = value;
    }
    public get libb(): string {
        return this._libb;
        }
        public set libb(value: string) {
        this._libb = value;
        }
        public get imge(): any{
            return this._imge;
            }
            public set imge(value: any) {
            this._imge = value;
            }
            public get prix(): number {
                return this._prix;
                }
                public set prix(value: number) {
                this._prix = value;
                }
                public get remise(): boolean {
                    return this._remise;
                    }
                    public set remise(value: boolean) {
                    this._remise = value;
                    }
                    public get datf(): Date {
                        return this._datf;
                        }
                        public set datf(value: Date) {
                        this._datf = value;

                        }
                    
                    
                   
    public get taille(): string {
    return this._taille;
    }
    public set taille(value: string) {
    this._taille = value;
    }
    }

