import * as fs from 'fs';

export default function handler(req, res) {

    fs.readFile(`blogsdata/${req.query.slug}.json`, "utf-8", (err, data) => {

        if (err){
            res.status(500).json("Network file server error")
        }


        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}
