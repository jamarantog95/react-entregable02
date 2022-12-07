import React from 'react'
import GridLoader from "react-spinners/GridLoader";


const Loading = () => {
    return (
        // <h1>Loading ...</h1>
        <div className="container-load">
            <GridLoader color="#36d7b7" />
        </div>
    )
}

export default Loading