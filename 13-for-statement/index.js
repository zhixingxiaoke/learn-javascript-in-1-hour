// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let array = ["a", "b", "c", "d"]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// let array = ["a", "b", "c", "d"]
// for (let v of array) {
//     console.log(v)
// }

// let text = "Hello JavaScript"
// for (let v of text) {
//     console.log(v)
// }

// let obj = {"a" : 1, "b" : 2, "c" : 3}

// for(let prop in obj) {
//     console.log(`${prop} = ${obj[prop]}`)
// }

// let obj = {"a" : 1, "b" : 2, "c" : 3}
// for(let prop in obj) {
//     if (prop == "b") {
//         break
//     }
//     console.log(`${prop} = ${obj[prop]}`)
// }

let obj = {"a" : 1, "b" : 2, "c" : 3}
for(let prop in obj) {
    if (prop == "b") {
        continue
    }
    console.log(`${prop} = ${obj[prop]}`)
}