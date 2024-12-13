import { beforeEach } from "node:test";
import { memoize, memoizeAsync, clearMemoized } from "#index.js";

beforeEach(() => {
  delete globalThis.__omem__;
});

test("memoize", () => {
  const value = memoize("key", () => "value");
  assert.equal(value, "value");

  const value2 = memoize("key", () => "value2");
  assert.equal(value2, "value");
});

test("memoizeAsync", async () => {
  const value = await memoizeAsync("key", () => Promise.resolve("value"));
  assert.equal(value, "value");
});

test("clearMemoized", () => {
  memoize("key", () => "value");
  clearMemoized("key");
  assert.equal(globalThis.__omem__.size, 0);

  memoize("key2", () => "value2");
  memoize("key3", () => "value3");
  clearMemoized("key2");
  assert.equal(globalThis.__omem__.size, 1);
});

test("clearAllMemoized", () => {
  memoize("key", () => "value");
  memoize("key2", () => "value2");
  memoize("key3", () => "value3");
  clearAllMemoized();
  assert.equal(globalThis.__omem__.size, 0);
});
