import { lines } from "./lines";
import { offset } from "./offset";
import { factor } from "./factor";
import { pad } from "./pad";
import { line } from "./line";
import { getLines } from "./getLines";
import { getString } from "./getString";

export default function () {
    let template = (method: string) => `writer.${method}`;
    test(template("lines"), lines);
    test(template("offset"), offset);
    test(template("factor"), factor);
    test(template("pad"), pad);
    test(template("line"), line)
    test(template("get.lines"), getLines)
    test(template("get.string"), getString);

}
