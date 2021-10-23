/* how to create objects on javascript */

function customerRegister(
    customerName,
    customerMiddleName,
    customerAge,
    customerEmail
) {
    customer = {
        name: customerName,
        middleName: customerMiddleName,
        age: customerAge,
        customerEmail: customerEmail
    }

    return customer
}

let customerExample = customerRegister('random', 'random', 'x', 'xxx.com')

console.log(customerExample)