import { ReactElement, useEffect, useState } from "react"

import Message from '../messages/Message';

import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase/index';

function timestampToDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString(undefined);
}

function Message(props: Message): ReactElement {
    return <div>
    [{timestampToDate(props.timestamp)}] {props.author}: {props.content}
    </div>
}

export default function Messages(): ReactElement {
    const [messages, setMessages] = useState([] as Message[]);

    useEffect(() => {

        (async () => {const querySnapshot = await getDocs(collection(db, "my room"));
        setMessages(querySnapshot.docs.map(doc => doc.data() as Message));
        })();


    }, []);

    return <div>
    {messages.map(message => <Message key={message.messageId} {...message}/>)}
    </div>
}
