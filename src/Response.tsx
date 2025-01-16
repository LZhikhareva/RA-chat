type TMessage = {
  id: string
  from: { name: string }
  type: string
  time: string
  text?: string
}


export const Response = ({ from, message }: { from: { name: string }, message: TMessage }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  )
}