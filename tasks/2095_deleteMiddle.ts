class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const deleteMiddle = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return null;
  }

  let t = head;
  let h = head;
  let prev = null;

  while (h && h.next) {
    prev = t;
    t = t.next;
    h = h.next.next;
  }

  if (prev && t) {
    prev.next = t.next;
  }

  return head;
};
