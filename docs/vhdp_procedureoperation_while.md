---
id: vhdp_procedureoperation_while
title: While
sidebar_label:  While
---

## Definition

With this section you can repeat operations as long as a condition is met.

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
In this example, `counter` is counted form 0 to 7. The counter'th position of the LED vector is set high and between the loops, 1000 cycles are waited.
**Important:** This loop won't repeat counting to 7, because the default value of the variable is only set at the verry beginning.

## Without Thread

If you use `While` outside of a `Thread`, the VHDL `While` is used. In that section you can repeat only a finite amount of times.
The `While` in a thread is called `StepWhile` like `StepFor`, but because of the small use of the VHDL `While`, every `While` in a `Thread` is converted.

## Example

```vhdp
Function Eight (return INTEGER; i : NATURAL)
{ 
	VARIABLE counter : INTEGER := i; 
	While (counter < 8) 
	{ 
		counter := counter + 1; 
	} 
	return counter;
}
```