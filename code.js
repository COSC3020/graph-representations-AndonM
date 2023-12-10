function convertToAdjList(adjMatrix) {
    if(adjMatrix.length < 1) {
        return [];
    }
    else {
        var adjList = [];
        for(let i = 0; i < adjMatrix.length; i++) {
            var edges = [];
            for(let j = 0; j < adjMatrix.length; j++) {
                if(adjMatrix[i][j] == 1) {
                    edges.push(j);
                }
            }
            adjList.push(edges);
            }
        return adjList;          
        }
}
