
import React, { useState } from 'react';
import styles from '../styles/contact.module.css'


const contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, desc);

    const data = { phone , name , email , desc};

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Item Submited ")
        setname('')
        setemail('')
        setphone('')
        setdesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("error occured")
      });
  }



  const handlerChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
    console.log(e, "change")
  }


  return (
    <main>
      <div className={styles.contactform}>
        <img src="http://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg" alt="blog website photo" width={300} height={200} />
        <h1>Contact form </h1>
        <form onSubmit={handlerSubmit} >
          <div class={styles.form_group}>
            <label for="username">Name:</label>
            <input placeholder='username' onChange={handlerChange} value={name} type="text" class="form-control" id="usr" name='name' />
          </div>
          <div class={styles.form_group}>
            <label for="email">Email:</label>
            <input placeholder='email' value={email} onChange={handlerChange} type="email" class="form-control" id="usr" name='email' />
          </div>
          <div class={styles.form_group}>
            <label for="phone">Phone:</label>
            <input placeholder='Phone number' onChange={handlerChange} value={phone} type="number" class="form-control" id="phone" name='phone' />
          </div>
          <div class={styles.form_group}>
            {/* <label for="desc">message:</label> */}
            <textarea rows="10" cols="50" value={desc} placeholder='write your query here ' onChange={handlerChange} type="text" class="form-control" id="desc" name='desc' ></textarea>
          </div>
          <button className='button' type='submit'>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default contact