import { ChangeEvent, ReactElement, useState } from "react"
import MessageInput from "./MessageInput"


export function UserInputs(): ReactElement {
    const [username, setUsername] = useState("");
    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    return <>
      <input value={username} onChange={handleNameChange} placeholder="Pick a nickname.." />
      <MessageInput username={username}/>
    </>
}
