//for building LinkedLists

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null

  return node;
};

var LinkedList = function(value) {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value){
      var newTail = Node(value)
      if(!list.head) {
      list.head = newTail;
      }

      if(list.tail) {
          list.tail.next = newTail;
      }
      list.tail = newTail;
   };

  list.removeHead = function() {
      if(list.head === null) {
          return null;
      }
      var currentHead = list.head
      list.head = list.head.next

      return currentHead.value
  };

  list.contains = function(target) {
      var node = list.head

      while(node) {
          if(node.value === target) {
              return true
          }
          node = node.next
      }
      return false;
  };
  return list;
}

let checkList = new LinkedList(1);

