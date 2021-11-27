const path = require('path')
const express = require('express')
const app = express()
const staticPath = path.join(__dirname, '..', 'public/static')
const port = process.env.PORT || 3000

app.use(express.static(staticPath))

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.listen(port, () => {
    console.log('server is running!')
})