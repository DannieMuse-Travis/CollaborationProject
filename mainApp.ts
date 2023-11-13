import { Application, Request, Response } from "express";
import { statusCode } from "./Config/Status"
import book from "./Router/BookRouter"

export const mainApp = (app: Application)=>{
    
    app.get("/", (req: Request, res: Response) =>{
        try {
            return res.status(statusCode.OK).json({
                message: "Welcome"
            })
        } catch (error) {
            return res.status(statusCode.BAD_REQUEST).json({
                message: "Error"
            })
        }
    })

    app.use("/api", book)
}