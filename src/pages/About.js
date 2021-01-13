import React from 'react';
import Title from '../components/Title';

function About() {
  return (
    <div className='inner'>
      <Title contentOne='This is the' contentTwo='abouut page' />
      <div>
        <p className='other'>
          But a wave of misinformation on social media, not helped by Facebook’s
          abysmal track record on privacy and its reputation for obfuscating
          changes to its various terms of service agreements, has resulted in a
          full-blown WhatsApp backlash that has users fleeing to competitors
          like Signal and Telegram.
        </p>
      </div>
    </div>
  );
}

export default About;
