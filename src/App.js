import Header from './Keep_App_Clone/Header';
import Input from './Keep_App_Clone/Input';
import Note from './Keep_App_Clone/Note';
import {useState} from 'react';


function App() {

    const [items, setItems] = useState([]);

    let addText = (user) => {
      setItems((preVal) => [...preVal, user])
    }


    let onClear = (id) => {
      setItems((preVal) => preVal.filter((currentData, index) =>  index !== id))
    }

    return(

      <>
        <Header/>
        <Input addNote={addText}/>
        {
          items.map((value,index) => <Note 
            key ={index}
            id={index}
            title ={value.title}
            contents ={value.content}
            onDelete = {onClear}
          />)
        }        
      </>

    )
}

export default App;