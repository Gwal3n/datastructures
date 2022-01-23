import Graph from './Graph.js';

function dfs(graph, start){
    let adj = graph.getAdjList;

    visited.push(start);
    components.set(start, count);
    let neighbors = adj.get(start);
    for(let next of neighbors){
        if(!visited.includes(next)){
            dfs(graph, next);
        }
    }
    
}

function findComponents(graph){
    let adj = graph.getAdjList;

    for(let node of adj.keys()){
        if(!visited.includes(node)){
            count++;
            dfs(graph, node);
        }
    }
}

let graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('G', 'H');
graph.addEdge('F', 'B');

var visited = [];
var count = 0;
var components = new Map();
findComponents(graph);

console.log(components);
