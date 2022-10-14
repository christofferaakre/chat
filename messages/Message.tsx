export default interface Message {
    messageId: string,
    roomId: string
    timestamp: number,
    author: string,
    content: string,
}
