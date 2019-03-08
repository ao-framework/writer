import Writer from "../../src";
export function alignment() {
    let writer = new Writer();
    expect(writer["alignment"]).toBe("left");
}
