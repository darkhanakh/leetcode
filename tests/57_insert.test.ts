import { assertEquals } from "https://deno.land/std@0.219.0/assert/mod.ts";
import { insert } from "../tasks/57_insert.ts";

Deno.test("test 1", () => {
  assertEquals(
    insert(
      [
        [2, 3],
        [4, 5],
      ],
      [0, 1]
    ),
    [
      [0, 1],
      [2, 3],
      [4, 5],
    ]
  );
});

Deno.test("test 2", () => {
  assertEquals(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    ),
    [
      [1, 5],
      [6, 9],
    ]
  );
});

Deno.test("test 3", () => {
  assertEquals(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    ),
    [
      [1, 2],
      [3, 10],
      [12, 16],
    ]
  );
});

Deno.test("test 4", () => {
  assertEquals(insert([[1, 5]], [2, 3]), [[1, 5]]);
});

Deno.test("test 5", () => {
  assertEquals(insert([[1, 5]], [2, 7]), [[1, 7]]);
});

Deno.test("test 6", () => {
  assertEquals(insert([[1, 5]], [6, 8]), [
    [1, 5],
    [6, 8],
  ]);
});

Deno.test("test 7", () => {
  assertEquals(insert([[1, 5]], [0, 0]), [
    [0, 0],
    [1, 5],
  ]);
});

Deno.test("test 8", () => {
  assertEquals(insert([[1, 5]], [0, 6]), [[0, 6]]);
});

Deno.test("test 9", () => {
  assertEquals(insert([[1, 5]], [5, 6]), [[1, 6]]);
});

Deno.test("test 10", () => {
  assertEquals(insert([[1, 5]], [5, 5]), [[1, 5]]);
});
