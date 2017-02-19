const max_row = 10;
const max_col = 22;
const node_size =30;
const padding = node_size/2;
var nodes_list = [];
var fnodes_list = [];
var source_index = 90;
var dest_index = 107;
var bfs_canvas;
var w = 660 ,h = 300;
var time_interval = 50;
var interval_function;

var finish_traversal = function(dest){
	curr_node = dest.prev
	while(!curr_node.is_source){
		curr_node.f_node.fill='yellow'
		curr_node = curr_node.prev
	}
}
var visit_node = function(node){
	node.visited = true
	if(!curr_node.is_source && !curr_node.is_dest){
		curr_node.f_node.fill='rgb(216, 34, 194)';
	}
}
var add_to_queue = function(queue,node){
	queue.push(node)
	node.visited = true
	node.f_node.fill='rgb(113, 242, 135)';
}
var onclick_handler = function(){
	index = this.getAttribute('list_index')
	curr_node = nodes_list[index]
	if(!curr_node.is_source && !curr_node.is_dest){
		if(curr_node.is_blocked){
			this.setAttribute('fill','#fff');
			curr_node.is_blocked=false;
		}else{
			curr_node.is_blocked=true;
			this.setAttribute('fill','#a8a8a8');
		};
	};
};
var initialize_start_end = function(){
	source = nodes_list[source_index];
	destination = nodes_list[dest_index];
	source.is_source=true
	destination.is_dest = true
	source.f_node.fill='green'
	destination.f_node.fill='blue'
};
var init = function(){
	clearInterval(interval_function,time_interval)
	bfs_canvas = document.getElementById('breadthFirstSearchCanvas');
	bfs_canvas.innerHTML = ""
	nodes_list = []
	two = new Two({ width: w, height: h }).appendTo(bfs_canvas);
	for(var i=0;i<max_row;i++){
		for(var j=0;j<max_col;j++){
			x_offset = (j%max_col)*node_size + padding;
			y_offset = (i%max_row)*node_size + padding;
			var index = get_index(i,j,max_row,max_col)
			var f_node = two.makeRectangle(x_offset,y_offset,node_size,node_size);
			var curr_node = new node(i,j,max_row,max_col);
			curr_node.f_node = f_node
			two.update();
			nodes_list.push(curr_node);
			document.getElementById(f_node.id).setAttribute("list_index",index);
			f_node._renderer.elem.addEventListener('mousedown',onclick_handler);
		};
	};
	initialize_start_end();
	two.update();
}
$(document).ready(function(){
	$.ajax({
		url : "breadthFirstSearch.js",
		dataType: "text",
		success : function (data) {
			document.getElementById('breadthFirstSearchCode').innerHTML = data;
		}
	});


	init();

});
