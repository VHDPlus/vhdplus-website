---
id: vhdl
title: VHDL
sidebar_label:  VHDL
---

## Definition

For all functions that are not (already) implemented, with `VHDL{}` you can add VHDL code to your VHDP code. If you
want to add something to the signal declaration area, you have to write `AttributeDeclaration{VHDL{}}`.

## Examples

### Generate
```vhdp
AttributeDeclaration
{
    VHDL
    {
        COMPONENT BinaryToBcdDigit IS 
        PORT(
            CLK : IN STD_LOGIC;
            Reset : IN STD_LOGIC;
            ena : IN STD_LOGIC;
            binary : IN STD_LOGIC;
            c_out : BUFFER STD_LOGIC;
            bcd : BUFFER STD_LOGIC_VECTOR(3 DOWNTO 0)
        );
        END COMPONENT;
    }
}
VHDL
{
    bcd_digits: FOR i IN 1 TO 5 GENERATE
        digit_0: BinaryToBcdDigit PORT MAP 
        (
            CLK,
            Reset,
            converter_ena,
            converter_inputs(i-1),
            converter_inputs(i),
            bcd_reg(i*4-1 DOWNTO i*4-4)
        );
    END GENERATE;
}
```

### When
```vhdp
VHDL
{
    SDA <= '0' WHEN sda_ena_n = '0' ELSE 'Z';
}
```