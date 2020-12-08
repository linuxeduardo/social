import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='messages'>
      <Message content='mouse sports and GODSENT will meet in the semi-final of DreamHack Masters Winner after eliminating their opponents in the first leg of the playoffs.' />
      <Message content='Cloud9 found sporadic success to start the T side of Nuke, but the double AWP of mouse sports allowed the Europeans to grab control of the map soon' />
      <Message content='On Inferno, mouse sports started off cleanly, 5-0, before Alex "⁠ALEX⁠" McMeekin"s men managed to get going on the defense to finish it just one round behind.' />
      <Message content='Heroic - GODSENT went all three maps, with the European mixture winning their map pick of Inferno 16-10 after a near-perfect start, 7-1 on the T side. Vertigo was a different story, as René "⁠TeSeS⁠" Madsen pushed Heroic to 10 rounds on the offense with some brilliant play, but emis team pulled back after the switch. The score was 14-14 when Heroic squeezed out a crucial round, forcing Train.' />
    </div>
  );
};

export default Messages;
