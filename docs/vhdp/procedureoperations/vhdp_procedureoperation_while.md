---
id: while
title: Sequential While
sidebar_label:  Sequential While
---

## Definition

With this section you can repeat operations as long as a condition is met.
(Can be called SeqWhile too)

## Example

```vhdp
Thread 
{ 
	VARIABLE counter : INTEGER := 0; 
	While (counter < 8) 
	{ 
		LED(counter) <= '1'; 
		counter := counter + 1; 
		Wait(1000); 
	} 
}
```
In this example, `counter` is counted form 0 to 7. The counter'th position of the LED vector is set high and between the loop there is a delay of 1000 clock cycles.
**Important:** This loop won't repeat counting to 7, because the default value of the variable is only set at the verry beginning.