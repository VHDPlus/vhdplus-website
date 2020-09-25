---
id: signed
title: UNSIGNED and SIGNED
sidebar_label:  UNSIGNED and SIGNED
---

## Definition

Signed and unsigned variables are bit vectors that can be used for mathematical operations. If a variable is a signed, the range (7 downto 0) means a range from -128 to 127. If a variable is an unsigned, the range (7 downto 0) would mean a range from 0 to 255.

## Example

```vhdp
SIGNAL counter : UNSIGNED (7 downto 0) := (others => '0'); 
counter <= counter + 1;
```