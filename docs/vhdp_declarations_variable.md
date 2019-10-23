---
id: vhdp_declarations_variable
title: Variable
sidebar_label:  Variable
---

## Definition

Used as variable in one process and allows faster processing.
They can be declared in a process or in the dedicated brackets of Process.
Variables can be written and read by one Process, but they will be set instantly. So you can write 
```vhdp
count := count + 1;
If (count = ...) 
```
with the increased value.

## Declaration

**Structure:**
```vhdp
VARIABLE <Name> : <Type> <Range> := default;
```
**Example:**
```vhdp
VARIABLE Counter : UNSIGNED (7 downto 0) := (others => '0');
```

Range: For INTEGER, NATURAL and POSITIVE: ... to ... -> will allow numbers from ... to ...<br>
       For STD_LOGIC_VECTOR or other vectors: (... to/downto ...) -> will have bit ... to ...

Default: Important if you write e.g. Counter <= Counter + 1;, because it needs a startvalue.

## Assignment

Same as with Signal, but use := except of <= (The VHDP IDE converts = to :=/<= automatically)