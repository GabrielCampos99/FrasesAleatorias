import { useState, useEffect } from 'react';
import './App.scss';
import Content from './components/Content';


function App(props) {


  const [frase, setFrase] = useState('')
  const [isLoading, setIsLoading]= useState(false)
  
  useEffect(async()=>{
    setIsLoading(true)
      const response =  await fetch('https://api.adviceslip.com/advice');
      const data = await response.json()
      const {advice} = data.slip
      setIsLoading(false)
      setFrase(advice)
    
  },[])
  
  
  const handleClick = async (e)=>{
    e.preventDefault();
    setIsLoading(true)
    const response =  await fetch('https://api.adviceslip.com/advice');

    const data = await response.json()
    const {advice} = data.slip
    setIsLoading(false)
    setFrase(advice)
  }
  

  return (
    <div className='container'>
      <Content onClick={handleClick} frase={frase} isLoading={isLoading}/>
    </div>
  
  );
}

export default App;
