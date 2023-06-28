import { Router } from "express"
import read from "../controllers/mangas/read.js"

const chapter_manga = Router()

//chapter_router.post()
chapter_manga.get('/',read)
//chapter_router.put()
//chapter_router.delete()

export default manga_router