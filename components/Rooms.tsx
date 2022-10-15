import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react"
import { db } from "../firebase";
import Message from "../messages/Message";

import styles from './Rooms.module.css';

export interface Room {
    roomId: string,
    messages: Message[],
}

function Room(props: Room): ReactElement {
    return (
    <Link href={`/room/${props.roomId}`}>
        <a>
        <li>{props.roomId}</li>
        </a>
    </Link>
                )
}


export function Rooms(): ReactElement {
    const [rooms, setRooms] = useState<Room[]>([]);
    const q = query(collection(db, "rooms"));

    useEffect(() => {
        async function getRooms() {
            const querySnapshot = await getDocs(q);
            setRooms(querySnapshot.docs.map(doc => doc.data() as Room));
        }

        getRooms();

        const unsub = onSnapshot(q, doc => {
            setRooms(doc.docs.map(doc => doc.data() as Room))
        });

        return unsub;

    }, [q]);

    return <ul className={styles.list}>
        {rooms.map(room => <Room key={room.roomId} {...room} />)}
    </ul>
}
