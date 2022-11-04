import { Request, Response } from "express";
import { Sql } from "postgres";
import { connect } from "../database";
import { Post } from "../interface/Post";

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn`SELECT * FROM posts`
    return res.json(posts[0]);
}

export async function createPosts(req: Request, res: Response) {
    const newPost: Post = req.body;
    const sql = await connect();
    await sql`INSERT INTO posts ${ sql(newPost) }`;
    return res.json({
        message: 'Post were created',
        body: newPost
    });
}

export async function getPostsID(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const sql = await connect();
    const posts = await sql`SELECT * FROM posts WHERE id = ${id}`;
    return res.json(posts);
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const sql = await connect();
    const posts = await sql`DELETE FROM posts WHERE id = ${id}`;
    return res.json({
        message: "Deleted",
        body: posts
    });
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const sql = await connect();
    const posts = await sql`UPDATE posts SET ${sql(updatePost)} WHERE id = ${id}`;
    return res.json({
        message: "Updated",
        body: posts
    });
}