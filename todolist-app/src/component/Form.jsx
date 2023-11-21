import React from 'react'
import Taskcard from './Taskcard';

function Form() {
    return (
        <div className='dfc'>
            <h1>MY TODO</h1>
            <div className="todo-form brs-5 bx-shd dfr p15">
                <input type="text" className="inputfield brs-5 bx-shd df p15" placeholder='enter task' />
                <button className="Add btn brs-5 bx-shd dfr">Add</button>
            </div>
            <div className="tasklist dfc brs-5 bx-shd">
                <Taskcard title="Trade" status="Done"/>
                <Taskcard title="Code" status="Pending"/>
            </div>
        </div>

    )
}

export default Form;