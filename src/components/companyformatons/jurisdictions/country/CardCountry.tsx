
/* eslint-disable @next/next/no-img-element */
const CardCountry = (datafile: any) => (
  <div className="w-full ">
  <div className="company">
    <img
      src={datafile.images}
      alt={datafile.title}
      className="rounded-t-lg"
    />
    <div className="bg-box-shadow p-4">
      <div className="h-36">
        <h2 className="text-lg bg-text-black font-semibold">
          {datafile.title}
        </h2>
        <ul className="bg-list-disc pl-6 mt-3">
          <li className="text-sm bg-text-dark">{datafile.decs}</li>
          <li className="text-sm bg-text-dark mt-1">{datafile.decs2}</li>
        </ul>
      </div>
      <p className="pl-2 text-right">
        <span className="text-2xl bg-text-dark">Form </span>
        <span className="text-2xl bg-text-black font-medium">US$ </span>
        <span className="text-2xl  font-medium bg-text-green">
          {datafile.price}
        </span>
      </p>
    </div>
  </div>
</div>
  );
  export { CardCountry };