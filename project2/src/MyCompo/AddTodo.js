import React, { useState} from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");


    const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Description cannot br black");
    }
    // props.addTodo(title, desc);
    }
    return (
        <>
        <div classNameName='container my-3'>

        <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Fist Name</label>
                    <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Firstname" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Decription</label>
                    <input type="text" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
        </>
    );
}

export default AddTodo;
