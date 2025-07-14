let array1 = new Array();

let array2 = [1,2,3,"Varad",true,false,null]

array1[1]="CSMSS"
array1[2]="MIT"
array1[3]="MGM"


console.log(array1)
console.log(typeof(array1[0]))

let array3 = new Array();

array3.push("ROHAN")
array3.push("ROHIT")
array3.push("RAJ")
array3.push("RAJU")


console.log(array3)


array3.unshift("SAMEER")
console.log(array3)

array3.shift()
console.log(array3)

console.log(array3.length)


let assoc ={
    'CSMSS':"Varad",
    'CSMSS':"Rohan",
    'MIT':"Rohit"
}
console.log(assoc['CSMSS'])