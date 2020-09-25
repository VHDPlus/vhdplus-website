---
id: integer
title: INTEGER, NATURAL and POSITIVE
sidebar_label:  INTEGER, NATURAL and POSITIVE
---

## Definition

Integer, natural and positive are numbers that have a range between two numbers and can be assigned to numbers. 
Integer allows numbers from -2,147,483,647 to 2,147,483,647 
Natural from 0 to 2,147,483,647
Positive from 1 to 2,147,483,647

## Example

```vhdp
SIGNAL counter : NATURAL range 0 to 255 := 0; 
counter <= counter + counter;
```