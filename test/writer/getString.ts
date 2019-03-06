import Writer from "../../src";
export function getString() {
    let writer = new Writer();
    writer.line("something");
    writer.line("something.else");
    expect(typeof writer.getString()).toBe("string");
    expect(writer.getString().indexOf("\n") > -1).toBe(true);
    expect(writer.getString("|").indexOf("|") > -1).toBe(true);
}
