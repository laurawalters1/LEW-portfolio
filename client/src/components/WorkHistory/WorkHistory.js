import React from "react";
import pic from "../../images/jumar.png";
import "./WorkHistory.css";
export default function WorkHistory({
  title,
  imageUrl,
  description,
  date,
  alignment,
  techUsed,
}) {
  return (
    <section
      id="work-history-1"
      className={`w-75 ${alignment}`}
      name="work-history-1"
    >
      <hr className="my-5"></hr>
      {techUsed.map((t) => (
        <i className={`${t} fs-2 i mx-1`}></i>
      ))}
      {alignment == "text-end" ? (
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div>
            <img class="w-100" src={imageUrl} alt="Card image cap" />
          </div>
          <div>
            <h3>{title}</h3>

            <small className="text-pink">{date}</small>
            <div className="mt-2">{description}</div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div>
            <h3>{title}</h3>

            <small className="text-pink">{date}</small>
            <div className="mt-2">{description}</div>
          </div>
          <div>
            <img class="w-100" src={imageUrl} alt="Card image cap" />
          </div>
        </div>
      )}
    </section>
  );
}
