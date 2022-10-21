import React from 'react';
import { OccTitle } from '../../../shares/components/title/OccTitle';

import { VintageTitle } from '../../../shares/components/title/VintageTitle';
import { BankingAccount } from './BankingAccount ';

const BankingSolution = () => (
  <div className='xs:pt-8'>
    <div className=''>
      <div className='xs:px-3'>
       <OccTitle
        title="Account Opening Consultancy"
        icon="/share/icon-bangking-1.svg"
        titlemore="View full list"
      ></OccTitle>
      </div>
      <div className=''>
      <BankingAccount ></BankingAccount>
      </div>
    
    
    </div>
     
      <div className="columns-1 pb-10 xs:px-3 xs:border-b-8 xs:border-slate-200 xs:py-2">
        <VintageTitle
          title={"Merchant Account"}
          titlemore="View full list"
          icon="/share/icon-banking-2.svg"
          bg="unset"
          pd="0"
        ></VintageTitle>
       
      </div>
   
  </div>
);

export { BankingSolution };
