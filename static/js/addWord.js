const form = document.querySelector(".old");
console.log("not sure too ...")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const french = document.querySelector("#french").value
    const english = document.querySelector("#english").value
    console.log(`ceci est french : "${french}" et ceci est english : "${english}"`)
    fetch("/api/words",{
        method: "POST",
        body: JSON.stringify({
            "french" : french,
            "english" : english
        }),
        headers:{
            "Content-Type" : "application/json"
        }
        
    }).then(res =>res.json()).then(data=> console.log(`Response from server  : ${data}`))
})