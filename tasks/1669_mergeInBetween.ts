class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let current = list1;
  let i = 0;
  while (i < a - 1) {
    current = current.next;
    i++;
  }
  const head = current;
  while (i <= b) {
    current = current.next;
    i++;
  }

  head.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = current;
  return list1;
}

const list1 = new ListNode(
  0,
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  )
);
const list2 = new ListNode(
  1000000,
  new ListNode(1000001, new ListNode(1000002))
);
console.log(mergeInBetween(list1, 3, 4, list2));
