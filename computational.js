function computation(x, y, operation){
    if (operation == "add"){
        console.log(`The sum of the ${x} and ${y} is ${x+y}`);
    }else if (operation == "subtract"){
        console.log(`The difference between ${x} and ${y} is ${x-y}`)
    }else if (operation == "multiply"){
        console.log(`The multiple of ${x} and ${y} is ${x * y}`)
    }else if (operation == "divide"){
        if (y == 0){
            console.log("Error: Division by zero")
        }else{
            console.log(`The quotient of ${x} and ${y} is ${x / y}`)
        }
    }else{
        console.log("Invalid operation, please try again.")
    }
}

computation(1,2, "add")
computation(2,8, "subtract")
computation(3,5, "multiply")
computation(10,4, "divide")
computation(1,0, "divide")
computation(1,1, "summing")