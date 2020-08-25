---
id: stringconverter
title: String Converter
sidebar_label:  String Converter
---

![String](/img/ide/String.png)

## How to use
1. Enter the text to convert
2. Select one of the following options:

### String to Hex
Press `String to HEX` to save the text in one `STD_LOGIC_VECTOR`
1. Copy the generated HEX value
2. Set the value like this: my_vector(95 downto 0) <= x"4578616d706c652074657874";
3. If you have to set the length: my_bytes <= 12;

### String to Byte Array
`String to Byte Array` to save the text in an array of bytes `(STD_LOGIC_VECTOR(7 downto 0))`
1. Copy the generated text
2. Save it e.g. with a constant or set a signal to the bytes