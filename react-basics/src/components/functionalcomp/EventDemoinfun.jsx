import React from 'react'

const EventDemoinfun = () => {
    let handleAdd = () => {
        console.log("add function called")
    }
    let handleAdd1 = (a,b)=>console.log(a+b)
    return (
        <>
            <button type="button" className="btn btn-primary me-3" onClick={() => alert("button clicked")}
            > Button</button>

            <button type="button" className="btn btn-primary me-3" onClick={handleAdd}
            > Add </button>

            <button type="button" className="btn btn-primary me-3" onClick={() => handleAdd()}
            > Add </button>


            <button type="button" className="btn btn-primary me-3" onClick={() => handleAdd1(2, 3)}
            > Add </button>
        </>
    )
}

export default EventDemoinfun
