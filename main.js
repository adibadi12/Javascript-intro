// Definer en variabel
let greeting
//gi den en verdi
 greeting = "god morgen"
// Gjøre noe med variabelen
 console.log(greeting)

 //omdefinere verdien til variablene (gi den en ny verdi)
 greeting = "en ny verdi"
 console.log(greeting)

 // Definere konstanter
 const constantvariabel = "i am a constant"

 let changeablevariable = "testing"

 //neste linje crasher programmet
 // constantvariabel = "this does not work"

 /**
  * flere linjer med
  * kommentarer
  */
 let notDefined
 console.log(notDefined)

 let notYetDefined = null
 console.log (notYetDefined)

 //komplekse typer
 const number = [ 1, 2, 3, 4]
 console.log(numbers)

 // Samlinger med informasjon (objects)
 Objekter
 const person = {
    email: "adrian.mathiassen@gmail.com",
    name: "Adrian mathiassen",
    age: 17
}


console.log(person.name)

/**
 * ==========================
 * change theme functioanlity
 * ==========================
 */

//først finne knappen <button> elementet
let buttonElement = document.getElementById("theme-changer")

function changeTheme() {
    buttonElement.textContent="it worked!!"
    //først finne body elementet
    const body = document.getElementById("body")

    //så finn ut hva klasse navnet er
    const currentTheme =body.className
    console.log(currentTheme,)

    //viss lyst tema skift til mørkt

    //viss mørkt skift til lys
}

buttonElement.addEventListener("click", changeTheme)
