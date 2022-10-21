import React from "react";

type IDownloadTitle = {
  title: String;
};
const DownloadTitle = (props: IDownloadTitle) => (
  <div className="flex gap-5">
    <img src="/share/icon-download-form.svg" alt="" />
    <h2 className="text-xl mt-2">{props.title}</h2>
  </div>
);

export { DownloadTitle };