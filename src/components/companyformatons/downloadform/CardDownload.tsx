import React from "react";

const CardDownload = () => (
  <div className="bg-[#F0F2F5] p-3 rounded-md">
    <h2 className="text-base font-medium">Application for Limited Company</h2>
    <div className="py-2">
    <p className="text-sm">Updated time</p>
    <p className="text-sm">15 May, 2022 - 15:05 (UTC+08:00)</p>
    <h3 className="text-base font-medium">PDF | 1.98 MB</h3>
    </div>
    <p className="text-sm py-2">Application form for Limited Company processing</p>
    <div className="flex bg-white rounded-md">
        <div>
            <img src="/share/qc-dload.png" alt="" />
        </div>
        <div className="grid conatiner mx-auto justify-center items-center">
            <a href="">
                <div className="flex justify-center">
                    <img src="/share/PDF.svg" alt="" />
                </div>
            <p className="pt-5">Download</p>
            </a>
        </div>
    </div>
  </div>
);

export { CardDownload };