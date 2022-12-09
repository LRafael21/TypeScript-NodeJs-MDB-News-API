import { Request, Response } from "express"
import { getNews, insertNews, getNewsById, updateNews, deleteNews } from "../services/item";
import { handleHTttp } from "../utils/error.handle"


const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getNewsById(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data)

    } catch (e) {
        handleHTttp(res, 'ERROR_GET_ITEM');
    }

}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getNews();
        res.send(response)

    } catch (e) {
        handleHTttp(res, 'ERROR_GET_ALL_ITEMS');
    }


}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {

        const { id } = params;
        const response = await updateNews(id, body);
        res.send(response)

    } catch (e) {
        handleHTttp(res, 'ERROR_UPDATE_ITEM');
    }

}



const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertNews(body);
        res.send(responseItem)

    } catch (e) {
        handleHTttp(res, 'ERROR_POST_ITEM', e);
    }

}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await deleteNews(id);
        res.send(responseItem)

    } catch (e) {
        handleHTttp(res, 'ERROR_DELETE_ITEM');
    }


}

export { getItem, getItems, postItem, updateItem, deleteItem }