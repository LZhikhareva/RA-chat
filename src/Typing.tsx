import Dot from './Dot';
import { TMessage } from './MessageHistory';


export const Typing = ({ from, message }: { from: { name: string }, message: TMessage }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="typing">
        <Dot />
      </div>
    </li>
  )
}