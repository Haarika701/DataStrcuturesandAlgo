//Given the head of a linked list, remove the nth node from the end of the list and return its head.
//Input: head = [1,2,3,4,5], n = 2
//Output: [1,2,3,5]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let length = 0 ;
  let  currentNode = head;
    
    while(currentNode !== null){
        currentNode = currentNode.next;
        length++;
    }
    
    if(length ==  n){
        return head.next;
    }
    
    let nodeBeforeRemovedindex = length - n - 1;
    currentNode = head;
    
    for(let i = 0 ; i < nodeBeforeRemovedindex;i++){
        currentNode = currentNode.next;
    }
    
    currentNode.next = currentNode.next.next;
    return head;
};