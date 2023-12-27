import './Model.css'
import { IoMdCloseCircle } from "react-icons/io";

const Model = ({isOpen, onClose, children}) => {
  return (
   <>
   {isOpen && <div className='popup-box'>
   <IoMdCloseCircle className='close-icon' onClick={onClose}/>
   <div>
    <form action="">
      <label htmlFor="name">Name</label>
        <input type="text" name='name'/>
      <label htmlFor="email">Email</label>
        <input type="text" name='email'/>
        <button type='submit'>Add Contact</button>

    </form>
   </div>
    </div>    
    }
    <div className='blur'></div>
   </>
  )
}

export default Model