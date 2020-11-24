import React from 'react';
import Reply from './Reply';

const MessageModal = () => {
  return (
    <div className='message-modal-'>
      <div>username</div>
      <h4>Title</h4>
      <p>
        Quando o React vê um elemento representando um componente definido pelo
        usuário, ele passa atributos JSX e componentes filhos para esse
        componente como um único objeto. Nós chamamos esse objeto de “props”.
      </p>
      <Reply />
    </div>
  );
};

export default MessageModal;
