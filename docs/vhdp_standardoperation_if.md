---
id: vhdp_standardoperation_if
title: If, Else and Elsif
sidebar_label:  If, Else and Elsif
---

## Definition

Executes an operation if a condition is met.

## Examples

```vhdp
If (a = 0) 
{ 
	a := 1; 
} 
Elsif (a = 1) 
{ 
	a := 2; 
} 
Else 
{ 
	a := 0; 
}
```