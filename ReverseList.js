/*Given the head of a singly linked list, reverse the list, and return the reversed list.

 Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Input: head = [1,2]
Output: [2,1]*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * 
 * Algorithm:
 * head = [23,6,15]
 * First, we move the next node of the black node, which is node 6, to the head of the list:
 * Then we move the next node of the black node, which is node 15, to the head of the list:
 * The next node of the black node now is null. So we stop and return our new head node 15.
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prevNode = null;
    let currentNode = head;
    
    while(currentNode!== null){
        let tempNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = tempNode;
    }
    return prevNode;
};


//Time Complexity : O(n) ,where n is the lenght of the linked list
//Space Complexity : O(1),We only use constant extra space so the space complexity is O(1).