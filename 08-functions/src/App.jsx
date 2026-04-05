import React from 'react'

const App = () => {

  // function btnClicked() {
  //   console.log('Button is clicked')
  // }

  return (
    <div>
      {/* <button onClick={function(){
        console.log('Button is clicked');
      }}> Click Me </button>


      <div>
        <input onChange= {(elem) => {
          console.log(elem.target.value)
        }} type = "text" placeholder='Enter name'></input>


        <div onMouseMove= {(elem) => {
          console.log(elem.clientX);
        }} className='box'> */}


          <div onWheel = {(elem) => {
            console.log(elem.deltaY);
          }}>
            <div className='page1'></div>
            <div className='page2'></div>
            <div className='page3'></div>



          </div>
        {/* </div>
      </div> */}
    </div>

  )
}

export default App