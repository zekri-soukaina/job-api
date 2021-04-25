import React from "react";

import BoxJob from "../Components/BoxJob/BoxJob";
import { useDataContext } from "./Context";

export default function Availability() {
  const { state, seeMore } = useDataContext();

  const moreData = [...state, ...seeMore];

  moreData.sort(function (a, b) {
    return new Date(b.created) - new Date(a.created);
  });
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-around",
          flexFlow: "wrap",
        }}>
        {moreData ? (
          moreData.map((job) => {
            var timeCreation = job.created;
            timeCreation = timeCreation.split("T")[0];
            var fixedTitle = job.title;
            fixedTitle = fixedTitle.replace(/(<([^>]+)>)/gi, "");

            return (
              <BoxJob
                key={job.id}
                id={job.id}
                category={job.category.label}
                company={job.company.display_name}
                created={timeCreation}
                location={job.location.display_name}
                redirect={job.redirect_url}
                salary_max={job.salary_max}
                salary_min={job.salary_min}
                title={fixedTitle}
                description={job.description}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}
