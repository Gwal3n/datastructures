export default class Graph{
    constructor(vertices = []){
        this.n = vertices.length;
        this.AdjList = new Map();
        for(let vertex of vertices){
            this.AdjList.set(vertex, []);
        }
        
    }

    get size(){
        return this.n;
    }

    get getAdjList(){
        return this.AdjList;
    }

    addVertex(name){
        this.AdjList.set(name, []);
        this.n++;
    }

    removeVertex(name){ //returns true if succesfully removed
        return this.AdjList.delete(name);
    }

    addEdge(v1, v2){
        this.AdjList.get(v1).push(v2);
        this.AdjList.get(v2).push(v1);
    }

    printGraph(){
        let vertices = this.AdjList.keys();
        for(let vertex of vertices){
            let out = vertex + " -> ";
            for(let j of this.AdjList.get(vertex)){
                out += j + " ";
            }
            console.log(out);
        }
    }
}