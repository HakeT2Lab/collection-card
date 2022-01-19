import value from "../App";

function Value({
    title,
    hp,
    atk,
    def,
    flavor_text
}){

    return(
      <div>
            <h2>
                {title}
            </h2>

            <h3>    
                {hp}
            </h3>

            <div>
            { flavor_text.map(
                    (flavor_text)=>{
                        return <li key={flavor_text}> {flavor_text} </li>
                    }
                )}
            </div>

            <ol>
                <li>  {atk}  </li>
                <li>  {def}  </li>
            </ol>
      </div>
    );
}


export default Value;