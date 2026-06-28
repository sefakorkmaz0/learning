// async function getUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/3")
//     const result = await response.json()
    
//     const cleanedData: cleanedUser = {
//         id: result.id,
//         name: result.name,
//         email: result.email,
//         city: result.address.city
//     }

//     console.log(cleanedData)
// }

// getUser()


// interface cleanedUser {
//     id:number,
//     name:string,
//     email:string,
//     city:string
// }





// async function getUser () {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const result = await response.json()
    
//     const cleanData: cleanPost = {
//         id:result.id,
//         title:result.title
//     }

//     console.log(cleanData)
// }

// getUser()


// interface cleanPost {
//     id:number,
//     title:string
// }