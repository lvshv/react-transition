import React from 'react';
import Title from '../components/Title';

function Home() {
  return (
    <div className='inner'>
      <Title contentOne='Hello Im' contentTwo='Artem Levashov' />
      <div>
        <p className='other'>
          That isn’t true — the update has nothing to do with consumer chats or
          profile data, and instead the change is designed to outline how
          businesses who use WhatsApp for customer service may store logs of its
          chats on Facebook servers.
        </p>
      </div>
    </div>
  );
}

export default Home;
