import { News } from "../interfaces/news.interface";
import ItemModel from "../models/item";

const insertNews = async (item: News) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;

};

const getNews = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem;

};

const getNewsById = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem;

};

const updateNews = async (id: string, data: News) => {

    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        {
            new: true,
        });
    return responseItem;

};

 const deleteNews = async (id: string) => {

    const responseItem = await ItemModel.remove({ _id: id })
    return responseItem;

 };

export { insertNews, getNews, getNewsById ,updateNews,deleteNews};
