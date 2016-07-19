var BacktrackingSearch = function(csp){
  return this.backtrack(new Array(csp.varSize),csp);

  this.backtrack = function(assignment,csp){
    // Assert that assignment is not failure
    if(!assignment.length) return false;
    if(csp.goalTest(assignment)) return assignment;
    var unassignedVar = csp.selectUnassignedVar();
    var domainValues = csp.orderDomainValues(unassignedVar,assignment);
    for(var i = 0; i < domainValues.length; i++){
      var value = domainValues[i];
      assignment[unassignedVar] = value;
      if(csp.checkConsistency(assignment)){
        var inferences = csp.inference(unassignedVar,value);
        // Prune domain of unassigned variables
        csp.addInferences(inferences);
        if(!csp.isInferencePessimistic()){
          var result = this.backtrack(assignment,csp);
          // If result is not failure, return it
          if(result.length) return result;
        }
        // Restore domain
        csp.removeInferences(inferences);
      }
      // Unassign this variable
      assignment[unassignedVar] = null;
    }
    // failure
    return false;
  }
}
