import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useState } from 'react'
export default function Button({link = '', ableToCopy = false, text, textToCopy='', margin = '1rem 0', width = '100%', bgColor = '#5FA8FF', color = '#FFF'}){
  const [state,setState] = useState({
    isCopied: false
  })  
  function makeButton(text){
    return     <button 
      style={
        {
          width,
          backgroundColor: bgColor,
          borderRadius: 12,
          color,
          padding: '1rem',
          borderStyle: 'none',
          margin,
          fontSize: '14pt',
          cursor: 'pointer'
        }
      }
    >{state.isCopied ? 'Copiado!': text}</button>
    
  }
  return(
    <>
    {link.length > 0 && <a href={link}>
    {makeButton(text)}
    </a>}

    {link.length == 0 && ableToCopy &&
      <CopyToClipboard 
      text={textToCopy}
      onCopy={()=>{setState({isCopied: true})}}>
        {makeButton(text)}
      </CopyToClipboard>
      
    }

{link.length == 0 && !ableToCopy && makeButton(text)}

    </>
  )
}