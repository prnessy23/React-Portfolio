import React, {useState} from 'react';

function Contact() {
  const [name, setName]= useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] =useState('');
  const [emailError, setEmailError] =useState('');
  const [messageError, setMessageError] =useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    // to validate name
    if (!name){
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }
    // to validate email using regex
    if (!email) {
      setEmailError('Please enter your email address');
   } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError('Please enter a valid email address');
   } else {
    setEmailError('');
   }
  //  to validate message field has text
  if (!message){
      setMessageError('Please enter a message');
  } else {
    setMessageError('');
  }
  // once all fields are valid, submit form
  if (name && email && message){
    console.log ('Name:',name);
    console.log ('Email:', email);
    console.log ('Message:', message);
  }
  
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && <p className='error'>{nameError}</p>}
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {nameError && <p className='error'>{emailError}</p>}
      </div>
      <div>
      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      {messageError && <p className='error'>{messageError}</p>}
    </div>
    <button type="submit">Send</button>

    </form>
    </section>
  );
}

export default Contact;