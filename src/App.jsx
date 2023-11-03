import { useState } from 'react'
import analyzeImage from './controllers/azure-image-analysis';
function App() {
  const [url, setUrl] = useState('');

  const handleChangeValue = (e) => {
    setUrl(e.target.value)
  }

  const handleAnalyze = async() => {
    const result = await analyzeImage(url);
    console.log(result)
  }

  const handleGenerate = () => {
    console.log("Generate")
  }
  
  return(
    <>
    <h1>Computer vision</h1>
    <hr />

    <h3>Insert URL or type promt:</h3>
    <input type="text" placeholder='Enter url to analyze or textual prompt to generate an image' onChange={(e)=>handleChangeValue(e)} value={url}/>
    <button onClick={handleAnalyze}>Analyze</button>
    <button onClick={handleGenerate}>Generate</button>

    
    </>
  )
}

export default App
