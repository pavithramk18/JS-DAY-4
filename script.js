console.log("Welcom to JS Day 4");

//JSON:JavaScript Object Notation

//It looks similar to a object but both the key and value pair are enclosed in double quotes

// Structure of JSON

// var JSON = {
//     "test":"demo",
//     "demo":"err",
// }

// Copy by Value

// var a=23;
// var b=a;  it takes the value of a and be fixed as value
// a=25; a keeps on changing as we defining it after next line so it takes the last defined a value
// a=6;
// console.log(a,b);  o/p 6 23


// Copy by reference

// It is applicable for complex data types,single array or objecct can have multiple references.

// var q=[2,4];
// var q=[5,6];
// var res=q;  takes the value of last q array and stores the value
// q[0]=33;
// console.log(res);  // o/p:[33,6]

// Array of JSON
// API-Application Programming Interface

//Example:
// var p=[{"a":"pavi",
//          "b":"b.e"},
//         {"s":"suni",
//         "p":"mba"}]

//         //How to access the element from json
//         console.log(p[1].s);    o/p:suni  //Why i am giving the index as 1  means i want to diplay the name of suni so denoting it as index 1 if we want pavi we need to give the index as 0


//XML HTTP REQUEST -such as inbuilt method

// Major Usage:To get the data from the server through API

// It is used to interact with server via API

// Step1:Create a XHR object

// Synatx:var variablename= new XMLHttpRequest();

var req= new XMLHttpRequest();
//Step2 :Specify the URL of the API 

//Syntax:varname.open("GET","URL API to be specified")

req.open("GET","https://restcountries.com/v3.1/all");

//STEP3:Send the request

req.send();  //Sends our request to the API

//Step 4: Once the request data is there on the server data is successfully loaded

//Success code 200 status code

//Functions are used to perform specific tasks

req.onload=function(){
    var result = JSON.parse(req.response);
    console.log(result);

    console.log(result.name.length());

   
    

    //Do the conversion whatever nedded to be specified inside the function
    //We are getting the data from server to client through this function
}

// we are converting the data from string to object inside the function by the use of JSON.parse


//Functions-Which are used to perfom specific task or operation

//Syntax:
// function functionname(parameters)
// {
//     return(operation to be performed);
// }
// console.log(Functionname()); calling a function

function add(a,b){
    return a+b;
}
console.log(add(5,8));



