import React, { useState } from 'react';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link'
import Head from 'next/head'
import * as fs from 'fs';


const Blog = (props) => {

  const [blogs, setblogs] = useState(props.allBlogs)

  return <div className={styles.conatiner}>
    <Head><title>Himanshu Blogpage</title></Head>
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div className={styles.conatiner} key={blogitem.slug}>
          <Link href={`../blogpost/${blogitem.slug}`}>
            <a> <h2 className={styles.blogitemh3}> {blogitem.title}</h2></a>
          </Link>
          <p>{blogitem.metadesc.substr(0, 60)}</p>
        </div>
      })}

    </main>
  </div>
};

//server side rendering
export async function getStaticProps(context) {

  //this is use for fetching api 

  // let data = await fetch('http://localhost:3000/api/blogs')
  // let allBlogs = await data.json()

  //this comments is for default site gerneration 

  // .then((a) => {
  //   return a.json();
  // })
  //   .then((parsed) => {
  //     setblogs(parsed)
  //   })


  let data = await fs.promises.readdir("blogsdata")
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogsdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

// for backup perposes 

// //server side rendering
// export async function getServerSideProps(context) {

//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()

// //this comments is for default site gerneration 

//   // .then((a) => {
//   //   return a.json();
//   // })
//   //   .then((parsed) => {
//   //     setblogs(parsed)
//   //   })
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export default Blog