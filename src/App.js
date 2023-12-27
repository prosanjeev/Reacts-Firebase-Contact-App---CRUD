import './App.css';
import NavBar from './components/NavBar';
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Model from './components/Model';


function App() {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const open = ()=> {
    setIsOpen(true);
  }
  const onClose = ()=> {
    setIsOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const ContactRef =collection(db, "contact")
        const contactsSnapshot = await getDocs(ContactRef);
        const contactLists = contactsSnapshot.docs.map((doc)=>{
          return{
            ...doc.data(), id:doc.id
          };
          
        });
          setContacts(contactLists)
      } catch(error){}

    };
    getContacts();
  },[])





  return (
<>
    <div className="App">
      <NavBar />
      <div className='flex'>
        <div className='contant'>
          <IoSearch className='search-icon' />
          <input type='text'></input>
        </div>
        <div  className='plus'>
          <FaCirclePlus onClick={open} />
        </div>
      </div>
      {contacts.map((contact)=>(
          <div key={contact.id} className='contact-box'>
            <FaRegUserCircle className='user-icon' />
            <div className='contact-box-contant'>
            <h3>{contact.Name}</h3>
            <p>{contact.Email}</p>
              </div>
              <div className='edit-delete-icons'>
              <RiEditCircleLine />
              <MdDelete />
              </div>

          </div>
         

      ))}
      <Model isOpen={isOpen} onClose={onClose}>
        hi
      </Model>
    </div>
    </>
  )

      }
export default App;
