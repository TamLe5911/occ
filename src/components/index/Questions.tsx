import { QuestionsForm } from "./questions/QuestionsForm";
import { QuestionsVideos } from "./questions/QuestionsVideos";

const Questions = () => {
  return (
    <div className="container mx-auto pt-10 xs:pt-3 xs:px-3 xs:bg-[#F5F5F7]">
      <div className="grid grid-cols-2 bg-shadow-video xs:grid-cols-1">
        <div className="flex items-center bg-video">
          <QuestionsVideos></QuestionsVideos>
        </div>
        <div className="desc  bg_form  p-10 xs:p-5">
          <h3 className="pb-5p text-2xl font-semibold">Leave Your Questions</h3>
          <QuestionsForm></QuestionsForm>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export { Questions };
