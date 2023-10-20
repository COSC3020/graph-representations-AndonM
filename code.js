// I THINK THIS IS CLOSE TO WHAT I NEED; HOWEVER, THE TESTING SUITE DOES NOT AGREE. I GOT A COUNTEREXAMPLE OF [] MULTIPLE TIMES WHEN ATTEMPTING TO RUN THIS

function convertToAdjMatrix(adjList) {
        if (adjList.length == 0) {
                return [];
        }
        else {
        const maxNode = adjList.length - 1;
        const adjMatrix = new Array(maxNode + 1).fill(0).map(function () {
            return new Array(maxNode + 1).fill(0);
        });
        for (let i = 0; i <= maxNode; i++) {
            for (const element of adjList[i]) {
                const neighbor = element;
                adjMatrix[i][neighbor] = 1;
            }
        }
    return adjMatrix;
  }  
}
