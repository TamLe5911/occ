
import React, { Fragment } from "react";
import { OrderNows } from "../../shares/components/button/OrderNows";
import { TitleChildren } from "../../shares/components/title/TitleChildren";
import { data } from "../../utils/data";

function Fees() {
  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10">
        {data.fessService.map((infos) => (
          <Tables key={infos.id} {...infos} />
        ))}
      </div>
    </div>
  );
}

const Tables = (infos: any) => (
 
   <Fragment >
    <div className="mb-6">
      <div className="mb-5">
        <TitleChildren
          title={infos.title}
          img={"../share/Setting.png"}
        ></TitleChildren>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-sm">
            <th className="border border-slate-200 p-[21px] uppercase font-normal">
              Period
            </th>
            <th className="border border-slate-200 uppercase font-normal">
              Fee (US$/month)
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {infos.tables.map((infos: any) => (
            <Fragment key={infos.type}>
               <tr
             
              className="text-sm border-slate-200 border-t  bg-fees-backround cursor-pointer"
            >
              <td className="border border-slate-200 text-start p-3  ">
                <a href="" className="text-black">
                  {infos.type}
                </a>
              </td>
              <td className="border border-slate-200 text-center ">
                {infos.number}
              </td>
            </tr>
            </Fragment>
           
          ))}
        </tbody>
      </table>
      <div className="decs font-normal text-lg mt-3 mb-3">
        <span className="font-medium"> Service Retainer: 2* Unit price </span>
        (If you make full payment for the contract period, you do not need to
        pay Service retainer. If you pay monthly, you have to pay Service
        retainer and Service retainer fee will be refunded to clients after
        contract terminated within 5 working days).
      </div>
      <OrderNows title={"Order Now"} width={320}></OrderNows>
    </div></Fragment>
  );


export default Fees;
