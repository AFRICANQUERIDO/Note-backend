import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid'
import { Notes } from "../Interfaces/note";
import { sqlConfig } from '../config/sql.config';

const users: Notes[] = []


export const createNote = async(req: Request, res: Response)=>{
    try {
        const id = v4()

        const {Title,Content, createAt}:Notes = req.body
        
        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .input("Title", mssql.VarChar,  Title)
        .input("Content", mssql.VarChar, Content)
        .input("createAt", mssql.VarChar, createAt)
        .execute('createNote')).rowsAffected

        console.log(result);
        

        return res.json({
            message: "Note created successfully",
        })

    } catch (error) {
        return res.json({error: error})
    }
}

export const getNotes =  async(req: Request, res:Response)=>{
    try {
        // return res.json({
        //     users: users
        // })
        const pool = await mssql.connect(sqlConfig);
        let allnotes = (await pool.request().execute('getAllUsers')).recordset

        return res.status(200).json({
            users: allnotes
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOneNote = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        // const singleUser = users.filter(user=> user.user_id == id)

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request().input("note_id", id).execute('getOneNote')).recordset

        return res.json({
            user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateNote = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {Title,Content, createAt}:Notes = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", id)
        .input("Title", mssql.VarChar, Title)
        .input("Content", mssql.VarChar, Content)
        .input("createAt", mssql.VarChar, createAt)
        .execute('updateNote')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "Note updated successfully"
        })

        // const updatedUser = {user_id:id, name, email, phone_number, role, password, profile_image, location}

        // const user_index = users.findIndex(user=> user.user_id == id)

        // if(user_index < 0){
        //     return res.json({
        //         message:"User not found"
        //     })
        // }else{
        //     users[user_index] = updatedUser
        //     return res.json({
        //         message: "User updated successfully", 
        //         updatedUser
        //     })
        // }
    } catch (error) {
        return res.json({error})
    }
}

export const deleteNote = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .execute('deleteNote')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "Note not found"
            })
        }else{
            return res.status(200).json({
                message: "Note deleted successfully"
            })
        }

        
        // let user_index = users.findIndex(user=> user.user_id == id)

        // if(user_index < 0){
        //     return res.json({
        //         message: 'User not found'
        //     })
        // }else{
        //     users.splice(user_index, 1)
        //     return res.json({
        //         message: "User deleted successfully"
        //     })
        // }
    } catch (error) {
        return res.json({error})
    }
}