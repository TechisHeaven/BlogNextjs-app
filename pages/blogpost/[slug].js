import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Blogs.module.css'


const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return <div>
    <h1 className={styles.heading}>{blog && blog.title}</h1>
    <hr />
    <div>
      {blog && blog.content}
    </div>
  </div>
}



export async function getServerSideProps(context) {


  // const router = useRouter();

  // if (!router.isReady) return;

  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  let myBlog = await data.json()


  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}

export default slug