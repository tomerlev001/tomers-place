// console.log("Start")

// setTimeout(() => {
//     console.log("Set Time Out '1'")
// }, 500)


// setTimeout(() => {
//     console.log("Set Time Out '2'")
// }, 100)



// console.log("End")

let p = new Promise((resolve, reject) => {
    if (true) {
        resolve("Resolve!")
    } else {
        reject("Reject!")
    }
})

console.log(p)
p.then(message => {
    console.log(message)
}).catch(message => {
    console.log(message)
})


async function doWork() {
    let res = await p
    console.log("Async response: " + res)

    let results = await Promise.all([p,p,p])
    console.log("Results: " + results)
}
doWork()
