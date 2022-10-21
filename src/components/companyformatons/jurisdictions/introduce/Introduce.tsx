import React from 'react'
type IIntroduce= {
  title:string;
}
function Introduce(props: IIntroduce) {
  return (
          <div className="">          
              <p className=" text-black text-center">
              {props.title}
              </p>
          </div>
  )
}

export default Introduce