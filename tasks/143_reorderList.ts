class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return; // Handle empty or single-node lists

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Reverse the second half
  let prev = null;
  let curr = slow.next!;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Merge the first and second halves
  slow.next = null;
  let firstHalf = head;
  let secondHalf = prev;

  while (firstHalf && secondHalf) {
    const temp1 = firstHalf.next;
    const temp2 = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = temp1;

    firstHalf = temp1;
    secondHalf = temp2;
  }
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

reorderList(head);
