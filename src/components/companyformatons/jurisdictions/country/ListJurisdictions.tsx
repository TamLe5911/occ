import React, { createRef, useRef, useState, useEffect } from 'react';

import AsiaPacific from "./AsiaPacific";



function ListJurisdictions() {
  const scrollRefs = useRef<any[]>([]);
  const scrollNavRefs = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [srcollHeader, setScrollHeader] = useState(false)
  const list = ['Asia Pacific', 'Europe', 'Caribbean', 'Africa', 'America'];
  scrollRefs.current = [...Array.from(Array(5).keys())].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );
  const scrollTo = (index : any) => () => {
    scrollRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
    setActive(index );
  };
  const scrollHandler = () => {
    const scrollRefsElements = scrollRefs.current;
    scrollRefsElements.forEach((el, i) => {
      const rect = el.current.getBoundingClientRect();
      const elemTop = rect.top;
      const elemOffsetTop = el.current.offsetTop;
      if ( elemTop >= window.innerHeight) {
        let isVisible1 =
          elemOffsetTop === window.pageYOffset;
        if (isVisible1) {
          setActive(i);
        } 
      } else if( elemTop <= window.innerHeight) {
        let isVisible1 = elemTop < 10
        if(isVisible1){
          setActive(i);
        }
      }
      
    });
  };
   
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
    window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

 
  return (

      <div className="relative flex gap-4 container mx-auto " >
        <ul
        className={`${
          srcollHeader  ?  "fixed top-0 left-0" :  "w-1/12 transition delay-500 duration-300 ease-in-out"
        }`}
        
        ref={scrollNavRefs}
      >
        {list.map((item, i) => (
          <li className="" key={i}>
            <a
              href={`#s-${i}`}
              className={`${
                active === i && 'text-red-500' 
              }`}
              onClick={scrollTo(i)}
            >
               <div className="flex items-center justify-center">
                <img src="/share/earth-1.svg" alt="" />
              </div>
              <div className="flex items-center justify-center text-base mt-2">
              {item}
              </div>
              
            </a>
          </li>
        ))}
      </ul>
      <ul className="w-11/12 transition delay-500 duration-300 ease-in-out">
        {list.map((item, i) => (
          <li
            id={`#s-${i}`}
            key={i}
            ref={scrollRefs.current[i]}
            className=""
          >
            <h3 className='uppercase font-medium text-2xl'>{item}</h3>
            <div className='py-10'>
            <AsiaPacific  />
            </div>
          </li>
        ))}
      </ul>
      </div>
     
   
  );
}

export default ListJurisdictions;
