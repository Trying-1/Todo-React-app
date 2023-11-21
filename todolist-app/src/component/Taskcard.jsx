import React from 'react'

function Taskcard(props) {
    return (
        <div>
            <div className="taskcard brs-5 bx-shd grd">
                <div className="status brs-5 bx-shd dfr btn">{props.status}</div>
                <h3 className="taskname">{props.title}</h3>
                <div className="operation dfr">
                    <div className="btn brs-5 bx-shd dfr">Edit</div>
                    <div className="btn brs-5 bx-shd dfr">Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Taskcard