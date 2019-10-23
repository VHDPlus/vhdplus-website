---
id: vhdp_operators_concatation
title: Concatation
sidebar_label:  Concatation
---

```vhdp
LED : OUT STD_LOGIC_VECTOR (7 downto 0) := (others => '0');

LED <= "1111" & "0000"; -> "11110000"
LED <= (7 => '1', 6 downto 4 => "111", others => '0'); -> "11110000"
```