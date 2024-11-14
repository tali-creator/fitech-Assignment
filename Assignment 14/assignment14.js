// question 1

async function fetchDatA() {
    throw new Error("faild to fetch data")
};

async function run() {
    try {
        await fetchDatA(); // Call the async function
    } catch (error) {
        console.log("Error caught:", error.message);
    }
}

run();


//question 2

function multiply(num1, num2, triger ){ 
   const result = num1 * num2;
   triger(result)
}

function triger(result){
    console.log(result)
}
multiply(3,6,triger)



// // question 3

function callBackHell(){
    setTimeout(() => {
        console.log("first")
        setTimeout(() => {
        console.log("Second")
            setTimeout(() => {
        console.log("third")
            }, 1000);
        }, 1000);
    }, 1000);
}
callBackHell()


//question  4

function first(){
    setTimeout(() => {
        console.log("first")
        return second()
    }, 1000);
}

function second(){
    setTimeout(() => {
        console.log("second")
    }, 1000);
}
first()


// question 5

function timer(){
    let elapsedTime = 0
    const timeId = setInterval(() => {

        elapsedTime += 1
        console.log(`time elapsed ${elapsedTime}`)

        if(elapsedTime === 5){
            clearInterval(timeId);
            console.log("Timer stopped after 5 seconds.");
        };
    }, 1000);
   
}timer()


//question6

async function awaiting() {
    
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve("loaded")
        }, 2000);
    })

    const result = await prom;
    console.log(result)
}
awaiting()


//question 7

async function promiseAll() {
    
    function first(){
        setTimeout(() => {
            console.log("promise 1 executed")
        },1000)
    }
    
    function second(){
        setTimeout(() => {
            console.log("promise 2 executed")
        },2000)
    }
    
    const [prom1, prom2] = await Promise.all([first(), second()]);
    console.log(prom1)
    console.log(prom2)
}
promiseAll()


//question 8

function catching(){
    return new Promise((resolve, reject) => {
        const num = 4
        setTimeout(() => {
            if (num > 6){
                resolve("true")
            }
            else{
                reject("false")
            }
        }, 1000)
    })
}
catching()
.then((message) => {
    console.log(message)
})

.catch((error) => {
    console.log(error)
})


// quection 9

function printHello(){
    setTimeout(() => {
        console.log("Hello")
    },2000)
}
printHello()

// question 10
function compareNum(){
    return new Promise((reject , resolve) => {
        const num = 3;
    
        if(num > 5){
            resolve.log("true")
        }
        else{
            reject("false")
        }

    })
} 
compareNum()
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
})
