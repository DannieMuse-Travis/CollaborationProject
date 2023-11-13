import {ObjectId} from "mongodb"

export  class BookModel{
    public _id:ObjectId
    public title:string
    public author:string
    public description:string
    public numberOfPages:number
    public interesting:boolean
    public category:string

    constructor(
        title:string,
        author:string,
        description:string,
        numberOfPages:number,
        interesting:boolean,
        category:string
    ){
 this._id = new ObjectId()
 this.title=title;
 this.author=author;
 this.description=description;
 this.numberOfPages=numberOfPages;
 this.interesting=interesting;
 this.category=category
    }
}