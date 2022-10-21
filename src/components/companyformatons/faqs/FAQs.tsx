/* eslint-disable react-hooks/rules-of-hooks */

import { data } from "../../../utils/data";
import ListFaqs from "../feature/ListFaqs";


function FAQs() {
 
  const List = () => {
    return (
      <div className="">
        {data.faqs.map((infos) => (
          <ListFaqs key={infos.id} {...infos} />
        ))}
      </div>
    );
  };
  return (
    <div className="faqs">
      <div className="faqs_text ">
        <div className="container mx-auto flex flex-wrap gap-10">
          <div className="w-1/6 bg-[#F0F2F5] rounded-xl mt-5">
              <h2 className="text-right sticky top-full text-6xl text-white ">FAQs</h2>
          </div>
          <div className="w-[80%]">
            <div className="text-center ">
              <List></List>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
