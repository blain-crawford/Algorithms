// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Example2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let cur = head;
  // check current and next
  while(cur && cur.next) {
      if(cur.value === cur.next.value) {
          cur.next = cur.next.next
      } else {
      cur = cur.next;
      }
  }
  return head;
};

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

