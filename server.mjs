import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("response from Kheemchand")
    res.send('Hello World! from Kheemchanad')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})