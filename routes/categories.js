import { Router } from "express"
import read from "../controllers/categories/read.js"

const categories_router = Router()

//chapter_router.post()
categories_router.get('/',read)
//chapter_router.put()
//chapter_router.delete()

export default categories_router