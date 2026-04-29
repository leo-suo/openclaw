import { assertBundledChannelEntries } from "openclaw/plugin-sdk/channel-test-helpers";
import { describe, expect, it } from "vitest";
import entry, { registerFeishuFullRuntime } from "./index.js";
import setupEntry from "./setup-entry.js";

describe("feishu bundled entries", () => {
  assertBundledChannelEntries({
    entry,
    expectedId: "feishu",
    expectedName: "Feishu",
    setupEntry,
  });

  it("keeps the full-runtime registrar available as a named entry export", () => {
    expect(typeof registerFeishuFullRuntime).toBe("function");
  });
});
