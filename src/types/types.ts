export interface Hero{
    hero_id:number,
    hero:string
}

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;


    constructor(userId: number,id: number,title: string,body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

}
