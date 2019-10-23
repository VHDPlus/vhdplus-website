---
id: vhdp_standardoperation_for
title: For
sidebar_label:  For
---

## Definition

The for loop can count up (TO) or down (DOWNTO) between constant values. 
With exit; you can leave the loop before it is finished. 
The name of the counter (i) can be used as variable.

Like all standard operations, `For` can be used next to procedure operations like `Wait`. 
But if you want to put a procedure operation in the Loop, you MUST use `StepFor`.

## Examples

```vhdp
For (i IN 7 DOWNTO 1) 
{ 
	LED(i) <= LED(i-1); 
	If(i = exitValue) 
	{ 
		exit; 
	} 
}
```