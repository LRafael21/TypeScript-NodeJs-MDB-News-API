import { News } from "../interfaces/news.interface";
import NewsModel from "../models/news_Schema";

const insertNews = async (item: News) => {
    const responseInsert = await NewsModel.create(item);
    return responseInsert;

};

const getNews = async () => {
    const responseItem = await NewsModel.find({})
    return responseItem;

};

const getNewsById = async (id: string) => {
    const responseItem = await NewsModel.findOne({ _id: id })
    return responseItem;

};

const updateNews = async (id: string, data: News) => {

    const responseItem = await NewsModel.findOneAndUpdate(
        { _id: id },
        data,
        {
            new: true,
        });
    return responseItem;

};

 const deleteNews = async (id: string) => {

    const responseItem = await NewsModel.deleteOne({ _id: id })
    return responseItem;

 };

export { insertNews, getNews, getNewsById ,updateNews,deleteNews};
