---
id: vhdp_datatypes_other
title: User defined types (Enum, Array, Record)
sidebar_label:  User defined types (Enum, Array, Record)
---

## Enum

Has different states with a custom name.

## Example

```vhdp
TYPE EnumType IS (start, running, end); 
SIGNAL EnumSig : EnumType := start; 

EnumSig <= running;
```

## Array

Allows to have a group of elements in one variable.

## Example

```vhdp
TYPE PixelType IS ARRAY (0 to 2) OF NATURAL range 0 to 255; 
TYPE RowType IS ARRAY (0 to 639) OF PixelType; 
(TYPE RowType IS ARRAY (0 to 639, 0 to 2) OF NATURAL range 0 to 255;) 
SIGNAL Row : RowType := (others => (others => '0')); 

Row(0)(0) <= 0; 
Row <= ((0, 1, 2), 
        (3, 4, 5), 
		 ... 
		(6, 7, 8));
```

## Record

Allows different types to be combined in one.

## Example

```vhdp
TYPE RGBType IS RECORD 
	R : NATURAL range 0 to 255; 
	G : NATURAL range 0 to 255; 
	B : NATURAL range 0 to 255; 
END RECORD RGBType; 

SIGNAL RGBSig : RGBType := (R => 0, G => 0, B => 0); 

RGBSig.R <= 128; 
RGBSig.G <= 0; 
RGBSig.B <= 255;
```