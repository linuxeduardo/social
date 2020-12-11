import React from 'react';
import Message from './Message';
import UserContext from '../UserContext';

const Messages = () => {
  const { messageData, data } = React.useContext(UserContext);
  return (
    <div className='messages'>
      {messageData &&
        messageData.map(d => (
          <Message
            key={d._id}
            content={d.content}
            username={d.name.name}
            messageId={d._id}
            messageUserId={d.name._id}
            userId={data && data._id}
          />
        ))}
    </div>
  );
};

export default Messages;
