---
id: vhdp_datatypes_bit
title: BIT, BIT_VECTOR and BOOLEAN
sidebar_label:  BIT, BIT_VECTOR and BOOLEAN
---

## Definition

Represent logic values and can be used together with logical operators.

## Example BIT_VECTOR

```vhdp
VARIABLE BitVectorSig : BIT_VECTOR (7 downto 0) := (others => '0');
```
Equals "00000000" (Order = "76543210")

## Example BIT

```vhdp
VARIABLE BitSig1 : BIT := '0'; 
VARIABLE BitSig2 : BIT := '1'; 

If((BitSig1 AND BitSig2) = '1')
{
	BitSig1 := '1'; 
}
```

## Example BOOLEAN

```vhdp
VARIABLE BoolSig1 : BOOLEAN := false; 
VARIABLE BoolSIg2 : BOOLEAN := true; 

If(BoolSig1 AND BoolSig2)
{
	BoolSig1 := true; 
}
```
With Boolean you don't have to write (BoolSig1 AND BoolSig2) = true