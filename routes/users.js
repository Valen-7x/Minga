import { Router } from "express"
import read from "../controllers/users/read.js"

const user_router = Router()

//chapter_router.post()
user_router.get('/',read)
//chapter_router.put()
//chapter_router.delete()

export default user_router