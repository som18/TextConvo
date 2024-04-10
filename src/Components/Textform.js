import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick =()=>{
        let newText = text.toUpperCase();
        settext(newText);
        if (text.trim() === '') {
          setShowAlert(true); // Show the alert if the input is empty
          return;
        }
    };
    const handleloclick =()=>{
      let convertedtext = text.toLowerCase();
      settext(convertedtext); 
      if (text.trim() === '') {
        setShowAlert(true); // Show the alert if the input is empty
        return;
      }
  };
  const handleclear =()=>{
    let convertedtext = "";
    settext(convertedtext); 
    if (text.trim() === '') {
      setShowAlert(true); // Show the alert if the input is empty
      return;
    }
};
 
const handleCapitalize = () => {
  const capitalizedText = capitalizeText(text);
  settext(capitalizedText);
  if (text.trim() === '') {
    setShowAlert(true); // Show the alert if the input is empty
    return;
  }
};

const capitalizeText = (text) => {
  // Split the text into words
  const words = text.split(' ');

  // Capitalize each word
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return '';
    }
    const firstChar = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return `${firstChar}${restOfWord}`;
  });

  // Join the capitalized words back into a single string
  const capitalizedText = capitalizedWords.join(' ');
  return capitalizedText;
};
// const copyToClipboard = () => {
//   if (navigator.clipboard) {
//     // Modern browsers
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         alert('Text copied to clipboard');
//       })
//       .catch((error) => {
//         console.error('Failed to copy text: ', error);
//       });
//   } else {
//     // Fallback for older browsers
//     const textArea = document.createElement('textarea');
//     textArea.value = text;
//     document.body.appendChild(textArea);
//     textArea.select();
//     try {
//       document.execCommand('copy');
//       alert('Text copied to clipboard');
//     } catch (err) {
//       console.error('Failed to copy text: ', err);
//     } finally {
//       document.body.removeChild(textArea);
//     }
//   }
// };
const copyToClipboard = () => {
  if (text.trim() === '') {
    setShowAlert(true); // Show the alert if the input is empty
    return;
  }
  if (navigator.clipboard) {
    // Modern browsers
    navigator.clipboard.writeText(text)
      .then(() => {
        setButtonText('Copied');
        setButtonColor('grey');
        setTimeout(() => {setButtonText('Copy Text');setButtonColor('')}, 2000); // Reset the button text after 2 seconds
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setButtonText('Copied');
      setButtonColor('grey');
      setTimeout(() => {setButtonText('Copy Text');setButtonColor('')}, 2000); // Reset the button text after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

  
    const handleonchange =(event)=>{
        settext(event.target.value)
        setShowAlert(false);
        setButtonColor(''); // Reset the button color when input changes
    };
    
    const[text,settext] = useState('');
    const [buttonText, setButtonText] = useState('Copy Text');
    const [showAlert, setShowAlert] = useState(false);
    const [buttonColor, setButtonColor] = useState('');
    const buttonStyle = {
      backgroundColor: buttonColor,
    };

  return (
    <>
    <div className='Container my-3 mx-5'>
      {/* <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div> */}
      
          <div>
            {showAlert && (
              <div className="alert mx-10">
                <span>Please enter some text before clicking the button.</span>
                <button className='mx-2' onClick={() => setShowAlert(false)}>Dismiss</button>
              </div>
            
          )}
      </div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
       {/* <label for="exampleFormControlTextarea1" class="form-label">Enter Your Text Here</label> */}
          <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn active mx-2" onClick={handleupclick}>Convert To Uppercase</button>
      <button className="btn active mx-2" onClick={handleloclick}>Convert To Lowercase</button>
      <button className="btn active mx-2" onClick={handleCapitalize}>Capitalized Text</button>
      <button className="btn active" onClick={copyToClipboard} style={buttonStyle}>{buttonText}</button>
      <button className="btn active mx-2" onClick={handleclear}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} letters.</p>
      <p>{0.0008 * (text.split(" ").length-1)} minutes read </p>
      <p>{text.split(".").length-1} Sentences</p>
      <h2> Preview</h2>
      <p>{text.length>0?text:"Enter your text on the textbox above to preiview it"}</p>
      
    </div>
    </>
  )
}
