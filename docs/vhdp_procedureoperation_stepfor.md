---
id: vhdp_procedureoperation_stepfor
title: StepFor
sidebar_label:  StepFor
---

## Definition

Unlike For, this operation works like a for loop from languages like C. 
First you declare a variable, than you have a condition to stay in the loop and than you can increase or decrease the variable.

## Examples

```vhdp
Thread 
{ 
	StepFor (VARIABLE counter : INTEGER := 0; counter < 8; counter := counter + 1) 
	{ 
		LED(counter) <= '1'; 
		Wait(1000); 
	}
}
```
In this example, `counter` is always counted form 0 to 7. The counter'th position of the LED vector is set high and between the loops, 1000 cycles are waited.