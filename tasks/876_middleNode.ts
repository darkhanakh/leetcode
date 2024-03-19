class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const middleNode = (head: ListNode | null): ListNode | null => {
  let t = head;
  let h = head;

  while (h && h.next) {
    t = t.next;
    h = h.next.next;
  }

  return t;
};
