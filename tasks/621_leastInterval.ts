/*
You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n.
Each cycle or interval allows the completion of one task.
Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.
Return the minimum number of intervals required to complete all tasks.
*/

function leastInterval(tasks: string[], n: number): number {
  // 1. Create a map to store the count of each task
  // 2. Create a maxHeap to store the count of each task
  // 3. Sort the maxHeap in descending order
  // 4. Create a queue to store the tasks that are waiting to be processed
  // 5. Create a time variable to store the time
  // 6. Iterate through the maxHeap and the queue
  // 7. Increment the time variable
  // 8. If the maxHeap is not empty, decrement the count of the task and push it to the queue
  // 9. If the queue is not empty and the time is equal to the time in the queue, push the task back to the maxHeap
  // 10. Return the time

  let time = 0;
  const q: number[][] = [];
  const count = new Map<string, number>();
  for (const task of tasks) {
    count.set(task, (count.get(task) || 0) + 1);
  }

  const maxHeap: number[] = Array.from(count.values());
  maxHeap.sort((a, b) => b - a);

  while (maxHeap.length > 0 || q.length > 0) {
    time++;

    if (maxHeap.length > 0) {
      const cnt = maxHeap.shift() - 1;
      if (cnt > 0) q.push([cnt, time + n]);
    }

    if (q.length > 0 && q[0][1] == time) {
      const element = q.shift()[0];
      maxHeap.push(element);
      maxHeap.sort((a, b) => b - a);
    }
  }

  return time;
}
