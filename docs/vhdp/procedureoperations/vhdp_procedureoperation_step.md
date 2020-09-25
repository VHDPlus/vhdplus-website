---
id: step
title: Step
sidebar_label:  Step
---

## Definition

Step executes the operations inside in a separate cycle.
Thread will automatically put a Step around signal assignments, but Step is needed to wait one cycle between the assignments.

## Examples

```vhdp
Thread 
{ 
	Length <= 100; 
	En <= '1'; 
	Step 
	{ 
		En <= '0'; 
	} 
}
```