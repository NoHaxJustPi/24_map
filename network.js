const settings = new URLSearchParams(window.location.search)

spatial = settings.get('spatial')
for (let i = 0; i < raw_edges.length; i++) {
    if (spatial == 'true') {
        if (!raw_edges[i].spatial) raw_edges.splice(i, 1)
    } else {
        if (spatial == 'physics') {
            if (!raw_edges[i].spatial) { 
                raw_edges[i].physics = false
                raw_edges[i].smooth = false
            }
        }
        raw_edges[i].color = raw_edges[i].spatial ? "black" : "red"
    }
}

// Forlorn - exceptional as a non-spatial *area*
if (spatial == 'true') raw_nodes.splice(14, 1)


edges = new vis.DataSet(raw_edges)
nodes = new vis.DataSet(raw_nodes)

// create a network
var container = document.getElementById("network");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    layout: {
        randomSeed: settings.get("seed") ?? undefined
    },
    configure: {
        filter: (option, path) => {
            return ((path.indexOf("physics") !== -1) && (path.indexOf("wind") == -1) && option !== "wind") || path.indexOf("smooth") !== -1
        },
        showButton: false,
        container: document.getElementById("settings")
    }
};
var network = new vis.Network(container, data, options);

function toggle() {
    settingsDiv = document.getElementById("settings_container")
    hiderDiv = document.getElementById("hider")
    if (settingsDiv.style.display == "block") {
        settingsDiv.style.display = "none"
        hiderDiv.innerText = "▶"
    } else {
        settingsDiv.style.display = "block"
        hiderDiv.innerText = "◀"
    }
    network.fit({animation:{duration:100}});
}

window.onresize = function() {network.fit({animation:{duration:100}});}

allNodes = nodes.get({ returnType: "Object" });
network.on("click", neighbourhoodHighlight);
highlightActive = false
function neighbourhoodHighlight(params) {
    // if something is selected:
    if (params.nodes.length > 0) {
        highlightActive = true;
        var i, j;
        var selectedNode = params.nodes[0];
        var degrees = 2;

        // mark all nodes as hard to read.
        for (var nodeId in allNodes) {
            allNodes[nodeId].color = "rgba(200,200,200,1)";
        }
        var connectedNodes = network.getConnectedNodes(selectedNode);
        var allConnectedNodes = [];

        // get the second degree nodes
        for (i = 1; i < degrees; i++) {
            for (j = 0; j < connectedNodes.length; j++) {
                allConnectedNodes = allConnectedNodes.concat(
                network.getConnectedNodes(connectedNodes[j])
                );
            }
        }

        // all second degree nodes get a different color
        for (i = 0; i < allConnectedNodes.length; i++) {
            allNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
        }

        // all first degree nodes get their own color
        for (i = 0; i < connectedNodes.length; i++) {
            allNodes[connectedNodes[i]].color = undefined;
        }

        // the main node gets its own color
        allNodes[selectedNode].color = undefined;
    } else if (highlightActive === true) {
        // reset all nodes
        for (var nodeId in allNodes) {
            allNodes[nodeId].color = undefined;
        }
        highlightActive = false;
    }

    // transform the object into an array
    var updateArray = [];
    for (nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) {
            updateArray.push(allNodes[nodeId]);
        }
    }
    nodes.update(updateArray);
}
