import React, { useEffect } from 'react'

const Model = ({model}) => {

  useEffect(()=>{
    document.body.style.overflowY = "hidden"
    return ()=>{document.body.style.overflowY = "scroll";}
  },[])
  return (
    <>
      <div className="model-bg" onClick={model}></div>
      <div className="model-in">
        <h1>Model</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae, nihil id excepturi iusto illo reiciendis officiis eveniet
          unde distinctio quas.
        </p>
        <button onClick={model}>close</button>
      </div>
    </>
  );
};

export default Model