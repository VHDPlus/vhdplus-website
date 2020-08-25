---
id: vhdp_standardoperation_for
title: Parallel For
sidebar_label: Parallel For
---

## Definition

If you use `For` outside of a `Thread`, the VHDL `For` is used. In that section you can repeat only a finite amount of times.
If you want to use this parallel `For` in a thread, you have to write `ParFor`.

The for loop can count up (TO) or down (DOWNTO) between constant values. 
With exit; you can leave the loop before it is finished. 
The name of the counter (i) can be used as variable.

## Examples

```vhdp
Process() {
	For (i IN 7 DOWNTO 1) 
	{ 
		LED(i) <= LED(i-1); 
		If(i = exitValue) 
		{ 
			exit; 
		} 
	}
}
```

OR

```vhdp
Process() {
	Thread {
		ParFor (i IN 7 DOWNTO 1) 
		{ 
			LED(i) <= LED(i-1); 
			If(i = exitValue) 
			{ 
				exit; 
			} 
		}
	}
}
```