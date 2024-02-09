import{Router} from "express";
import { createNote, deleteNote, getNotes, getOneNote, updateNote } from "../controllers/task.controller";
const noteRouter = Router()

noteRouter.post('/', createNote)
noteRouter.get('/',getNotes)
noteRouter.get('/:id',getOneNote)
noteRouter.put('/update/:id',updateNote)
noteRouter.delete('/delete/:id', deleteNote)

export default noteRouter
