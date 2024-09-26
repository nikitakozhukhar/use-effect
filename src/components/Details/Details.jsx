import "./details.css";
import { useJsonFetch } from "../../hooks/useJsonFetch";
import { useEffect } from "react";

export function Details({selectedID}) {
  
  const { data, fetchController } = useJsonFetch({
    url: `/${selectedID}.json`,
    initialData: [],
    dataName: "details",
  });

  // useEffect(() => {
  //   return () => {
  //     if (fetchController) {
  //       fetchController.abort(); // Проверка наличия fetchController
  //     }
  //   };
  // }, [selectedID, fetchController]);

  if (!data) return <p>Loading...</p>;
  const { avatar, name, details = {} } = data;
  const { city, company, position } = details;


  return (
    <div className="details-wrapper">
      <div className="details-photo">
        <img src={`${avatar}`}/>
      </div>
      <div className="details-name">{name}</div>
      <div className="details-city">City: {city}</div>
      <div className="details-company">Company: {company}</div>
      <div className="details-position">Position: {position}</div>
    </div>
  )
}

