// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var nodesWithClass = [];

  var searchNodes = function(nodes) {

    var children = nodes.childNodes;
    if (nodes.classList && nodes.classList.contains(className) ) {
      nodesWithClass.push(nodes);
    }

    for (var i = 0; i < children.length; i++) {
      console.log('hasChildNodes:' + children[i].hasChildNodes());
      var node = children[i];
      searchNodes(node);
    }
  };

  searchNodes(body);
  return nodesWithClass;
};