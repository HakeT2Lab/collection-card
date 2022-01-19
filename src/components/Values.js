import value from "../App";
import "./card_border.css";
import "./flex-componet.css";

import Avatar from "@mui/material/Avatar";
import { green, red, blue } from "@mui/material/colors";

function Value({ title, hp, atk, def, flavor_text }) {
  return (
    <div className="card_border">
      <h2>{title}</h2>
      <div className = "flex_componet">
        <p>HP</p>
        <Avatar sx={{ bgcolor: green[500] }}>{hp}</Avatar>

      </div>

      <div>
          Picture goes here
      </div>



      <div>
        {flavor_text.map((flavor_text) => {
          return <li key={flavor_text}> {flavor_text} </li>;
        })}
      </div>

      <div className="flex_componet">
            <Avatar sx={{ bgcolor: red[500] }}>{atk}</Avatar>
            <p>ATK</p>
            <Avatar sx={{ bgcolor: blue[500] }}>{def}</Avatar>
            <p>DEF</p>
      </div>

    </div>
  );
}

export default Value;
