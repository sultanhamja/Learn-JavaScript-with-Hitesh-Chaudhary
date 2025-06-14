// TWO TYPES 

// 1 PRIMITIVE
    // 7 TYPES IN PRIMITIVE
    // 1. String : "", ''
    const name = "Hamja"
    // 2. Numbers 
    const age = 27
    // 3. Boolean : true, false
    const married = false
    // 4. null : is a value on its own
    const outSideTemp = null
    // 5. undefined : value which is not defined
    let girlFriend ; // you can also give the value undefined 
    // 6. Symbol
    const passion = Symbol('Coding') // it saves the variable reference in memory and uses it when called
    const profession = Symbol('Coding') // so even though it looks same value as above, when you compare them its not.
    // 7. BigInt : also a number but with big values 
    const creditLimit = 9876543n // using n in the end represents that this is a bigInt 

// NON-PRIMITIVE (Reference type) (all non-primitive datatype returns as object)
    // 1. array : ["hamja", "nik", "gaurav"]
    // 2. objects:  objects are difined in key value pairs 
    let obj = {
           name: "Hamja", 
           age: 27,
    }
    // 3. functions 

    const myFunction = function(){
        console.log("Hello world!");
        
    }   



   // console.log(typeof(varibale)) gives us datatype.



    // NOTE: JavaScript is a Dynamic language 