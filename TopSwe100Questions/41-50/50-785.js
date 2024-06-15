/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let color = Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        if(color[i]) continue;
        let queue = [i];
        color[i] = 1;

        while(queue.length) {
            let curr = queue.shift();

            for(let next of graph[curr]) {
                if(color[next] === color[curr]) return false;
                if(!color[next]) {
                    color[next] = color[curr] === 1 ? 2 : 1;
                    queue.push(next);
                }
            }
        }
    }
    return true;
};
