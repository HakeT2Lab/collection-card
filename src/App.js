import "./App.css";
import Value from "./components/Values.js";
import guide from "./images/mob_images/guide.png";
import skeletron_day from "./images/mob_images/skeletron_day.jpg";
import queen_bee from "./images/mob_images/queen-bee.jpg";

//imported mui's
import Grid from "@mui/material/Grid";


function App() {
  const cards = [
    {
      title: "Queen Bee",
      hp: "3400",
      image:queen_bee,
      atk: "30",
      def: "8",
      flavor_text: ["Terror Of The Jungle", "Sure she's not a Hornet?", "Ahhhh... The Bees!!"],
    },

    {
      title: "Skeletron(Day)",
      hp: "4400",
      image:skeletron_day,
      atk: "1000",
      def: "9999",
      flavor_text: ["Guardian Of The Dungeon", "The One Shot Boss", "Dont..."],
    },

    {
      title: "Guide",
      hp: "250",
      image: guide,
      atk: "8",
      def: "250",
      flavor_text: ["Your First Friend", "Your Guide", "What Does This Doll Do?"],
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
              image={card.image}
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
