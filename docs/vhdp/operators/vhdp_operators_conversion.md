---
id: conversion
title: Type Conversion
sidebar_label:  Type Operators
---

```vhdp
TO_BIT(<STD_LOGIC>)							--STD_LOGIC to BIT

TO_BITVECTOR(<STD_LOGIC_VECTOR>)			--STD_LOGIC_VECTOR to BIT_VECTOR
TO_STDLOGICVECTOR(<BIT_VECTOR>)				--BIT_VECTOR to STD_LOGIC_VECTOR

SIGNED(<STD_LOGIC_VECTOR>)					--STD_LOGIC_VECTOR to SIGNED
UNSIGNED(<STD_LOGIC_VECTOR>)				--STD_LOGIC_VECTOR to UNSIGNED
STD_LOGIC_VECTOR(<SIGNED/UNSIGNED>)			--SIGNED/UNSIGNED to STD_LOGIC_VECTOR

TO_SIGNED(<INTEGER>, <SIGNED>'LENGTH)		--INTEGER/NATURAL/POSITIVE to SIGNED
TO_UNSIGNED(<NATURAL>, <UNSIGNED>'LENGTH)	--NATURAL/INTEGER/POSITIVE to UNSIGNED
TO_INTEGER(<SIGNED/UNSIGNED>)				--SIGNED/UNSIGNED to INTEGER
```

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/Fx2zHfsmjNs?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>