import {useEffect} from "react"
import {useState} from "react"
function Game() {
  const [words,setWords] = useState([])
  const [points,setPoints] = useState(0)
  const [lifes,setLifes] = useState(5)
  const [increament,setIncreament] = useState(0)
  const [choices,setChoices] = useState([])
  
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8001/api/words");
      const data = await response.json();
      console.log("fetch data is: ", data);
      setWords(data);
      
    }
    fetchData()
  }, [])
  useEffect(() => {
    console.log("words is: ", words)
    
   }, [words])
   function whatever(e){
    const current = e.currentTarget.innerText; 
    console.log("l'increament qui est pris en compte : ",increament)
    if (current == words[increament].french) {
      setPoints(points + 1)
      
    } else {
      setLifes(lifes -1)
    }
    
    const realOne = getRandomInt(words.length)
    const meh = [words[realOne].french,words[getRandomInt(words.length)].french,words[getRandomInt(words.length)].french,words[getRandomInt(words.length)].french]
    shuffleArray(meh)
    setIncreament(realOne)
    console.log("increament est : " ,realOne)
    setChoices(meh)
    

    
    shuffleArray(choices)
   
    
   }
   console.log("increament hors boucle: " ,increament)
   function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
   function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  if (words.length == 0) {return "loading"}
  else{
    if (lifes == 0) {
      return <h1>Lost :/</h1>
    } else {
      return <><div className="d-flex justify-content-center gap-2"><div>{lifes}/5</div><h1 className="text-5xl w-fit my-8 mx-auto">{words[increament].english}</h1><div>score : {points}</div></div>
<div className="d-flex justify-content-center gap-2">
  <button  onClick={whatever} className="btn btn-warning min-w-[130px] p-4">{choices[0]}</button>
  <button  onClick={whatever}  className="btn btn-info min-w-[130px] p-4">{choices[1]}</button>
  
</div>
<div className="d-flex justify-content-center gap-2 my-2" ><button onClick={whatever}
    className="btn btn-primary min-w-[130px] p-4">{choices[2]}</button>
  <button onClick={whatever}  className="btn btn-secondary min-w-[130px] p-4">{choices[3]}</button></div>
</>
    }

  
  }
}
export default Game