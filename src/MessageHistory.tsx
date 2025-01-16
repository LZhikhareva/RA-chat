import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";

type TMessage = {
    id: string
    from: { name: string }
    type: string
    time: string
    text?: string
}

export const MessageHistory = ({ list }: any) => {

    if (list.length == 0) {
        return null;
    }
    return (
        <ul>
            {list.map((item: TMessage) => {
                if (item.type === 'message') {
                    return (
                        <Message from={item.from} message={item} />
                    )
                } else if (item.type === 'response') {
                    return (
                        <Response from={item.from} message={item} />
                    )
                } else if (item.type === 'typing') {
                    return (
                        <Typing from={item.from} message={item} />
                    )
                }
            })
            }
        </ul>
    )
}