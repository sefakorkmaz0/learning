// import express from 'express'

// const app = express();

// app.use(express.json());


// app.get("/",(req,res) => {
//     res.json({ id:1,team:"Mergen"});
// })
// app.get("/sefa",(req,res)=>{
//     res.send("WELCOME TO MY WORLD");
// })
// app.get("/sefa/korkmaz",(req,res) =>{
//     res.send("MY HOME");
// })




// app.listen(3000,() => {console.log("true")})







// import express from 'express'

// const app = express();

// app.use(express.json())

// app.get("/",(req,res) => {
//     res.send("");
// });

// app.get("/home",(req,res) => {
//     res.send("Welcome to my home");
// });

// const users = [
//     { id: "1", name: "Sefa", role: "Developer" },
//     { id: "2", name: "Ahmet", role: "Designer" }
// ]

// app.get("/home/product/:id",(req,res) => {
    
//     const userId = req.params.id;
//     const foundUser = users.find(user => user.id === userId);

//     if(!foundUser){
//         return res.status(404).json({ error: "User not found" })
//     }
//     res.status(200).json(foundUser);
// })


// app.listen(3000,() =>{})




// import express from 'express'

// const app = express();
// app.use(express.json());

// const f1Teams = [
//     { id: "mercedes", teamName: "Mercedes-AMG Petronas", principal: "Toto Wolff", championships: 8 },
//     { id: "redbull", teamName: "Red Bull Racing", principal: "Christian Horner", championships: 6 },
//     { id: "ferrari", teamName: "Scuderia Ferrari", principal: "Frédéric Vasseur", championships: 16 }
// ];

// app.get("/:id",(req,res) => {
//     const enterId =req.params.id;
//     const controlId = f1Teams.find(user => user.id === enterId);
//      if(!controlId){
//         return res.status(404).json("Id is not recognize")
//      }
//      res.status(200).json(controlId);
// })


// app.listen(3000, ()=>{console.log(true)})




import express from 'express'

const app = express();
app.use(express.json());

const books = [
    { isbn: "dune-1", title: "Dune", author: "Frank Herbert", available: true },
    { isbn: "hobbit-1", title: "The Hobbit", author: "J.R.R. Tolkien", available: false },
    { isbn: "1984-book", title: "1984", author: "George Orwell", available: true }
];

app.get("/api/books/:isbn",(req,res) => {

    const enterId = req.params.isbn;
    const controllerId = books.find(book => book.isbn === enterId);

    if(!controllerId) {
        return res.status(404).json("is not recognize");
    }

    res.status(200).json(controllerId)

})

app.listen(3000, () => {console.log(true)})





















