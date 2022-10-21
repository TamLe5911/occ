import React, { useState } from "react";
import { SubmitGray } from "../../../shares/components/button/SubmitGray";

import { SelectForm } from "../../../shares/components/form/select";
import { data } from "../../../utils/data";

const QuestionsForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [optional, setOptional] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(data.Country1[0].value);
  const [communication, setCommunication] = useState(
    data.optionsContry2[0].value
  );
  const [about, setAbout] = useState(data.optionsContry2[0].value);
  const [inquiries, setInquiries] = useState(data.optionsContry2[0].value);
  const [country, setCountry] = useState(data.optionsContry2[0].value);
  // const [formData, setFormData] = React.useState({
  //   fullName: "",
  //   phone: "",
  //   email: "",
  //   optional: "",
  //   selectedValue: "",
  //   communication: "",
  //   about: "",
  //   inquiries: "",
  //   country: "",
  // });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    alert(
      `The name you entered was: ${fullName},${phone},${email},${optional},${phoneCountry},${communication},${about},${inquiries},${country}`
    );
  };

  return (
    <div>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3  css_input xs:pt-5">
            <label className="block">
              <span className=" block text-sm text-[#646464] font-medium">
                Full Name
              </span>
              <input
                type="text"
                name="text"
                className="mt-2 py-2 bg-white font-normal  placeholder-[#0154B8] text-base focus:outline-none  block w-full rounded-md"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </label>
          </div>
          <div className="columns-2 xs:columns-1 xs:pt-3">
            <div className="form-group css_input_select">
              <span className=" block text-sm text-[#646464] font-medium">
                Phone Number
              </span>

              <div className="flex flex-nowrap mt-2  bg-white box_select ">
                <div className="w-5/12 swlect_cs_top">
                  <div className="inline-block">
                    <SelectForm
                      instanceId={"select1"}
                      OptionLIst={data.Country1}
                      onChange={(e: any) => setPhoneCountry(e.value)}
                      value={phoneCountry}
                    ></SelectForm>
                  </div>
                </div>
                <input
                  type="phone"
                  name="phone"
                  className="font-normal  placeholder-[#0154B8] text-base focus:outline-none w-7/12 "
                  placeholder="0909979984"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
            </div>
            <div className="form-group mb-3 css_input xs:pt-5">
              <label className="block">
                <span className=" block text-sm text-[#646464] font-medium">
                  Email Address
                </span>
                <input
                  type="text"
                  name="text"
                  className="mt-2 py-2 bg-white font-normal  placeholder-[#0154B8] text-base focus:outline-none  block w-full rounded-md"
                  placeholder="Cor.Dulce586@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2  gap-5 pt-2 css_input xs:grid-cols-1" >
            <div className="form-group mb-3 grid-cols-2">
              <label className="block">
                <span className=" block text-sm text-[#646464] font-medium mb-2">
                  Communication Channel
                </span>
                <div className="swlect_cs">
                  <SelectForm
                    instanceId={"select1"}
                    OptionLIst={data.optionsContry2}
                    onChange={(e: any) => setCommunication(e.value)}
                    value={communication}
                  ></SelectForm>
                </div>
              </label>
            </div>
            <div className="form-group mb-3 grid-cols-2 css_input">
              <label className="block">
                <span className=" block text-sm text-[#646464] font-medium mb-2">
                  How did you know about us
                </span>
                <div className="swlect_cs">
                  <SelectForm
                    instanceId={"select2"}
                    OptionLIst={data.optionsContry2}
                    onChange={(e: any) => setAbout(e.value)}
                    value={about}
                  ></SelectForm>
                </div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5  xs:grid-cols-1 xs:pt-3">
            <div className="form-group mb-3 grid-cols-2 css_input">
              <label className="block">
                <span className=" block text-sm text-[#646464] font-medium mb-2">
                  Your Inquiries
                </span>
                <div className="swlect_cs">
                  <SelectForm
                    instanceId={"select3"}
                    OptionLIst={data.optionsContry2}
                    onChange={(e: any) => setInquiries(e.value)}
                    value={inquiries}
                  ></SelectForm>
                </div>
              </label>
            </div>
            <div className="form-group mb-3 css_input">
              <label className="block">
                <span className=" block text-sm text-[#646464] font-medium mb-2">
                  Your Country (Optional)
                </span>
                <div className="swlect_cs">
                  <SelectForm
                    instanceId={"select4"}
                    OptionLIst={data.optionsTime}
                    onChange={(e: any) => setCountry(e.value)}
                    value={country}
                  ></SelectForm>
                </div>
              </label>
            </div>
          </div>

          <div className="form-group mb-3 css_input xs:pt-5">
            <label className="block">
              <span className=" block text-sm text-[#646464] font-medium mb-2">
                Additional Request(s) (Optional)
              </span>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 py-2 bg-white font-normal  placeholder-[#0154B8] text-base focus:outline-none  block w-full rounded-md"
                placeholder="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                onChange={(e) => setOptional(e.target.value)}
                value={optional}
                rows={3}
              ></textarea>
            </label>
          </div>
          <div className="mt-5  text-center">
            <SubmitGray
              valid={
                !fullName || !phone || !email || !optional
                // ||
                // !phoneCountry ||
                // !country ||
                // !inquiries ||
                // !about ||
                // !communication
              }
              title={"Submit"}
              width={280}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export { QuestionsForm };
