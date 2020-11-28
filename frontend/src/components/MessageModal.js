import React from 'react';

const MessageModal = () => {
  return (
    <div className='message-modal'>
      <div className='container'>
        <div className='content'>
          <p className='message-modal-username'>username</p>
          <p>Lorem ipsum, dolor sit ?</p>
        </div>
        <div className='reply'>
          <textarea name='reply' id='reply'></textarea>
          <button className='button button-blue'>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
