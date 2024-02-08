const settings = new URLSearchParams(window.location.search)


function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    size = (canvas.width**2 + canvas.height**2)**0.5
}
// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "Beach House" },
    { id: 2, label: "Catacombs" },
    { id: 3, label: "Cavern" },
    { id: 4, label: "Chess" },
    { id: 5, label: "Classroom 1917" },
    { id: 6, label: "Consumerism" },
    { id: 7, label: "Drainage System" },
    { id: 8, label: "Drowned" },
    { id: 9, label: "Dune" },
    { id: 10, label: "Failure" },
    { id: 11, label: "Far Below" },
    { id: 12, label: "Fidelity" },
    { id: 13, label: "Frigid" },
    { id: 14, label: "Garden" },
    { id: 15, label: "Great Hall" },
    { id: 16, label: "Home 3" },
    { id: 17, label: "Hospital" },
    { id: 18, label: "Interior" },
    { id: 19, label: "Laboratory" },
    { id: 20, label: "Marble Gallery" },
    { id: 21, label: "Northtorn" },
    { id: 22, label: "Obsidian Gallery" },
    { id: 23, label: "Office" },
    { id: 24, label: "Outskirts" },
    { id: 25, label: "Paradoxical" },
    { id: 26, label: "Patience" },
    { id: 27, label: "Patients" },
    { id: 28, label: "Preserve" },
    { id: 29, label: "Public Urinal" },
    { id: 30, label: "Punishment Corner" },
    { id: 31, label: "Sandland" },
    { id: 32, label: "Shoreline" },
    { id: 33, label: "Shroomcave" },
    { id: 34, label: "Teivel" },
    { id: 35, label: "The Mist" },
    { id: 36, label: "The Room" },
    { id: 37, label: "The Silence" },
    { id: 38, label: "The Woods" },
    { id: 39, label: "Tomb" },
    { id: 40, label: "Vein" },
    { id: 41, label: "Void" },
    { id: 42, label: "Woods II" },
]);

dual = false

