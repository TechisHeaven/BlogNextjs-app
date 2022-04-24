import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogsdata")
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile(('blogsdata/'+ item), 'utf-8')
      allBlogs.push(JSON.parse(myfile))
  }

  res.status(200).json(allBlogs)
  // fs.promises.readdir("blogsdata", (err , data)=>{
  //   console.log(data)
  //   let allBlogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('blogsdata/'+ item), (d) => {
  //       allBlogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allBlogs) 
  // })
}
