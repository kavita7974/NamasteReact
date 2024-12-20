{/* <div id="root">
  <h1>This is div tag</h1>
</div> */}

//Above example using react
const heading = React.createElement(
    "h1",
    { id: "parent" },
    "This is div tag"
);

// <div id="parent">
//     <div id="child1">
//         <h1>This is h1 tag</h1>
//         <h2>This is h2 tag</h2>
//     </div>
//     <div id="child1">
//         <h1>This is h1 tag</h1>
//         <h2>This is h2 tag</h2>
//     </div>
// </div>

//Above HTML using react
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag ")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag ")]
    )]
);
console.log(heading) // This is object 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//At the end react js only Javascript
