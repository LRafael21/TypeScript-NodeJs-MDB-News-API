import { Request, Response } from "express"
import { handleHTttp } from "../utils/error.handle"


const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHTttp(res, 'ERROR_GET_BLOG');
    }

}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHTttp(res, 'ERROR_GET_ALL_BLOG');
    }


}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHTttp(res, 'ERROR_UPDATE_BLOG');
    }

}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body)

    } catch (e) {
        handleHTttp(res, 'ERROR_POST_BLOG');
    }

}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHTttp(res, 'ERROR_DELETE_BLOG');
    }


}

export { getItem, getItems, postItem, updateItem, deleteItem }