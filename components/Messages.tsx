import { ReactElement, useEffect, useState } from "react"

import Message from '../messages/Message';

import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase/index';

import styles from './Messages.module.css';

function timestampToDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString(undefined);
}

function Message(props: Message): ReactElement {
    return <li>
    [{timestampToDate(props.timestamp)}] {props.author}: {props.content}
    </li>
}

export default function Messages(): ReactElement {
    const [messages, setMessages] = useState([] as Message[]);

    useEffect(() => {

        (async () => {const querySnapshot = await getDocs(collection(db, "my room"));
        setMessages(querySnapshot.docs.map(doc => doc.data() as Message));
        })();


    }, []);

    return <ul className={styles.list}>
    {messages.map(message => <Message key={message.messageId} {...message}/>)}
    </ul>
}
