---
id: case
title: Case and When
sidebar_label:  Case and When
---

## Definition

Case and When can be used like without Thread, but you can use Wait, While... inside and next to it. 

## Examples

```vhdp
Thread 
{ 
	a := a + 1;
	Case (a) 
	{ 
		When (0 to 3) 
		{ 
			Wait(1000); 
		} 
		When (others) 
		{ 
			Wait(2000); 
		}
	} 
}
```
This example increments the variable `a` and between counting, the thread waits 1000 cycles if a = 0, 1, 2, 3 or 2000 cycles for other values.