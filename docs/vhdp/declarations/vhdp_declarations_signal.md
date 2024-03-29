---
id: signal
title: Signal
sidebar_label:  Signal
---

## Definition

Used as variable for one or more processes or NewComponent.
They can be declared everywhere where signals can be assigned or use the dedicated AttributeDeclaration{} section.
Signals can be written by one process but can be read in the whole file. If they are assigned in the process, the signal
will have the value in the next cycle (use Variable to set instantly).

## Declaration

**Structure:**
```vhdp
SIGNAL <Name> : <Type> <Range> := <default>;
```
**Example:**
```vhdp
SIGNAL Counter : NATURAL 0 to 255 := 0;
```

Range: For INTEGER, NATURAL and POSITIVE: ... to ... -> will allow numbers from ... to ...
       For STD_LOGIC_VECTOR or other vectors: (... to/downto ...) -> will have bit ... to ...

Default: Important if you write e.g. Counter <= Counter + 1;, because it needs a start value.

## Assignment

```vhdp
<Name> <= <Value>;
```
**Example:**
```vhdp
Counter <= Counter + 1;
```

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/a_mQx-6RH34?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>