import React from 'react'

function Form() {
    return (
        <div className='todo-form brs-5 bx-shd dfr p15'>
            <input type="text" className="inputfield brs-5 bx-shd df p15" placeholder='enter task' />
            <button className="btn brs-5 bx-shd dfr">Add</button>
        </div>

    )
}

export default Form;