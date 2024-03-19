class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeZeroSumSublists = (head: ListNode | null): ListNode | null => {
  let arr = [];
  let h = head;

  while (h) {
    arr.push(h.val);
    h = h.next;
  }

  let foundZeroSumSubarray;
  do {
    foundZeroSumSubarray = false;
    let prefixSum = 0;
    const map: Map<number, number> = new Map();
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i];
      if (map.has(prefixSum)) {
        arr.splice(
          (map.get(prefixSum) as number) + 1,
          i - (map.get(prefixSum) as number)
        );
        foundZeroSumSubarray = true;
        break;
      } else {
        map.set(prefixSum, i);
      }
    }
  } while (foundZeroSumSubarray);

  if (arr.length === 0) {
    return null;
  }

  const newHead = new ListNode(arr[0]);
  let current = newHead;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return newHead;
};
