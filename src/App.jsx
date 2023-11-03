import { useState } from 'react'
import analyzeImage from './controllers/azure-image-analysis';

const DisplayResults =  (result,url) => {
  const datos = [JSON.stringify({"URL":url, ...result})]
  return(
    <div>
      {datos.map((dato, index) => (
        <p key={index}>{dato}</p>
      ))}
    </div>
  )
  
}
function App() {
  const [url, setUrl] = useState('');
  const[loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChangeValue = (e) => {
    setUrl(e.target.value)
  }

  const handleAnalyze = async() => {
    setLoading(true)
    const result = await analyzeImage(url);
    setLoading(false)
    setResult(result)
    
  }



  const handleGenerate = () => {
    console.log("Generate")
  }

  const handleClear = () => {
    setLoading(false)
    setResult(null)
    setUrl('')
  }
  
  return(
    <>
    <h1>Computer vision</h1>
    <hr />

    <h3>Insert URL or type promt:</h3>
    <input type="text" placeholder='Enter url to analyze or textual prompt to generate an image' onChange={(e)=>handleChangeValue(e)} value={url}/>
    <button onClick={handleAnalyze}>Analyze</button>
    <button onClick={handleGenerate}>Generate</button>
    <button onClick={handleClear}>clear</button>

    <br />

    {loading && <p>Loading...</p>}
    {!loading && result &&  
    DisplayResults(result,url)}


    
    </>
  )
}

export default App
