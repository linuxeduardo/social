import React from 'react';
import UserContext from '../UserContext';
import Error from '../helpers/Error';

const NewMessage = () => {
  const [content, setContent] = React.useState('');
  const { newMessage, fetchData, error, setError } = React.useContext(
    UserContext
  );

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('token');
      await newMessage(content, token);
    } catch (err) {
      setError(err.message);
    } finally {
      fetchData();
      setContent('');
    }
  };
  return (
    <div className='new-message'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Escreva aqui sua mensagem..' value={content} onChange={handleChange} />
        <button className='secondary' type='submit'>
          Enviar
        </button>
        {error && (
          <div className='error'>
            <Error error={error} />
          </div>
        )}
      </form>
    </div>
  );
};

export default NewMessage;
