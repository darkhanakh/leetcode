import { assertEquals } from "https://deno.land/std@0.219.0/assert/mod.ts";
import { maxFrequencyElements } from "../tasks/3005_maxFrequencyElements.ts";

Deno.test("test 1", () => {
  assertEquals(maxFrequencyElements([1, 2, 2, 3, 3, 3]), 3);
});

Deno.test("test 2", () => {
  assertEquals(maxFrequencyElements([1, 2, 2, 3, 3]), 4);
});
