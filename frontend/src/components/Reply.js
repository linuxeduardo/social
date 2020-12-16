import React from 'react';
import Button from './form/Button';
import '../css/reply.css';

const Reply = ({ messageId, show }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className='reply' style={{ display: show }}>
      <form onSubmit={handleSubmit}>
        <textarea name='' id='' rows='4'></textarea>
        <div className='reply-options'>
          <button className='inline button-close gray'>x</button>
          <Button color='primary' block='inline'>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reply;