// create an array with edges
var raw_edges = [
    // Beach House
    {from: 1, to: 2, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Beach House <-> Catacombs
    {from: 1, to: 32, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Beach House <-> Catacombs
    // Cavern (Catacombs omitted - all connections exhausted) 
    {from: 3, to: 7, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Cavern <-> Drainage System
    {from: 3, to: 11, arrows:{to:{enabled: true}}}, // Cavern -> Far Below
    {from: 3, to: 18, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Cavern <-> Interior
    {from: 3, to: 19, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Cavern <-> Laboratory
    {from: 3, to: 33, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Cavern <-> Shroomcave
    // Chess
    {from: 4, to: 14, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Chess <-> Garden
    // Classroom 1917
    {from: 5, to: 10, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Classroom 1917 <-> Failure
    {from: 5, to: 29, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Classroom 1917 <-> Public Urinal
    // Consumerism
    {from: 6, to: 23, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Consumerism <-> Office
    // Drainage System
    {from: 7, to: 8, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drainage System <-> Drowned
    {from: 7, to: 29, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drainage System <-> Public Urinal
    // Drowned
    {from: 8, to: 14, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drowned <-> Garden
    {from: 8, to: 32, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drowned <-> Shoreline
    {from: 8, to: 35, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drowned <-> The Mist
    {from: 8, to: 42, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Drowned <-> Woods II
    // Dune
    {from: 9, to: 31, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Dune <-> Sandland
    // Failure
    {from: 10, to: 19, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Failure <-> Laboratory
    // Far Below
    {from: 11, to: 34, arrows:{to:{enabled: true}}}, // Far Below -> Tievel
    // Fidelity
    {from: 12, to: 14, arrows:{to:{enabled: true}}}, // Fidelity -> Garden
    // Frigid
    {from: 13, to: 21, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Frigid <-> Northtorn
    {from: 13, to: 24, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Frigid <-> Outskirts
    {from: 13, to: 35, arrows:{to:{enabled: true}}}, // Frigid -> The Mist
    // Garden
    {from: 14, to: 38, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Garden <-> The Woods
    // Great Hall
    {from: 15, to: 12, arrows:{to:{enabled: true}}}, // Great Hall -> Fidelity
    {from: 15, to: 16, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Great Hall <-> Home 3
    {from: 15, to: 26, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Great Hall <-> Patience
    {from: 15, to: 41, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Great Hall <-> Void
    // Home 3
    {from: 16, to: 18, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Home 3 <-> Interior
    {from: 16, to: 20, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Home 3 <-> Marble Gallery
    {from: 16, to: 38, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Home 3 <-> The Woods
    // Hospital
    {from: 17, to: 23, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Hospital <-> Office
    // Interior
    {from: 18, to: 36, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Interior <-> The Room
    {from: 18, to: 30, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Interior <-> Punishment Corner
    // Laboratory
    {from: 19, to: 23, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Laboratory <-> Office
    {from: 19, to: 24, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Laboratory <-> Outskirts
    {from: 19, to: 27, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Laboratory <-> Patients
    {from: 19, to: 28, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Laboratory <-> Preserve
    // Marble Gallery
    {from: 20, to: 25, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Marble Gallery <-> Paradoxical
    // Obsidian Gallery (Northtorn omitted - all connections exhausted)
    {from: 22, to: 25, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Obsidian Gallery <-> Paradoxical
    // Outskirts (Office omitted - yeah)
    {from: 24, to: 40, arrows:{to:{enabled: true}}}, // Outskirts -> Vein
    // Preserve (Paradoxical, Patience, Patients omitted)
    {from: 28, to: 1, arrows:{to:{enabled: true}}}, // Preserve -> Beach House
    // Sandland (Public Urinal, Punishment Corner omitted)
    {from: 31, to: 32, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Sandland <-> Shoreline
    {from: 31, to: 39, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Sandland <-> Tomb
    // Shroomcave (Shoreline omitted)
    {from: 33, to: 42, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // Shroomcave <-> Woods II
    // Teivel
    {from: 34, to: 26, arrows:{to:{enabled: true}}}, // Teivel -> Patience
    // The Mist
    {from: 35, to: 37, arrows:{to:{enabled: dual}, from:{enabled: dual}}}, // The Mist <-> The Silence 
    // The Woods (The Room, The Silence omitted)
    {from: 38, to: 3, arrows:{to:{enabled: true}}}, // The Woods -> Cavern
    {from: 38, to: 28, arrows:{to:{enabled: true}}}, // The Woods -> Preserve
    // Vein (Tomb omitted)
    {from: 40, to: 17, arrows:{to:{enabled: true}}}, // Vein -> Hospital
    // Woods II (Void omitted)
    {from: 42, to: 36, arrows:{to:{enabled: true}}}, // Woods II -> The Room
]

if (settings.get('teivel') == 'false') {
    raw_edges.splice(47, 1) // increase the 47 if items are added before Exit Teivel
}

edges = new vis.DataSet(raw_edges)
checkNum = function(name) {
    let val = settings.get(name)
    if (!isNaN(val) && !isNaN(parseFloat(val))) {
        return parseFloat(val)
    }
}

checkBool = function(name) {
    val = settings.get(name)
    if (val == 'true') return true
    else if (val == 'false') return false
}

// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    edges: {
        color: 'red',
        smooth: checkBool('physics') ?? true
    },
    physics: {
        enabled: checkBool('physics') ?? true,
        barnesHut: {
            theta: checkNum('theta') ?? 0.5,
            gravitationalConstant: checkNum('grav') ?? -2000,
            centralGravity: checkNum('centGrav') ?? 0.3,
            springLength: checkNum('springLen') ?? 95,
            springConstant: checkNum('springConst') ?? 0.04,
            damping: checkNum('damping') ?? 0.09,
        },
        maxVelocity: checkNum('maxVel') ?? 50,
        minVelocity: checkNum('minVel') ?? 0.1
    }
};
var network = new vis.Network(container, data, options);
