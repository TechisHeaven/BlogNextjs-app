import React, { useEffect, useState } from 'react';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link'
import Head from 'next/head'


const blog = (props) => {
  
  const [blogs, setblogs] = useState(props.allBlogs)
  // useEffect(() => {
  
  // }, [])
  return <div classname={styles.conatiner}>
    <Head><title>Himanshu Blogpage</title></Head>
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div className={styles.conatiner} key={blogitem.slug}>
          <Link href={`../blogpost/${blogitem.slug}`}>
          <a> <h2 classname={styles.blogitemh3}> {blogitem.title}</h2></a>
            </Link>
          <p>{blogitem.content.substr(0,50)}</p>
        </div>
      })}

    </main>
  </div>
};



export async function getServerSideProps(context) {
    
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()



  // .then((a) => {
  //   return a.json();
  // })
  //   .then((parsed) => {
  //     setblogs(parsed)
  //   })
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default blog