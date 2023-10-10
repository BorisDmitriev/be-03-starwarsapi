// Your code goes here
import express from "express"
import https from "https"

const app = express()
const port = 3000

app.get('/', (req, res) => {

    const url = "https://swapi-api.hbtn.io/api/people/1/"

    let request = https.get(url, response => {
        let data = ""

        response.on("data", chunk => {
            data += chunk
        })

        response.on("end", () => {
            res.send(data)
        })
    }).on("error", error => {
        console.log(error)
    })

    request.end()
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})


// Please leave this as your last line of code. This is for CodeBuddy! :)
export default app;


