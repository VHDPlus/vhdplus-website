---
id: io
title: I/Os
sidebar_label:  I/Os
---

## Definition

Needed to use the FPGA I/Os or as interface for a Component.

## Declaration

**Structure:**
```vhdp
<Name> : <IN/OUT/INOUT/BUFFER> <Type> <Range> := <default>;
```
**Example:**
```vhdp
Main
(
	Btn : IN STD_LOGIC;
	Led : OUT STD_LOGIC_VECTOR (7 downto 0) := (others => '0');
)
{
	...
}
```

IN = Signal that can be read but not assigned a value
OUT = Signal that can be assigned a value but not be read
BUFFER = Signal that can output a value but this value can be read
INOUT = Signal that can be used as in- or output

Type: Unsualy STD_LOGIC or STD_LOGIC_VECTOR

Range: For STD_LOGIC_VECTOR either (... downto 0) or (0 to ...)

Default: Either none for e.g. an input or a value like '0' (or (others => '0') to set every bit to '0' in a vector)

## Assignment

```vhdp
<Name> <= <Value>;
```
**Example:**
```vhdp
Led <= "00011100"; --same as x"1C" or (4 downto 2 => '1', others => '0')
```