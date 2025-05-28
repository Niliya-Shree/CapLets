import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

function Profile({ darkMode }) {

  const [text, setText] = useState("before the click")

  const handleUpperClick = ()=>{                            
    let newText = text.toUpperCase();
    setText(newText)
    console.log("after click")
  }
  const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    console.log("after click")
  }
  const handleChange = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    console.log("after click")
  }

  return (
    <div className={`container profile-page ${darkMode ? 'dark' : ''}`}>

      <h2 className='mt-2'>Enter your text here :</h2>

      <div className='py-3'>
        <textarea value={text} onChange={handleChange} rows={6} cols={70} className="p-4 border rounded "></textarea>
      </div>

      <Button onClick={handleUpperClick} onChange={handleChange} variant="primary" className='mx-1'>Convert to UpperCase</Button>
      <Button onClick={handleLowerClick} onChange={handleChange} variant="primary" className='mx-1'>Convert to LowerCase</Button>
      <Button onClick={handleClearClick} onChange={handleChange} variant="primary" className='mx-1'>Clear</Button>

      <div className='p-2'>Total {text.split(" ").length} words and {text.length} characters.
      </div>

      <h2 className='py-3'>Preview</h2>
      <p>{text.length>0?text:"Enter some text above to preview it here."}</p>
    </div>
  )
}

export default Profile