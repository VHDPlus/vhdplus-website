---
id: if
title: If, Else and Elsif
sidebar_label:  If, Else and Elsif
---

## Definition

If, Else and Elsif can be used like without Thread, but you can use Wait, While... inside and next to it. 

## Examples

```vhdp
Thread 
{ 
	If (BTN = '1') 
	{ 
		LED <= '1'; 
	} 
	Wait (10000);
}
```
Without Thread, the If would ignore procedure operations and would not wait after checking.
This example checks every 10000 cycles if BTN is high and sets LED high if true.