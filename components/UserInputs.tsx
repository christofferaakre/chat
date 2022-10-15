import { ChangeEvent, ReactElement, useState } from "react"
import MessageInput from "./MessageInput"

interface UserInputsProps {
    roomId: number,
}

export function UserInputs(props: UserInputsProps): ReactElement {
    const [username, setUsername] = useState("");
    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    return <>
      <input value={username} onChange={handleNameChange} placeholder="Pick a nickname.." />
      <MessageInput roomId={props.roomId} username={username}/>
    </>
}
