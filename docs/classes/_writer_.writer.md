[@ao-framework/writer](../README.md) > ["writer"](../modules/_writer_.md) > [Writer](../classes/_writer_.writer.md)

# Class: Writer

Definition of the writer

## Hierarchy

**Writer**

## Index

### Properties

* [alignment](_writer_.writer.md#alignment)
* [factor](_writer_.writer.md#factor)
* [lines](_writer_.writer.md#lines)
* [offset](_writer_.writer.md#offset)

### Methods

* [align](_writer_.writer.md#align)
* [at](_writer_.writer.md#at)
* [getLines](_writer_.writer.md#getlines)
* [getLinesInstance](_writer_.writer.md#getlinesinstance)
* [getString](_writer_.writer.md#getstring)
* [indent](_writer_.writer.md#indent)
* [line](_writer_.writer.md#line)
* [pad](_writer_.writer.md#pad)
* [pressEnter](_writer_.writer.md#pressenter)
* [wrap](_writer_.writer.md#wrap)
* [wrapWithIndent](_writer_.writer.md#wrapwithindent)

---

## Properties

<a id="alignment"></a>

###  alignment

**● alignment**: *"left" \| "right"* = "left"

*Defined in [writer.ts:10](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L10)*

Holds the alignment orientation of the document

___
<a id="factor"></a>

### `<Private>` factor

**● factor**: *`number`* = 4

*Defined in [writer.ts:27](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L27)*

The number of spaces that will prepended on each indent

___
<a id="lines"></a>

### `<Private>` lines

**● lines**: *`string`[]* =  []

*Defined in [writer.ts:15](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L15)*

Holds the line entries

___
<a id="offset"></a>

### `<Private>` offset

**● offset**: *`number`* = 0

*Defined in [writer.ts:21](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L21)*

How far from the left the cursor resides

___

## Methods

<a id="align"></a>

###  align

▸ **align**(alignment: *"right" \| "left"*): `this`

*Defined in [writer.ts:48](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L48)*

Chainable method to set alignment on the fly

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| alignment | "right" \| "left" |   |

**Returns:** `this`

___
<a id="at"></a>

###  at

▸ **at**(offset: *`number`*, line: *`string`*, handler?: *`Function`*): `this`

*Defined in [writer.ts:102](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L102)*

Hijack the offset tree hiearchy and write at any offset on the current line

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| offset | `number` |  \- |
| line | `string` |  \- |
| `Optional` handler | `Function` |   |

**Returns:** `this`

___
<a id="getlines"></a>

###  getLines

▸ **getLines**(): `string`[]

*Defined in [writer.ts:132](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L132)*

Returns a list of lines compiled thus far. This only return a copy and will not return this actual reference

**Returns:** `string`[]

___
<a id="getlinesinstance"></a>

###  getLinesInstance

▸ **getLinesInstance**(): `string`[]

*Defined in [writer.ts:140](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L140)*

Get the actual reference to the array of strings held in memory

**Returns:** `string`[]

___
<a id="getstring"></a>

###  getString

▸ **getString**(delimiter?: *`string`*): `string`

*Defined in [writer.ts:148](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L148)*

Returns the list of lines as a string

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` delimiter | `string` | &quot;&quot; |  The delimiter that seperates every line |

**Returns:** `string`

___
<a id="indent"></a>

###  indent

▸ **indent**(factor: *`number`*): `this`

*Defined in [writer.ts:114](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L114)*

Set the factor for implied indentation

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| factor | `number` |   |

**Returns:** `this`

___
<a id="line"></a>

###  line

▸ **line**(text: *`string`*, handler?: *`Function`*): `this`

*Defined in [writer.ts:85](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L85)*

Writes a line to the list of lines compiled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  \- |
| `Optional` handler | `Function` |   |

**Returns:** `this`

___
<a id="pad"></a>

### `<Private>` pad

▸ **pad**(text: *`any`*): `string`

*Defined in [writer.ts:35](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L35)*

Returns a text string with the current number of spaces from the left for the current offset

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `any` |   |

**Returns:** `string`

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `this`

*Defined in [writer.ts:122](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L122)*

Add a blank line

**Returns:** `this`

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(startString: *`string`*, endString: *`string`*, handler: *`Function`*): `this`

*Defined in [writer.ts:60](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L60)*

Wrap contains with a specified start-string and end-string

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| startString | `string` |  \- |
| endString | `string` |  \- |
| handler | `Function` |   |

**Returns:** `this`

___
<a id="wrapwithindent"></a>

###  wrapWithIndent

▸ **wrapWithIndent**(startString: *`string`*, endString: *`string`*, handler: *`Function`*): `void`

*Defined in [writer.ts:74](https://github.com/ao-framework/writer/blob/dbb11e1/src/writer.ts#L74)*

Wrap contains with a specified start-string and end-string and indents its contents

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| startString | `string` |  \- |
| endString | `string` |  \- |
| handler | `Function` |   |

**Returns:** `void`

___

