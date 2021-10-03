import { useState } from "react";
import { useHistory } from "react-router";
import NotesService from "../services/NotesService";


const AddNote = () => {
const[title, setTitle] = useState('');
const[body, setBody] = useState('');
const[category, setCategory] = useState('Neoro');
const history = useHistory();

const saveNote = (e) => {
    e.preventDefault();
    const note = {title, body, category};
    NotesService.create(note)
    .then(response => {
        console.log("Request Added Succesfuly", response.data);
        history.push("/");
    })
    .catch(error => {
        console.log('something went wrong', error);
    })
}

    return ( 
        <div className="create">
          <form>
        <div className="form-group">

            <label htmlFor="title">Request Title: <sup>*</sup></label>
            <input 
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="form-group">

            <label htmlFor="body">Request Description: <sup>*</sup></label>
            <textarea  
            id="body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
        </div>   
        <div className="form-group">

            <label htmlFor="category">Request Category:</label>
            <select
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
            <option value="neoro">Neoro</option>
            <option value="ortho">Ortho</option>
            <option value="surgery">Surgery</option>
            <option value="medical">Medical</option>        
            </select>
        </div>
        <div className="text-center">
        <button onClick={(e) => saveNote(e)}>Add Request</button>
        </div>
        
          </form>
        </div>
     );
}
 
export default AddNote;