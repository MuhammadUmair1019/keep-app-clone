

function Note({title,contents,id,onDelete}) {

    return(
        <>
            <div className="note-div">
                <div className="main-note">
                    <h2 className="title"> {title}</h2>
                    <p className="note"> {contents}</p>
                    <button className="btn-del" onClick={() => onDelete(id)} > X </button>
                </div>
            </div>
        </>
    )
}


export default Note;