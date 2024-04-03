class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  if (fast) {
    slow = slow.next;
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false;
    }
    prev = prev.next;
    slow = slow.next;
  }

  return true;
}
