var raw_nodes = [
    { id: 1, label: "Beach House" },
    { id: 2, label: "Catacombs" },
    { id: 3, label: "Cavern" },
    { id: 4, label: "Chess" },
    { id: 5, label: "Classroom" },
    { id: 6, label: "Consumerism" },
    { id: 7, label: "Desolate Commons" },
    { id: 8, label: "Drainage System" },
    { id: 9, label: "Drowned" },
    { id: 10, label: "Dune" },
    { id: 11, label: "Emporium" },
    { id: 12, label: "Failure" },
    { id: 13, label: "Far Below" },
    { id: 14, label: "Fidelity" },
    { id: 15, label: "Forlorn" },
    { id: 16, label: "Frigid" },
    { id: 17, label: "Garden" },
    { id: 18, label: "Great Hall" },
    { id: 19, label: "Have a Seat" },
    { id: 20, label: "Home 3" },
    { id: 21, label: "Hospital" },
    { id: 22, label: "Interior" },
    { id: 23, label: "Laboratory" },
    { id: 24, label: "Loss" },
    { id: 25, label: "Marble Gallery" },
    { id: 26, label: "Northtorn" },
    { id: 27, label: "Obsidian Gallery" },
    { id: 28, label: "Office" },
    { id: 29, label: "Outskirts" },
    { id: 30, label: "Paradoxical" },
    { id: 31, label: "Patience" },
    { id: 32, label: "Patients" },
    { id: 33, label: "Preserve" },
    { id: 34, label: "Prison" },
    { id: 35, label: "Public Urinal" },
    { id: 36, label: "Punishment Corner" },
    { id: 37, label: "Red Zone" },
    { id: 38, label: "Room" },
    { id: 39, label: "Sandland" },
    { id: 40, label: "Shoreline" },
    { id: 41, label: "Shroomcave" },
    { id: 42, label: "Teivel" },
    { id: 43, label: "The Mist" },
    { id: 44, label: "The Silence" },
    { id: 45, label: "The Woods" },
    { id: 46, label: "Tomb" },
    { id: 47, label: "Vanity" },
    { id: 48, label: "Vein" },
    { id: 49, label: "Void" },
    { id: 50, label: "Woods II" },
]

const dual = false
// parameter i've left in for the sake of it
// (makes bidirectional edges look like <-> instead of ---)
var raw_edges = [
    {from: 1, to: 40, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Beach House <-> Shoreline
    {from: 2, to: 40, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Catacombs <-> Shoreline
    {from: 3, to: 8, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Cavern <-> Drainage System
    {from: 3, to: 41, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Cavern <-> Shroomcave
    {from: 3, to: 13, arrows:{to:{enabled: true}}, spatial: true}, // Cavern -> Far Below
    {from: 3, to: 22, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Cavern <-> Interior
    {from: 3, to: 23, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Cavern <-> Laboratory
    {from: 3, to: 28, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Cavern <-> Office
    {from: 4, to: 17, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Chess <-> Garden
    {from: 4, to: 37, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Chess <-> Red Zone
    {from: 5, to: 35, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Classroom <-> Public Urinal
    {from: 5, to: 12, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Classroom <-> Failure
    {from: 6, to: 28, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Consumerism <-> Office
    {from: 6, to: 47, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Consumerism <-> Vanity
    {from: 7, to: 37, arrows:{to:{enabled: true}}, spatial: true}, // Desolate Commons -> Red Zone
    {from: 8, to: 9, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drainage System <-> Drowned
    {from: 8, to: 35, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drainage System <-> Public Urinal
    {from: 9, to: 17, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drowned <-> Garden
    {from: 9, to: 40, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drowned <-> Shoreline
    {from: 9, to: 43, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drowned <-> The Mist
    {from: 9, to: 50, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Drowned <-> Woods II
    {from: 10, to: 39, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Dune <-> Sandland
    {from: 10, to: 11, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Dune <-> Emporium
    {from: 11, to: 27, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Emporium <-> Obsidian Gallery
    {from: 11, to: 15, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Emporium <-> Forlorn
    {from: 12, to: 23, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Failure <-> Laboratory
    {from: 13, to: 42, arrows:{to:{enabled: true}}, spatial: true}, // Far Below -> Teivel
    {from: 14, to: 17, arrows:{to:{enabled: true}}, spatial: false}, // Fidelity -> Garden
    {from: 15, to: 21, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Forlorn <-> Hospital
    {from: 15, to: 34, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Forlorn <-> Prison
    {from: 15, to: 19, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Forlorn <-> Have a Seat
    {from: 16, to: 29, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Frigid <-> Outskirts
    {from: 16, to: 43, arrows:{to:{enabled: true}}, spatial: true}, // Frigid -> The Mist
    {from: 16, to: 26, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Frigid <-> Northtorn
    {from: 17, to: 45, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Garden <-> The Woods
    {from: 18, to: 31, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Great Hall <-> Patience
    {from: 18, to: 20, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Great Hall <-> Home 3
    {from: 18, to: 14, arrows:{to:{enabled: true}}, spatial: true}, // Great Hall -> Fidelity
    {from: 18, to: 49, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Great Hall <-> Void
    {from: 19, to: 7, arrows:{to:{enabled: true}}, spatial: false}, // Have a Seat -> Desolate Commons
    {from: 20, to: 45, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Home 3 <-> The Woods
    {from: 20, to: 22, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Home 3 <-> Interior
    {from: 20, to: 25, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Home 3 <-> Marble Gallery
    {from: 21, to: 28, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Hospital <-> Office
    {from: 21, to: 24, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Hospital <-> Loss
    {from: 21, to: 44, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Hospital <-> The Silence
    {from: 22, to: 36, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Interior <-> Punishment Corner
    {from: 22, to: 38, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Interior <-> Room
    {from: 23, to: 29, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Laboratory <-> Outskirts
    {from: 23, to: 33, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Laboratory <-> Preserve
    {from: 23, to: 28, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Laboratory <-> Office
    {from: 23, to: 32, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Laboratory <-> Patients
    {from: 25, to: 30, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Marble Gallery <-> Paradoxical
    {from: 27, to: 30, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Obsidian Gallery <-> Paradoxical
    {from: 29, to: 48, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Outskirts <-> Vein
    {from: 30, to: 47, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Paradoxical <-> Vanity
    {from: 33, to: 1, arrows:{to:{enabled: true}}, spatial: true}, // Preserve -> Beach House
    {from: 34, to: 37, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Prison <-> Red Zone
    {from: 34, to: 16, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Prison <-> Frigid
    {from: 39, to: 46, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Sandland <-> Tomb
    {from: 39, to: 40, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Sandland <-> Shoreline
    {from: 41, to: 50, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // Shroomcave <-> Woods II
    {from: 42, to: 31, arrows:{to:{enabled: true}}, spatial: false}, // Teivel -> Patience
    {from: 43, to: 11, arrows:{to:{enabled: true}}, spatial: true}, // The Mist -> Emporium
    {from: 43, to: 44, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: true}, // The Mist <-> The Silence
    {from: 45, to: 3, arrows:{to:{enabled: true}}, spatial: true}, // The Woods -> Cavern
    {from: 45, to: 33, arrows:{to:{enabled: true}}, spatial: false}, // The Woods -> Preserve
    {from: 46, to: 50, arrows:{to:{enabled: dual}, from:{enabled: dual}}, spatial: false}, // Tomb <-> Woods II
    {from: 48, to: 21, arrows:{to:{enabled: true}}, spatial: true}, // Vein -> Hospital
    {from: 50, to: 38, arrows:{to:{enabled: true}}, spatial: true}, // Woods II -> Room
]
