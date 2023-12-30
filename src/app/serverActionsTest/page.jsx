import { addPost, deletePost } from "@/lib/actions";

export default function ServerActionTestPage(){
    return(
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" placeholder="body" name="body"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>
                <button>Create Post</button>
            </form>
            <form action={deletePost}>
                <input type="text" placeholder="postId" name="postId"/>
                <button>Delete Post</button>
            </form>
        </div>
    )
}