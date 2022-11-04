import { Router } from 'express';
import { getPosts, createPosts, getPostsID, deletePost, updatePost } from '../controllers/post.controller';
const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPosts);

router.route('/:postId')
    .get(getPostsID)
    .put(updatePost)
    .delete(deletePost);

export default router;