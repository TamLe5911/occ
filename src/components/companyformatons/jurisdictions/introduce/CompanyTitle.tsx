import Introduce from "./Introduce";

type ICompanyTitle = {
    title: string;
    img?: string;
  };
  
  const CompanyTitle = (props: ICompanyTitle) => (
  
      <div className="container mx-auto">
        <div className="px-[11rem] py-10">
          <Introduce title={props.title} />
        </div>
      </div>

  );
  
  export { CompanyTitle };