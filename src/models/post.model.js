import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100

    },
    content: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 800
    },
    date: {
        type : Date, 
        default: Date.now
    },
    writer: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
})

const Post = mongoose.model('posts', postSchema)

export { Post }