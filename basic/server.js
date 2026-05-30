const express = require('express')
const app = express()
const port = 3000

// Middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next()
// })

// app.use('/about', (req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next()
// })

// app.use((req, res, next) => {
//     console.log(`Authenticated`)
//     next()
// })


// function checkLogin(req, res, next) {
//     const loggedIn = true;

//     if (!loggedIn) {
//         return res.status(401).send("Unauthorized")
//     }
//     next()
// }

// Route handlers
// app.get('/', (req, res) => res.send("Hello World!"))
// app.get('/about', (req, res) => res.send("This is the about page."))
// app.get('/contact', (req, res) => res.send("This is the contact page."))

// Handle 404 errors
// app.use((req, res) => res.status(404).send("Page not found!"))


app.use(express.static('public'))
app.use(express.json())

// app.get('/', (req, res) => res.send("Hello World!"))

const DB_USERNAME = "test"
const DB_PASSWORD = "123"

function validateUser(req, res, next) {
    const { username, password } = req.body;

    if (username === DB_USERNAME && password === DB_PASSWORD) {
        console.log("User validated!")
        next()
    } else {
        res.status(401).send("Invalid username or password")
    }
}

app.post('/login', validateUser, (req, res) => {
    console.log(req.body)
    res.send(`Welcome ${req.body.username}!`)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

