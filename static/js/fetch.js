const form = document.querySelector(".old")
console.log("not sure .. ") /*
so now we need to fetch from frontend to back end yup


i want every way from .then to await 
ATOM DOING THE GOOD THINGS 
*/
// isnt it submit? idk share port with me pls, sometimes its automatic but not this time
form.addEventListener("submit",(e)=>{
    e.preventDefault() ; 
    const firstname = document.querySelector("#firstname").value
    const lastname = document.querySelector("#lastname").value
    const phone = document.querySelector("#phone").value
     
    
    
    fetch("http://localhost:8000/server", {
        method: "POST",
        body: JSON.stringify({"firstname" : firstname,
                               "lastname" : lastname , 
            "phone": phone
        }),
         headers: {
             "Content-Type": "application/json"
        } 
    })
    .then(res => res.json()).then(data => console.log("Response from server: ", data))
    
})
/*

so i think first it would be good to see again whats fetch the litteral defintion first i know it s "outside" of js like the dom 
no but i mean what does it do ok perfect what is its request ? how could i use post ? oh ok okokok
it makes a request to specified url
it is a http request, by default it uses GET http method then <form> is useless its not because form have some nice thing like pressing enter sends form and etc, plus its better to use it for semantical reasons
when we re talking about GET how does it know what to get ? like for example with our form lets say we have 2 forms on localhost:8000
ye but in our case its a form it doesnt matter, when we use preventDefault it means we say "SCREW FORM, IL DO ALL BETTER BY MYSELF"
it doesnt know, it just makes a get request to url and will give you whatever server respond with, so it depends on what server respond with
oh ok so for now form is just semantic and thats because we work with in the the SEPARATION OF CONCERNor the opposite i dont remmeber the expression yeah thats a good way to put it
oh so in fact what we will do is inputA.innerhtml inputb etc and then fetch the result ? yeah
ok lets do a example 
*/ 
/*async function fetchDataWithAwait() {
console.log("fetching with await...")
    const res = await fetch("http://localhost:8000/api/test", {
        method: "POST",
        body: JSON.stringify({whatever: true})
    });
    const data = await res.json();
    return data
}
function fetchDataWithThen() {// uh ? we dont do that ehre xD restart server pls xD dont restart server if we change static files, refresh is enough
console.log("fetching with then...")
    // not sure if it works xD
    return fetch("http://localhost:8000/api/test")
    .then(res => res.json())
}*///not at all but maybe before lets try to understand fetch xD ? k so what are the questions?
// this is IIFE, immediately invoked function expression
