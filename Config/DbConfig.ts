import {MongoClient} from "mongodb"

const URL:string= "mongodb://127.0.0.1:27017"

export const Client = new MongoClient(URL)

const mainConection = async ()=>{
    try {
        await Client.connect()

        return "database is now connected 🚀🚀🚀"
    } catch (error) {
        console.log(error)
    }
}

mainConection()
.then((res)=>{
    console.log(res)
})

.catch(()=>{
    console.error()
})
.finally(()=>{
    Client.close()
})

export const db = Client.db("BookClassDb").collection("Books")