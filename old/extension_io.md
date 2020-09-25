---
id: extension_io
title: IO Extension
---

This board can be used to add more in- and outputs to your fpga
## Design
![IO Extension](/img/extensions/io/Items.png)

The board requires only one I²C interface with 2 IOs and offers 16 freely assignable inputs and outputs. In addition, the I²C interface can be used with other boards.
## Implementation

```vhdp
NewComponent IO_Expansion 
(
	CLK_Freq    => 50000000,
	Bus_CLK     => 400000,
	Update_Freq => 1000,

	Reset       => '0',
	SDA         => SDA,
	SCL         => SCL,
	Enable      => btn,
	Busy        => IO_Expansion_Busy,
	Config      => IO_Expansion_Config,
	Outputs     => IO_Expansion_Outputs,
	Inputs      => IO_Expansion_Inputs,
);

Process ()
{
	led <= IO_Expansion_Inputs(15 downto 12) & IO_Expansion_Inputs(7 downto 4);
	Thread
	{
		IO_Expansion_Outputs <= NOT IO_Expansion_Outputs;
		Wait(5000000);
	}
}
```