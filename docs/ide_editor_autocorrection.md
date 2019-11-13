---
id: ide_editor_autocorrection
title: Autocorrection
sidebar_label:  Autocorrection
---

## Overview
The syntax of VHDL for the signals and the operators can be confusing for people that worked with other programming languages. 
So we included an autocorrection to make the shift easier. Here a list of things that will be replaced if used:

| String to replace        | Correct string                      | Example                                 |
|--------------------------|-------------------------------------|-----------------------------------------|
| = or :=/<= if used wrong | := for variables and <= for signals | Example_var **=** ... -> Example_var := |
| !=                       | /= (unequal)                        | If (a !**=** b) -> If (a /= b)          |
| ==                       | = (equal)                           | If (a =**=** b) -> If (a = b)           |
| &&                       | AND                                 | If (a &**&** b) -> If (a AND b)         |
| &#x7c;&#x7c;             | OR                                  | If (a &#x7c;**&#x7c;** b) -> If (a OR b)|
| i ++                     | i := i + 1                          |                                         |
| i +=                     | i := i +                            |                                         |
| i -=                     | i := i -                            |                                         |

## Compiler autocorrection
If the frequency of the CLK signal is 12MHz, you can write Wait(100ms); and the time is converted to CLK cycles. Possile time units are s, ms, us and ns.

If you are using [strings](https://github.com/leonbeier/VHDPlus_Libraries_and_Examples/tree/master/Examples/Basics/String), you can write s"..." to convert this to a HEX value while compiling. 

## Signal declaration
The text will be replaced with pressing the last char of the string to replace. If you paste a text, you e.g. have to delete and write the ';' again to replace the string.

### Signals 
```vhdp
INTEGER i = 0;
-->
SIGNAL i : INTEGER := 0;
```
### Variables 
```vhdp
NATURAL range 0 to 255 count = 0; 
-->
VARIABLE count : NATURAL range 0 to 255 := 0;
```
### I/Os     
```vhdp
OUT STD_LOGIC_VECTOR (7 downto 0) LED = (others => '0');
-->
LED : OUT STD_LOGIC_VECTOR(7 downto 0) := (others => '0');
```
### Arrays  
```vhdp
INTEGER range 0 to 255 [5] [7] arr = (others => (others => 0));
-->
TYPE arr_type IS ARRAY (0 to 4, 0 to 6) OF INTEGER range 0 to 255;
SIGNAL arr : arr_type := (others => (others => 0));
```