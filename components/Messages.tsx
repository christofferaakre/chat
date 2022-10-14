import { ReactElement, useEffect, useState } from "react"

import Message from '../messages/Message';

export default function Messages(): ReactElement {
    const [messages, setMessages] = useState([] as Message[]);


    return <div>
    Messages
    </div>
}
