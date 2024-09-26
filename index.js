const callBack = () => "Hello! World"


function receivesAFunction(fun){
     return fun()
}
console.log(receivesAFunction(callBack))

const returnsANamedFunction = () => callBack
console.log(returnsANamedFunction())

function returnsAnAnonymousFunction(){
    return y=> y*2
}
console.log(returnsAnAnonymousFunction())