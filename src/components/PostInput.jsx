import { useState } from "react"

export function PostInput({ handleGetPosts }) {
    const [value, setValue] = useState("")
    return (
            <div>
                <input type="text" value={ value } onChange={ (e) => setValue(e.target.value) } />
                <button onClick={() => {
                    handleGetPosts(value)
                    setValue("")
                    }   
                } >Show Posts</button>
            </div>
        );
}