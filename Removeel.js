/*Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(!head) return head
    while(head && head.val == val) head = head.next
    let node = head
    let prv = null
    while(node){
      const next = node.next
      if(node.val === val){
        prv.next = next
      }else{
        prv = node 
      }    
      node = next
    }
    return head
  };
  
