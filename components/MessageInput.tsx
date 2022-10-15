import axios from "axios";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react"
import Message from "../messages/Message";
import { API_URL } from "../shared/utils";
import {v4 as uuidv4} from 'uuid';

interface MessageInputProps {
    username: string;
    roomId: string;
}


export default function MessageInput(props: MessageInputProps): ReactElement {
  const [currentMessage, setCurrentMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log('clicked');
      console.log(API_URL);

      const message: Message = {
          messageId: uuidv4(),
          roomId: props.roomId,
          author: props.username,
          timestamp: Date.now(),
          content: currentMessage
      }
      setCurrentMessage('');

      await axios.post(API_URL + "/hello", message);

  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentMessage(e.target.value);
  }


    return <form onSubmit={handleSubmit}>
        <input name="message" onChange={handleChange} value={currentMessage} placeholder="Type a message.." />
        <button>Click me</button>
    </form>
}
