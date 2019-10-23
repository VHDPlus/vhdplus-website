---
id: vhdp_declarations_generic
title: Generic
sidebar_label:  Generic
---

## Definition

Needed as parameter of a Component. 

## Declaration

**Structure:**
```vhdp
<Name> : <Type> := <default>;
```
**Example:**
```vhdp
Component ExampleComponent
(
	Generic
	(
		CLK_Frequency : NATURAL := 50000000;
	);
)
{
	...
}
```

Type: Often numbers (INTEGER or NATURAL)

Default: Useful, if you want to remove it in NewComponent

Can only be read like a constant