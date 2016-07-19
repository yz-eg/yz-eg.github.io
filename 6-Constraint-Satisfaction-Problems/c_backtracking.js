// Zeros mean empty
var sudokuBoard = [
  [0,0,3, 0,2,0, 6,0,0],
  [9,0,0, 3,0,5, 0,0,1],
  [0,0,1, 8,0,6, 4,0,0],

  [0,0,8, 1,0,2, 9,0,0],
  [7,0,0, 0,0,0, 0,0,8],
  [0,0,6, 7,0,8, 2,0,0],

  [0,0,2, 6,0,9, 5,0,0],
  [8,0,0, 2,0,3, 0,0,9],
  [0,0,5, 0,1,0, 3,0,0],
];

var BacktrackingSudokuCSP = function(board){
  this.board = board;
  this.init = function(){

  }
  this.init();

  this.goalTest = function(assignment){
    for(var i = 0; i < assignment.length;i++)
      if(!assignment[i]) return false;
    return true;
  }

  this.selectUnassignedVar = function(){

  }

  this.orderDomainValues = function(unassignedVar,assignment){

  }

  this.checkConsistency = function(assignment){

  }

  this.inference = null; // Override this function

  this.isInferencePessimistic = function(){

  }
  this.addInferences = function(inferences){

  }

  this.removeInferences = function(inferences){

  }

}

var csp = BacktrackingSudokuCSP(sudokuBoard);

$(document).ready(function() {
  $.ajax({
    url : "backtracking.js",
    dataType: "text",
    success : function (data) {
      $("#backtrackingCode").html(data);
    }
  });

});
