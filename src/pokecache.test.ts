import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval + 100));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});

test("Cache multiple entries independently", () => {
  const cache = new Cache(1000);
  cache.add("key1", "value1");
  cache.add("key2", "value2");
  expect(cache.get("key1")).toBe("value1");
  expect(cache.get("key2")).toBe("value2");
  cache.stopReapLoop();
});
test("Getting a key that doesn't exist returns undefined", () => {
  const cache = new Cache(1000);
  expect(cache.get("nonexistent")).toBe(undefined);
  cache.stopReapLoop();
});
