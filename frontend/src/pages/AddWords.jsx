import { useState } from "react";
function AddWords() {
  //
//   Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:8001/api. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 404.

  // Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:8001/api. (Reason: CORS request did not succeed). Status code: (null).
  
  // basically cors is the thing that by default doesnt allow anybody to make a requests to your website( express server in our case) so to fix that error we need to install cors on express right ? yeah on our server, 1s npm install cors
  const [french,setFrench] = useState("")
  const [english, setEnglish] = useState("")
  // handle[[eventname]] is a common patter for naming functions
  async function handleSubmit(e){//how do i await on thech ? you dont use then with await, one  or another 
    e.preventDefault(); // awaiting fetch returns you a response which you need to parse (.json) IT WORKSSSSSS
    const response = await fetch("http://localhost:8001/api/words", { //maybe bad link nahcheck the logs in browser, try now i changed the e.value yee i remmebered it wasnt just e.value xD but it s stupid cuz meh ok i found error look yay ya y ay ay yayayyaay
      // nice this error is good, it means everything works Access-Control-Allow-Origin in nope just one little prob is it doesnt reset
      method : "POST",
      body : JSON.stringify({
        "french" : french,
        "english" : english
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json(); //oh i see so we re all good  ? i think you forgot to set in input value = english wdym ?  and it doesnt console.... hmmm wait i know i think why
    console.log(data);//nope hmm
    // nice i forgot about that lets try now
    setFrench("")//it didnt like localhost lmao oh yeah http:// xD
    setEnglish("")
  }
  return (
    <form
      //sry youre right im taking it too seriously xD
    onSubmit={handleSubmit} // 
      action=""
      className="border w-full max-w-md shadow-md rounded-xl mx-auto mt-8 flex flex-col gap-4 items-center justify-center p-8 old"
    >
      <div className="flex gap-2 items-center justify-center">
        <label htmlFor="french">French</label>
        <input
          onChange={(e) => { setFrench(e.currentTarget.value) }}
          value={french}
          type="text"
          name="french"
          id="french"
          className="border p-2 shadow-inner rounded-xl"
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label htmlFor="english">English</label>
        <input
        onChange={(e)=>{setEnglish(e.currentTarget.value)}}
        value={english}
          type="text"
          name="english"
          id="english"
          className="border p-2 shadow-inner rounded-xl"
        />
      </div>
      <button
        type="submit"
        className="border text-xl text-black font-serif p-2 bg-green-400 rounded-xl transition hover:scale-125 active:scale-90"
      >
        Submit
      </button>
    </form>
  );
}
export default AddWords;
