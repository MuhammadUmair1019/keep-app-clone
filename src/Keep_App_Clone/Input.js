import {useState} from 'react';

function Input(props) {

    const [user, setUser] = useState({
        title : "",
        content : ""
    });

    const [open, setOpen] = useState(false)

    let updateInput = ({target : {name,value}}) => setUser({...user, [name] : value})
    
    let onSubmit = () => {
        props.addNote(user)
        setUser({
        title : "",
        content : ""
        })
        
    }

    let onOpen = () => {
        setOpen(true)
    }

    let onClose = () => {
        setOpen(false)
    
    }
    
    return(
        <>
            <div className="main-input" onDoubleClick={onClose}>
                <div className="title-input" onClick={onOpen}>
                    {
                    (open == true ) ? (
                    <input type="text" placeholder="Title" name="title" value={user.title} onChange={updateInput}/>
                    ) : null
                    }
                    <textarea rows="4" cols="40" name="content" value={user.content} placeholder="Take a note" onChange={updateInput}></textarea>
                    <button className="btn" onClick={onSubmit}>+</button>
                </div>
            </div>
        </>
    )
}


export default Input;