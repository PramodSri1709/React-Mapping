import React from "react";
import emojipedia from "../Emojipedia"
import Card from "./Card"


function entry(emojiTerm){

  return(

    <Card 
    
    key={emojiTerm.id}

    emoji = {emojiTerm.emoji}

    name = {emojiTerm.name}

    meaning = {emojiTerm.meaning.substring(0,100)}

    />

  );

}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      
      {emojipedia.map(entry)}

      </dl>
    </div>
  );
}

export default App;
