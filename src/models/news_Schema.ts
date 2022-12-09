import { Schema, Types, model, Model } from "mongoose"
import { News } from "../interfaces/news.interface"


const NewsSchema = new Schema<News>(
    {
        autor: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        published_at: {
            type: Date,
            required: true,
        },


    },

    {
        timestamps: true,
        versionKey: false,
    }

);

const NewsModel = model('news', NewsSchema)
export default NewsModel;