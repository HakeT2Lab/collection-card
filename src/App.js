import "./App.css";
import Value from "./components/Values.js";

//imported mui's
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

function App() {
  const cards = [
    {
      title: "Card-name",
      hp: "???",
      atk: "??",
      def: "??",
      flavor_text: ["Flavor-text", "Goes", "Here"],
    },

    {
      title: "Card-name",
      hp: "???",
      atk: "??",
      def: "??",
      flavor_text: ["Flavor-text", "Goes", "Here"],
    },

    {
      title: "Card-name",
      hp: "???",
      atk: "??",
      def: "??",
      flavor_text: ["Flavor-text", "Goes", "Here"],
    },
  ];

  return (
    <Grid container spacing={2}>
      {
        cards.map((card)=> {
          return <Grid item xs={4}>
            <Value
              title={card.title}
              hp={card.hp}
              atk={card.atk}
              def={card.def}
              flavor_text={card.flavor_text}
            />
          </Grid>
        })
      }
    </Grid>
  );

  // return <Value title={card.title} hp={card.hp} atk={card.atk} def={card.def} flavor_text={card.flavor_text}  />;
}

export default App;
