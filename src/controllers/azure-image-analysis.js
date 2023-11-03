// Importa la biblioteca dotenv

const analyzeImage = async (img) => {
    const url = `${import.meta.env.VITE_POINT}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people`;
  
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": import.meta.env.VITE_KEY,
      },
  
      body: JSON.stringify({ url: img }), // body data type must match "Content-Type" header
    });
    //PROBANDO
  
    const response = await data.json();
   return response;
  };
  export default analyzeImage;
  