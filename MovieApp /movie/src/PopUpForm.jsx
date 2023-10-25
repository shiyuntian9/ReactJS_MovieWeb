import { useState,useId } from 'react';
import {useRef} from 'react';
import Button from './Button';

import "./PopUpForm.css";

function PopUpForm() {
    const [title, setTitle]=useState("Sign up");
    const dialogRef = useRef();
    
    
    

    
    
    

    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] =useState(false);
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] =useState(false);
    const[isSubmitted, setIsSubmitted] = useState(false);
    const[isChecked, setIsChecked ]= useState(false);
    
    const id = useId();
    
    return (
      <>
        <Button className="pop-up-form-button" visual = "link" onClick={() => dialogRef.current.showModal()}>
          {title}
        </Button>
        <dialog ref={dialogRef}>
        <form className ="register-form" onSubmit={(e) => {
          e.preventDefault();
          const nameProblem=name.match(/[0-9]/);
          setIsNameInvalid(nameProblem);
          e.preventDefault();
          const emailProblem =!email.match(/@/);
          setIsEmailInvalid(emailProblem);
          const nameEmptyProblem = name.length===0;
          setIsNameEmpty(nameEmptyProblem);
          const emailEmptyProblem = name.length===0;
          setIsEmailEmpty(emailEmptyProblem);
          if(!nameProblem && !emailProblem && !nameEmptyProblem &!emailEmptyProblem){
          setIsSubmitted(true);
          }
        }}>
          <label htmlFor={`${id}-name`}>Name</label>
            {isNameEmpty &&
            <p>Please fill this field!</p>
            }
          {!isNameEmpty&&isNameInvalid &&
            <p>Do not use numbers in your name!</p>
            }   
        <input id={`${id}-name`} value={name} onInput ={ (e) =>{setName(e.target.value)}}
        />

        <label htmlFor ={`${id}-email`}>Email</label>
        {isEmailInvalid &&!isEmailEmpty&& <p>Please include '@' in the email!</p>}
        {isEmailEmpty &&
            <p>Please fill this field!</p>}
        <input id={`${id}-email`} value={email} onInput ={ (e) =>{setEmail(e.target.value)}}
        />
    
     <select type="text">
            <label>Select</label>
            <option value="">How would you rate our website?</option>
            <option value="five">5 Star</option>
            <option value="four">4 Star</option>
            <option value="three">3 Star</option>
            <option value="two">2 Star</option>
            <option value="one">1 Star</option>

        </select> 
        <label >
            <span>Do you want to receive our emails?</span>
            <input id="register-email" type="checkbox" className="register__checkbox" checked ={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}/>
        </label>
   


          <button className ="button" type="submit">Submit</button>
          {isSubmitted &&<p>Form submitted succesfully!</p>}
          <Button type="submit" onClick={() => 
            {setTitle("Hello "+name +  " !")
            dialogRef.current.close()}}>
          Close
          </Button>
          </form>
          
        </dialog>
  </>
  ); }
  export default PopUpForm;