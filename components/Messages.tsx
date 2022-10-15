import { ReactElement, useEffect, useState } from "react"

import Message from '../messages/Message';

import {collection, doc, getDocs, onSnapshot, orderBy, query} from 'firebase/firestore';
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


const q = query(collection(db, "my room"), orderBy("timestamp"));

async function getMessages(): Promise<Message[]> {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data() as Message);
}

export default function Messages(): ReactElement {
    const [messages, setMessages] = useState([] as Message[]);

    useEffect(() => {
        (async () => {
        setMessages(await getMessages());
        })();

        const unsub = onSnapshot(q, doc => {
            setMessages(doc.docs.map(doc => doc.data() as Message))
        });


    }, []);

    return <ul className={styles.list}>
    {messages.map(message => <Message key={message.messageId} {...message}/>)}
    </ul>
}
