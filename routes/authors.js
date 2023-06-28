import { Router } from "express"
import read from "../controllers/authors/read.js"

const author_router = Router()

//chapter_router.post()
author.get('/',read)
//chapter_router.put()
//chapter_router.delete()

export default author_router