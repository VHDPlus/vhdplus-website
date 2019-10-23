---
id: vhdp_procedureoperation_wait
title: Wait
sidebar_label:  Wait
---

## Definition

With this section you can wait for a number of CLK cycles between two operations.
If your clock frequency is 12MHz, you can write 1s, 100ms or 10ns and this will be corrected to the cycle count.

## Examples

```vhdp
Thread 
{ 
	LED <= '1'; 
	Wait(1000); 
	LED <= '0'; 
	Wait(1000);
}
```
This Example creates a blinking LED