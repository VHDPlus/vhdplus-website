---
id: vhdp_datatypes_integer
title: INTEGER, NATURAL and POSITIVE
sidebar_label:  INTEGER, NATURAL and POSITIVE
---

## Definition

Integer, natural and positive are numbers that have a range between two numbers and can be assigned to numbers. <br>
Integer allows numbers from -2,147,483,647 to 2,147,483,647 <br>
Natural from 0 to 2,147,483,647<br>
Positive from 1 to 2,147,483,647

## Example

```vhdp
SIGNAL counter : NATURAL range 0 to 255 := 0; 
counter <= counter + counter;
```