import { addPost } from "@/lib/actions";

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
        </div>
    )
}