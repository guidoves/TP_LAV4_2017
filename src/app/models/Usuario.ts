
export class Usuario {
    id: number;
    user_name: string;
    ppt: number;
    vaa: number;
    ans: number;
    ana: number;
    ttt: number;
    pra: number;

    constructor(id: number,
        user_name: string,
        ppt: number,
        vaa: number,
        ans: number,
        ana: number,
        ttt: number,
        pra: number) {
            this.id = id;
            this.user_name = user_name;
            this.ppt = ppt;
            this.vaa = vaa;
            this.ans = ans;
            this.ana = ana;
            this.ttt = ttt;
            this.pra = pra;
        }
}
