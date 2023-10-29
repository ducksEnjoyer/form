
import './App.css'

function App() {
  
  // go to index.html
  return (
    <>
      <h1 className="text-5xl w-fit my-8 mx-auto">FRENG</h1>
      <div className="d-flex justify-content-center gap-5">
        <a href="/addWords" className="btn btn-warning min-w-[130px] p-4">add word</a>
        <a href="/game" className="btn btn-info min-w-[130px] p-4">play</a>
      </div>
    </>
  )
}

export default App
