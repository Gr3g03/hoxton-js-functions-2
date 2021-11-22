

// const userNames= users.filter( function(user){
//     return user
// } )

// const userNamesFirstLetter= userNames.map( function(user){
//     return user.name
// } )


// let firstNameLeter = prompt(`please enter a letter`) 

// const userIDtodos = todos.filter(function (inputedUserID){
//     return inputedUserID
// })

// const mapedUserID = userIDtodos.map(function(mapedInputedUserID){
//     return mapedInputedUserID.id
// })
// let userIDNumber = Number(prompt(`please enter a number`))


// function gettigUSerNames(names){
//     for(const element of userNamesFirstLetter ){
//         if(element.includes(names))
//         alert( `hello ${element}`)

//     }
    // i = 0
    // i++
    // console.log( `hello ${userNamesFirstLetter[i]} your ID is : ${mapedUserID[i]} `)
// }




let firstNameLeter = prompt(`please enter a letter`) 

const userNames= users.map( function(user){
    return user.name
} )
function getFirstNameLetter (name){
return userNames.includes(firstNameLeter)
}

for(const name of userNames){
    console.log(`Hello There ${name}`)
}


let userIDNumber = Number(prompt(`please enter an ID`))
const mapedUserID = todos.map(function(todo){
return todo.userId === userIDNumber && todo.completed !== true
})
console.log(`hello ${userIDNumber}`)


function getUserID(userID){
 return mapedUserID.includes(userIDNumber)
}

// for(const id of mapedUserID){

// }









getFirstNameLetter() 
getUserID() 








// console.log("users: ", window.users);
// console.log("todos: ", window.todos);

