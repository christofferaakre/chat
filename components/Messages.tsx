import { ReactElement, useEffect, useState } from "react"

import Message from '../messages/Message';

import {collection, doc, getDocs, onSnapshot, orderBy, Query, query} from 'firebase/firestore';
import {db} from '../firebase/index';

import styles from './Messages.module.css';

function timestampToDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString(undefined);
}

function Message(props: Message): ReactElement {
    return <li>
    [<span className={styles.span}>{timestampToDate(props.timestamp)}</span>] {props.author}: {props.content}
    </li>
}

interface MessagesProps {
    roomId: number;
}

export default function Messages(props: MessagesProps): ReactElement {
    const [messages, setMessages] = useState([] as Message[]);
    let q: Query | undefined;
    if (props.roomId)
        q = query(collection(db, props.roomId.toString()), orderBy("timestamp"));

    useEffect(() => {
        async function getMessages() {
                if (q) {
                const querySnapshot = await getDocs(q);
                setMessages(querySnapshot.docs.map(doc => doc.data() as Message));
                }
        }

        if (q) {
        getMessages();

        const unsub = onSnapshot(q, doc => {
            setMessages(doc.docs.map(doc => doc.data() as Message))
        });

        return unsub;
        }


    }, [q]);

    return <ul className={styles.list}>
    {messages.map(message => <Message key={message.messageId} {...message}/>)}
    </ul>
}
