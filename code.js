function convertToAdjMatrix(adjList) {
    if(adjList.length < 1) {
        return [];
    }
else {
    var adjMatrix = [];
    for(let i = 0; i < adjList.length; i++) {
        var edges = [];
        for(let j = 0; j < adjList.length; j++) {
            if(adjList[i][j] == 1) {
                edges.push(j);
            }
        }
        list.push(edges);
        }
    return adjMatrix;          
        }
}
