import { collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react"

import {db} from '../firebase';
import Message from "../messages/Message";

interface Room {
    roomId: string,
    messages: Message[],
}

export function CreateRoomForm(): ReactElement {
    const [roomName, setRoomName] = useState("");
    const router = useRouter();


    function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
        setRoomName(e.target.value);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const q = doc(db, "rooms", roomName);
        const room = {
            roomId: roomName,
            messages: []
        };

        await setDoc(q, room);

        router.replace(`/room/${roomName}`);

    }

    return <form onSubmit={handleSubmit}>
    <input placeholder="Room name" value={roomName} onChange={handleChangeName} />
    <button type="submit">Create room</button>
    </form>
}
