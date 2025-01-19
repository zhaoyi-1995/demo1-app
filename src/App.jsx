
import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('你好')
  const handleData =  async () => {
    const res = await axios.get('https://my-project-name.zy492613075.workers.dev/')
    console.log(res)
    setText(res.data.content)
  }

  // useEffect(() => {
  //   handleData()
  // }, [])
 

  return (
    <>
      <button onClick={handleData}>获取数据</button>
      {text}
    </>
  )
}

export default App
