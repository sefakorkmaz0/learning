interface Movie {
    name:string,
    year:number,
    watched:boolean
}

const sefa: Movie = {
    name:"dark_night",
    year:1984,
    watched:true
}





const movies:Movie[] =[
    {
        name:"the dark night",
        year:2000,
        watched:false
    },
    {
        name:"freezz",
        year:1999,
        watched:false
    },
    {
        name:"calender",
        year:2013,
        watched:true
    }
]

function getWatched(list: Movie[]) : Movie[]{
    return list.filter(film => film.watched)
}

console.log(getWatched(movies));

function getTitles(list: Movie[]): string[]{
    return list.map(film => film.name)
}

console.log(getTitles(movies))


function getTittleandYear(list:Movie[]): number[]{
    return list.filter(film => film.watched).map(film => film.year)
}

console.log(getTittleandYear(movies))

const numbers = [1,2,3,4,5,6,7,8,9,10]
const total = numbers.reduce((acc,number) => acc -number,10)

console.log(total)


interface Product {
    id:number,
    name:string,
    discountPrice?:string
}

const product1:Product = {
    id:1,
    name:"apple",
}

console.log(product1)

interface Productttt {
    product_name:string,
    status: "preparing" | "shipping" | "delivered"
}

const p2:Productttt = {
    product_name:"magnet",
    status: "preparing"
}
console.log(p2)


