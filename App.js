// const heading = React.createElement("h1" , {id:"heading"} , "Hello World from react");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent  = React.createElement("h1" , {id:"parent"} , [
    React.createElement("h1" , {id:"parent"} , [
        React.createElement("h1" , {} , "H1 in child1"),
        React.createElement("h2" , {} , "H2 in child1"),
    ]),
    React.createElement("h1" , {id:"child2"} , [
        React.createElement("h1" , {} , "H1 in child2"),
        React.createElement("h2" , {} , "H2 in child2"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

