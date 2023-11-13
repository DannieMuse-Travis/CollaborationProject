import {Request,Response} from "express"
import { statusCode } from "../Config/Status"
import { Client, db } from "../Config/DbConfig"
import { BookModel } from "../Model/BookModel"
import {ObjectId} from "mongodb"



export const createBook = async(req: Request, res: Response) =>{
    try {
+
        await Client.connect()
        const {title, author,description,category, numberOfPages, intersting} = req.body

        const book= new BookModel(title, author, description, category,numberOfPages, intersting);

        // console.log(book)
        const data = await db.insertOne(book);

        return res.status(statusCode.CREATED).json({
            message: "book created successfully",
            data
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}
export const readBook = async(req: Request, res: Response) =>{
    try {
        await Client.connect()
       
        const book = await db.find().toArray();

        return res.status(statusCode.CREATED).json({
            message: "book found",
            data: book,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}
export const readBookByID = async(req: Request, res: Response) =>{
    try {
        await Client.connect()
        const {bookID} = req.params
       
        const book = await db.findOne({_id:  new ObjectId(bookID)})

        return res.status(statusCode.CREATED).json({
            message: "book found",
            data: book,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}
export const readBookByCategory = async(req: Request, res: Response) =>{
    try {
        await Client.connect()
        // const {bookID} = req.params
        const {category} = req.body
       
        const book = await db.find({category}).toArray();

        return res.status(statusCode.CREATED).json({
            message: "book found",
            data: book,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}
export const updateBook = async(req: Request, res: Response) =>{
    try {
        await Client.connect()
        const {bookID} = req.params;
        const {title} = req.body;
       
        const book = await db.updateOne({_id: new ObjectId(bookID)}, {$set: {title}})

        return res.status(statusCode.CREATED).json({
            message: "book found",
            data: book,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}
export const deleteBook = async(req: Request, res: Response) =>{
    try {
        await Client.connect()
        const {bookID} = req.params;
       
       await db.deleteOne({_id: new ObjectId(bookID)})

        return res.status(statusCode.CREATED).json({
            message: "book delete",
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error",
        })
    }
}