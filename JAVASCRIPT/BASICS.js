// let BLOCK SCOPED

const key = 1;
// const k; error

let v1 = "OUTSIDE";
{
    let v2 = "INSIDE";
    console.log(v2);
}
console.log(v1);

// PRIMITIVE DATA TYPES
let a = null;
let b = Number;
let c = true;
let d = BigInt("56");
let e = "H";
let f = Symbol("NEW");
let g = undefined
console.log(a,b,c,d,e,f,g)

//  OBJECTS
const item  = {
    "OBJ1":true,
}
console.log(item["OBJ1"]);

// STRING MANIPULATION
let str = "a";
str += 1;
console.log(str);
console.log(typeof(str));

// ADDING KEY
item["NEW"] = false;
console.log(item);

// prompt
let p = prompt("NEW VALUE");
let num = parseInt(p);
if(num > 0)
{
    console.log(num);
    alert(1);
    
}

// SWITCH
switch(num)
{
    case 1:
        console.log(1);
        break;
}

//LOOP
for(let i = 1;i<10;i++)
{
    console.log(i);
}

for (i in item){
    console.log(i,item[i]);
}

for( i of "po")
{
    console.log(i);
}

// FUNCTION

function print(n)
{
    console.log(n);
}
print(3);

//STRINGS
let name1 = "HARRY";
console.log(name1.length)

let boy1 = `${name1}"s"\tPOTTER`;
console.log(boy1);

