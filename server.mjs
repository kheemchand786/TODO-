import express from 'express'
const app = express()
const port = process.env.PORT || 3000;


let todos = [];



app.use(express.json());
app.post('/todo', (req, res) => {

    todos.push(req.body.text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
    console.log('someone is asking for water')
    res.send('here is your water')
})



app.get('/pizza', (req, res) => {
    console.log('someone is asking for pizza')
    res.send('here is your pizza')
})



app.get('/icecream', (req, res) => {
    console.log('someone is asking for icecream')
    res.send('here is your icecream')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})