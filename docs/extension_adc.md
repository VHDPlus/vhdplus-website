---
id: extension_adc
title: ADC Extension
---

![ADC Extension](/img/extensions/adc/Items.png)

The ADC Extension Board is the perfect extension for any analog sensors. With it's 8 channels, 12 Bit resolution and 200kSPS, you can precisely measure all your analog sensors with one board more than 20,000 times at once.

## Design
![ADC Extension Overview](/img/extensions/adc/Items1.png)

To measure the voltage at the analog inputs A0-A7, you set VA to the maximum voltage the input can reach. So just connect 2.7-5.25V with a cable to VA or use one(!) soldering point at the back to connect 5V or 3.3V with VA.

## Connection
![ADC Connected](/img/extensions/adc/Items2.png)

Now plug in the board, connect an analog signal with A0-A7 and if you used the soldering points, you can just use VA and GND to supply your sensor.
If you have e.g. an LDR, just look up "connect LDR" to see how to connect your sensors.

## Implementation
Just add the ADC Component from the Extensions library and add one instance to your code.

```vhdp
NewComponent ADC_Interface 
(
    CLK_Frequency    => 50000000,   --50 MHz

    EN_O             => EN_O,       --ADC IOs
    CL_O             => CL_O,
    DO_I             => DO_I,
    DI_O             => DI_O,

    Reset            => Reset,      --Reset
    AOUT             => AOUT,       --Analog values as array
);
```

Now add EN_O to DI_O to the IOs from Main and a signal of the type "ADC_OUT_ARRAY". The values are updated automatically and can be used by calling TO_INTEGER(ADC_Interface_AOUT(_Input Number_))

To whole example looks like this:

```vhdp
Main
(
    EN_O	: OUT STD_LOGIC;
    CL_O	: OUT STD_LOGIC;
    DO_I	: IN  STD_LOGIC;
    DI_O	: OUT STD_LOGIC;

    led		: OUT STD_LOGIC_VECTOR(7 downto 0);
)
{
    SIGNAL ADC_Interface_AOUT             : ADC_OUT_ARRAY;

    NewComponent ADC_Interface 
    (
        CLK_Frequency    => 50000000,
        Update_Frequency => 10000,

        EN_O             => EN_O,
        CL_O             => CL_O,
        DO_I             => DO_I,
        DI_O             => DI_O,
        
        Reset            => '0',
        AOUT             => ADC_Interface_AOUT,
    );

    Process ()
    {
        led <= STD_LOGIC_VECTOR(ADC_Interface_AOUT(0)(7 downto 0));
    }
}
```

## Links
* <a href="http://www.ti.com/lit/ds/symlink/adc128s022.pdf" target="_blank">Data sheet</a>