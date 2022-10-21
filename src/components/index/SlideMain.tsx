import { Banner } from "../../shares/components/banner/banner";

const SlideMain = () => {
  return (
    <>
      <div className="xs:hidden md:block">
        <Banner
          title={"Lorem ipsum dolor"}
          desc={"Lorem ipsum dolor sit amet"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit."
          }
          urlImage={"/share/banner.jpg"}
          titleButton={"link"}
        ></Banner>
      </div>
    </>
  );
};

export { SlideMain };
