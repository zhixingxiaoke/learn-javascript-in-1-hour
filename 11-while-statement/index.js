// let i = 1
// while (i <= 10) {
//     console.log(i++)
// }

// let i = 1
// while (i <= 10) {
//     if (i == 3) {
//         break
//     }
//     console.log(i++)
// }
// console.log("finished")

let i = 0
while (i++ < 10) {
    if (i % 3 == 0) {
        continue
    }
    console.log(i)
}