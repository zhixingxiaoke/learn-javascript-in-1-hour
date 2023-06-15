// let i = 1
// do {
//     console.log(i++)
// } while(i <= 10)

// let i = 1
// do {
//     if (i == 3) {
//         break
//     }
//     console.log(i++)
// } while(i <= 10)

let i = 0
do {
    if (++i % 3 == 0) {
        continue
    }
    console.log(i)
} while(i < 10)