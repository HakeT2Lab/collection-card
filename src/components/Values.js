import value from "../App";
import "./card-background.css"
import "./card_border.css";
import "./flex-componet.css";
import "./card-width.css";
import "./alignment.css"
import "./npc-image.css"

import "./stats_styles/atk_def.css";
import "./stats_styles/name.css"

import Avatar from "@mui/material/Avatar";
import { green, red, blue } from "@mui/material/colors";
import ReactDOM from 'react-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Value({ title, hp, image, atk, def, flavor_text }) {
  return (
    <div className="background">
  
      <div className="card_border">
        <h2 className="name center">
          <Stack spacing={2} direction="row">
            <Button variant="text">{title}</Button>          
          </Stack>
        </h2>
        <div className="flex_componet">
          <p className="right">HP</p>
          <Avatar sx={{ bgcolor: green[500] }}>{hp}</Avatar>
        </div>

        <img className="size" src={image} />

        <div className="right">
          {flavor_text.map((flavor_text) => {
            return <li key={flavor_text}> {flavor_text} </li>;
          })}
        </div>

        <div className="flex_componet">
          <div className="card-width"></div>
          <div className="card-width"></div>
          <div className="flex_componet atk_def">
            <Avatar sx={{ bgcolor: red[500] }}>{atk}</Avatar>
            <p>ATK</p>
          </div>
          <div className="flex_componet atk_def">
            <Avatar sx={{ bgcolor: blue[500] }}>{def}</Avatar>
            <p>DEF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function myFunction() {
  const test = () => {
    alert("Test");
  }

  return (
    <button onClick={test}>This is a test</button>
  );
}
ReactDOM.render(<myFunction />, document.getElementById('root'));




export default Value;
