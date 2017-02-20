// Code for Breadth First Search
var get_index = function(x,y,max_row,max_col){
  return x*max_col + y
};
var breadthFirstSearch = function(){
  // Initialize the queue with the source node
	var queue = [nodes_list[source_index]];
  //Execute this function till queue is empty or destination is reached
	interval_function = setInterval(function(){
    //if queue is empty , stop the iteration
		if(queue.length==0){
			clearInterval(interval_function,time_interval)
		}
    //pop out the element from the queue
		curr_node = queue.shift();
    //visit that node
		visit_node(curr_node);
    //Check through each of the neighbors of the current node
		for(var i=0;i < curr_node.neighbors.length;i++){
			adj_node = nodes_list[curr_node.neighbors[i]];
      //If node is not visited before and not blocked
			if(!adj_node.visited && !adj_node.is_blocked){
        //Add the reference to previous node to retrace the path later
        adj_node.prev = curr_node
        //If the adjacent node is the destination, stop the iteration
				if(adj_node.is_dest){
					clearInterval(interval_function,time_interval);
          //Retrace the path
          finish_traversal(adj_node)
				}else{
          //Push the node to the queue and color it accordingly
					add_to_queue(queue,adj_node)
				}
			}
		}
    //Update the front end visualization
		two.update();
	},time_interval);
}
var node = function(x,y,max_row,max_col){
  this.x = x;
  this.y = y;
  this.visited = false;
  this.is_source = false;
  this.is_dest = false;
  this.is_blocked = false;
  this.neighbors = [];
  if(this.x > 0){
    this.neighbors.push(get_index(this.x-1,this.y,max_row,max_col))
  };
  if(this.y < max_col-1){
    this.neighbors.push(get_index(this.x,this.y+1,max_row,max_col))
  };
  if(this.x < max_row-1){
    this.neighbors.push(get_index(this.x+1,this.y,max_row,max_col))
  };
  if(this.y > 0){
    this.neighbors.push(get_index(this.x,this.y-1,max_row,max_col))
  };

  return this;
};
