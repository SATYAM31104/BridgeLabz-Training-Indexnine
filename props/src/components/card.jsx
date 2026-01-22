import React from "react";
import { BookMarked } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.brandLogo}
          alt="Company logo"
        />
        <button>
          Save <BookMarked size={16} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.companyName} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <span>{props.tag1}</span> <span>{props.tag2}</span>
        
      </div>

      <div className="bottom">
        <h3>{props.location}</h3>
        <h3>${props.pay}/hr</h3>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;