---
id: vhdp_operators_logical
title: Operators
sidebar_label:  Operators
---

| Operator  | Function                      |
|------|------------------------------------|
| NOT  | complement                         |
| AND  | logical and                        |
| OR   | logical or                         |
| NAND | logical complement of and          |
| NOR  | logical complement of or           |
| XOR  | logical exclusive or               |
| XNOR | logical complement of exclusive or |
| =    | test for equality                  |
| /=   | test for inequality                |
| <    | test for less than                 |
| <=   | test for less than or equal        |
| >    | test for greater than              |
| >=   | test for greater than or equal     |

## Example

```vhdp
If ((a AND b) = '1')
{
	...
}
```

## Use a different clock for Process

rising_edge([clk name])<br>
falling_edge([clk name])

```vhdp
If (Reset = '0') 
{
	...
}
Elsif (rising_edge(clk_50)) 
{
	...
}
```
