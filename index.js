import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",
    {id: "heading"},
    "i am very happy today cause i write my first promgram "
);
 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
