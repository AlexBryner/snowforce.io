import { AppAddress } from "./cmp-address";

describe("cmp-address", () => {
  it("builds", () => {
    expect(new AppAddress()).toBeTruthy();
  });

  describe("normalization", () => {
    it("returns a blank string if the name is undefined", () => {
      const component = new AppAddress();
      expect(component.normalize(undefined)).toEqual("");
    });

    it("returns a blank string if the name is null", () => {
      const component = new AppAddress();
      expect(component.normalize(null)).toEqual("");
    });

    it("capitalizes the first letter", () => {
      const component = new AppAddress();
      expect(component.normalize("1234 ezy st.")).toEqual("1234 Ezy St.");
    });

    it("lower-cases the following letters", () => {
      const component = new AppAddress();
      expect(component.normalize("1234 EZY ST.")).toEqual("1234 Ezy St.");
    });

    it("handles single letter names", () => {
      const component = new AppAddress();
      expect(component.normalize("t")).toEqual("T");
    });
  });
});
