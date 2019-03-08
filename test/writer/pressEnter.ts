import Writer from "../../src";
export function pressEnter() {
    let writer = new Writer();
    writer.pressEnter();
    expect(writer["lines"][0]).toBe("");
}
