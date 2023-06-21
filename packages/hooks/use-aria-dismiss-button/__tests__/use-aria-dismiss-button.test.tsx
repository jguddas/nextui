import {renderHook} from "@testing-library/react-hooks";

import { useAriaDismissButton } from "../src";

describe("useAriaDismissButton", () => {
  it("should work correctly", () => {
    const {result} = renderHook(() => useAriaDismissButton());

    // Add your test here
  });
});
