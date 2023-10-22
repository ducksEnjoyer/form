const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000



app.use(express.static("static"))
app.use(express.json())
app.get("/",(req,res) => { 
    res.sendFile(__dirname + "/views/index.html")
})
app.post("/server", (req, res) => {
  // restart server, turns out order matters xDDD uh ? awesome aand i guess with react we ll see a cool way to add it in the html ye k but it s to start using to it s a good introduction k
  //ok so next time we connect to db to store name prename and phone and we ll use react to add msg when data isnt good react isnt for that, we can do it without react
  console.log(req.body)
  if (req.body.phone.length !== 10) {
    res.status(404).json({
      reason: "not 10 characters bruh"
    })
  } else {
    
//thx a lot for today next week will be kinda hard so cant tell u in advance when ill be free
    res.status(200)
  }
  //do the magic, good <3 <3
  
  
  /*/
  
  so what btw? lets do that and then we stop im tired too xD k 
  btw the best way to verify if data user send is on backend right ? so lets say i wanna make sure i get a phone number of 10 numbers a name of str and a prename of str on backend how do i do it 
  btw the best way to verify if data user send is on backend right ? so lets say i wanna make sure i get a phone number of 10 numbers a name of str and a prename of str on backend how do i do it 
  btw the best way to verify if data user send is on backend right ? so lets say i wanna make sure i get a phone number of 10 numbers a name of str and a prename of str on backend how do i do it 
  btw the best way to verify if data user send is on backend right ? so lets say i wanna make sure i get a phone number of 10 numbers a name of str and a prename of str on backend how do i do it 
  ye ofc btut on frontend u c sj nt put in html with required in min max for "normal" users yeah
   usually you would do it in both places, on frontend just to help user, on backend to make sure its correct
    ok so how do we do it in backend the f is rgexp regexp is a very complicated way to see patterns, in 1 small line with regexp you can make sure that phone number is 10 digits, in the middle is - and a lot of conditions?there s a simplest ay no yeah duh, if ye so lets do it vhbainan i mean just tell me where i do it like we get the data from user where do i verify thatr its correct in controller but in our case right heren why in our case right here ? xDDDDcuz im lazy bastard and dont wanna do all these controller routes etc (phone.length !== 10) screw you?  ? verify phone number? idk use regexp xD its up to you
  */ 
})// no but lets say i have a form that take name prename and phone and one the name of their dog i need to know who do what to store it in db you would just do 1 form then instead of 2 no but like on 2 pages react allows it, you can save data between pages ok but no idc i wanna have 2 differents form xD i mean no u re right but no like hzbauiz i sitill iiniieid itoiiiiiiiiii if you dont care then you do whate

//but lets say we have differents form we send them all to the same adress ? its up to you to decide, it depends on what kind of form it is and etc etc

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})




