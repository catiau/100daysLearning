/* System school average */

function yearAverage(array) {
    let contAproved = 0
    let contRejected = 0
    for (const nota of array) {
        if (nota >= 6) {
            contAproved += 1
        } else contRejected += 1
    }
    return `Aproved: ${contAproved}. Rejected: ${contRejected}`
}
console.log(yearAverage([10, 8, 9, 6, 65, 8]))