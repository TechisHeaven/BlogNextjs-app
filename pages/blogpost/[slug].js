import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'
import styles from '../../styles/Blogs.module.css'
import * as fs from 'fs';


const Slug = (props) => {

  function createMarkup(c) {
    return {__html: c};
  }
  
  const [blog, setBlog] = useState(props.myBlog);

  return <div>
    <h1 className={styles.heading}>{blog && blog.title}</h1>
    <hr />
    
      {blog && <dev className={styles.content} dangerouslySetInnerHTML={createMarkup(blog.content)}></dev>}
  </div>
}


//static site rendering
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'learn_javascript' } },
      { params: { slug: 'learn_nextjs' } },
      { params: { slug: 'learn_python' } },
    ],
    fallback: true // false or 'blocking'
  };
}


// for server side rendering in nextjs 
export async function getStaticProps(context) {


  // const router = useRouter();

  // if (!router.isReady) return;

  const {slug} = context.params;





  let myBlog = await fs.promises.readFile(`blogsdata/${slug}.json`, "utf-8")

 

    // let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    // let myBlog = await data.json()


    return {
      props: { myBlog : JSON.parse(myBlog) }, // will be passed to the page component as props
    }
  }

export default Slug;



//for backup perposes lol :)

// // for server side rendering in nextjs
// export async function getServerSideProps(context) {


//   // const router = useRouter();

//   // if (!router.isReady) return;

//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//   let myBlog = await data.json()


//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   }
// }

// export default slug