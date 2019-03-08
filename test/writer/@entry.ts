import { lines } from "./lines";
import { offset } from "./offset";
import { factor } from "./factor";
import { pad } from "./pad";
import { line } from "./line";
import { getLines } from "./getLines";
import { getString } from "./getString";
import { alignment } from "./alignment";
import { align } from "./align";
import { wrap } from "./wrap";
import { wrapWithIndent } from "./wrapWithIndent";
import { at } from "./at";
import { indent } from "./indent";
import { pressEnter } from "./pressEnter";
import { getLinesInstance } from "./getLinesInstance";

export default function () {
    let template = (method: string) => `writer.${method}`;
    test(template("alignment"), alignment);
    test(template("lines"), lines);
    test(template("offset"), offset);
    test(template("factor"), factor);
    test(template("pad"), pad);
    test(template("align"), align)
    test(template("wrap"), wrap)
    test(template("wrapWithIndex"), wrapWithIndent)
    test(template("line"), line)
    test(template("at"), at)
    test(template("indent"), indent)
    test(template("pressEnter"), pressEnter)
    test(template("getLinesInstance"), getLinesInstance)
    test(template("get.lines"), getLines)
    test(template("get.string"), getString);

}
