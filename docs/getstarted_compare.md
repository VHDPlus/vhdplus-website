---
id: getstarted_compare
title: Comparison Arduino, VHDP and VHDL
sidebar_label: Comparison Arduino, VHDP and VHDL
---

## Procedural Example

### Arduino

```cpp
#define LED 13

void setup() {
  pinMode(LED, OUTPUT);			//Declare output
}

void loop() {					//Procedural programming
  digitalWrite(LED, HIGH);		//LED on
  delay(1000);                  //Wait
  digitalWrite(LED, LOW);		//LED off
  delay(1000);                  //Wait
}
```

### VHDP

```vhdp
Main (
	LED : OUT STD_LOGIC;        --Declare output
){
	Process() {					--For parallel and procedural programming
		Thread {   			    --Procedural programming
			LED <= '1'; 		--LED on
			Wait(1000ms);		--Wait
			LED <= '0';			--LED off
			Wait(1000ms);		--Wait
		}
	}
}
```

### Generated VHDL Code

```vhdp
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 

ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  LED : OUT STD_LOGIC			--Declare output
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS
BEGIN

  PROCESS (CLK)  
    VARIABLE Thread3 : NATURAL range 0 to 24000004 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    CASE (Thread3) IS					--Created state machine
      WHEN 0 =>
        LED <= '1';						--LED on
        Thread3 := 1;
      WHEN 1 to 12000001 =>		
        Thread3 := Thread3 + 1;			--Wait
      WHEN 12000002 =>
        LED <= '0';						--LED off
        Thread3 := 12000003;
      WHEN 12000003 to 24000003 =>
        IF (Thread3 < 24000003) THEN 
          Thread3 := Thread3 + 1;		--Wait
        ELSE
          Thread3 := 0;			
        END IF;
      WHEN others => Thread3 := 0;
    END CASE;
  END IF;
  END PROCESS;
  
END BEHAVIORAL;
```

## Parallel Example

### Arduino

```cpp
void loop() {
  Xo = (Xi / 10) + 5;       //Takes several clock cycles for calculation
  Yo = (Yi / 5) + 10;       //Second calculation is some time behind
  //Can't be compared because Arduino doesn't support parallel programming
}
```

### VHDP

```vhdp
Main (
    Xi : IN  INTEGER range 0 to 255;    --Declare inputs
    Yi : IN  INTEGER range 0 to 255;      
    Xo : OUT INTEGER range 0 to 255;    --Declare output
    Yo : OUT INTEGER range 0 to 255;    
){
    Process() {                         --For parallel and procedural programming
        Xo <= (Xi / 10) + 5;            --Everything calculated in one clock cycle
        Yo <= (Yi / 5) + 10;            --Second calculation is finished together with first
        
        SIGNAL   i1 : INTEGER := 0;     --Create integer signal (takes value one cycle after assignment)
        VARIABLE i2 : INTEGER := 0;     --Create integer variable (takes value immediately, but can only be used in this process)
        i1 <= i1 + 1;                   --Add both + 1
        i2 := i2 + 1;
        
        If(i1 > 0){                     --The signal is still 0, so this is false
            i1 <= i1 - 1;
        }
        If(i2 > 0){                     --The variable is 1 already
            i2 := i2 - 1;
        }
    }
}
```

### VHDL

```vhdp
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 
use work.String_Type_Package.all;

ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  
  Xi : IN  INTEGER range 0 to 255;      --Declare inputs
  Yi : IN  INTEGER range 0 to 255;
  Xo : OUT INTEGER range 0 to 255;      --Declare output
  Yo : OUT INTEGER range 0 to 255
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS
  SIGNAL   i1 : INTEGER := 0;
BEGIN

  PROCESS (CLK)
    VARIABLE i2 : INTEGER := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    Xo <= (Xi / 10) + 5;                --Code in "Process" is converted 1:1 into VHDL
    Yo <= (Yi / 5) + 10;                

    i1 <= i1 + 1;                   
    i2 := i2 + 1;

    IF (i1 > 0) THEN                    --Also if you use if, case, for or while
      i1 <= i1 - 1;
    END IF;

    IF (i2 > 0) THEN
      i2 := i2 - 1;
    END IF;
  END IF;
  END PROCESS;
  
END BEHAVIORAL;
```

## String Example

### Arduino

```cpp
void setup() {
  Serial.begin(9600);               //Start UART with Baudrate = 9600
}

void loop() {
  Serial.println("Hello World");    //Send "Hello World" string
  delay(2000);                      //Wait
}
```

### VHDP

```vhdp
Main (
    RX : IN  STD_LOGIC;             --I/Os for USB to UART converter
    TX : OUT STD_LOGIC;
){
    Process () {
        Thread {                    --Procedural programming
            --Create constant string "Hello World!" (Adds RAM and interface for the stored string)
            NewFunction assignString (s"Hello World!", hwStr); 
            --Output string with UART component below
            NewFunction printString (hwStr, UART_Interface_TX_Data, UART_Interface_TX_Busy, UART_Interface_TX_Enable);

            Wait(2000ms);           --Wait
        }
    }
    
    SIGNAL UART_Interface_TX_Enable     : STD_LOGIC;
    SIGNAL UART_Interface_TX_Busy       : STD_LOGIC;
    SIGNAL UART_Interface_TX_Data       : STD_LOGIC_VECTOR (7 DOWNTO 0);
    
    NewComponent UART_Interface     --Add a UART interface (You can add as many as needed)
    (
        Baud_Rate     => 9600,      --Set Baudrate = 9600
        
        RX            => RX,
        TX            => TX,
        TX_Enable     => UART_Interface_TX_Enable,
        TX_Busy       => UART_Interface_TX_Busy,
        TX_Data       => UART_Interface_TX_Data,
    );
}
```

### VHDL

```vhdp
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 
use work.String_Type_Package.all;

ENTITY Blink IS

PORT (
  CLK : IN STD_LOGIC;
  
  RX : IN  STD_LOGIC;             
  TX : OUT STD_LOGIC
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS

  SIGNAL UART_Interface_TX_Enable     : STD_LOGIC;
  SIGNAL UART_Interface_TX_Busy       : STD_LOGIC;
  SIGNAL UART_Interface_TX_Data       : STD_LOGIC_VECTOR (7 DOWNTO 0);
  SIGNAL hwStr                        : String_Type;

  COMPONENT Single_Port_ROM IS
  GENERIC (
      Data    : STD_LOGIC_VECTOR := x"524f4d204578616d706c65"
  );
  PORT (
    CLK : IN STD_LOGIC;
    Length   : OUT NATURAL := Data'LENGTH/8;
    Address  : in  natural range 0 to Data'LENGTH/8-1;
    Data_OUT : out std_logic_vector(7 downto 0)
  );
  END COMPONENT;

  COMPONENT UART_Interface IS
  GENERIC (
    CLK_Frequency   :   INTEGER     := 12000000;    
    Baud_Rate       :   INTEGER     := 19200;       
    OS_Rate         :   INTEGER     := 16;          
    D_Width         :   INTEGER     := 8;           
    Parity          :   INTEGER     := 0;           
    Parity_EO       :   STD_LOGIC   := '0'
  );
  PORT (
    CLK : IN STD_LOGIC;
    Reset       : IN    STD_LOGIC := '0';                       
    RX          : IN    STD_LOGIC := '1';                       
    TX          : OUT   STD_LOGIC := '1';                       
    TX_Enable   : IN    STD_LOGIC := '0';                       
    TX_Busy     : OUT   STD_LOGIC := '0';                       
    TX_Data     : IN    STD_LOGIC_VECTOR(D_Width-1 DOWNTO 0) := (others => '0');    
    RX_Busy     : OUT   STD_LOGIC := '0';                       
    RX_Data     : OUT   STD_LOGIC_VECTOR(D_Width-1 DOWNTO 0) := (others => '0');    
    RX_Error    : OUT   STD_LOGIC := '0'
  );
  END COMPONENT;
  
BEGIN

  Single_Port_ROM1 : Single_Port_ROM
  GENERIC MAP (
      Data     => x"48656c6c6f20576f726c6421"       --constant "Hello World!" string
  ) PORT MAP (
    CLK => CLK,
    Length   => hwStr.Length,
    Address  => hwStr.Address,
    Data_OUT => hwStr.Data_OUT
  );

  PROCESS (CLK)  
    VARIABLE printString_i : NATURAL := 0;
    VARIABLE Thread4 : NATURAL range 0 to 24000004 := 0;
    VARIABLE Thread7 : NATURAL range 0 to 6 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    CASE (Thread4) IS
      WHEN 0 =>
        printString_i := 0;
        Thread4 := 1;
      WHEN 1 =>
        IF ( printString_i < hwStr.Length) THEN     --Sends chars one by one out of ROM
          Thread4 := Thread4 + 1;
        ELSE
          Thread4 := Thread4 + 2;
        END IF;
      WHEN (1+1) =>
        CASE (Thread7) IS
          WHEN 0 =>
            hwStr.Address <= printString_i;
            Thread7 := 1;
          WHEN 1 =>
            tx_data <= hwStr.Data_OUT;
            UART_Interface_TX_Enable <= '1';
            Thread7 := 2;
          WHEN 2 =>
            IF (tx_busy = '0') THEN
            ELSE
              Thread7 := Thread7 + 1;
            END IF;
          WHEN 3 =>
            UART_Interface_TX_Enable <= '0';
            Thread7 := 4;
          WHEN 4 =>
            IF (tx_busy = '1') THEN
            ELSE
              Thread7 := Thread7 + 1;
            END IF;
          WHEN 5 =>
            printString_i := printString_i + 1;
            Thread7 := 0;
            Thread4 := 1;
          WHEN others => Thread7 := 0;
        END CASE;
      WHEN 3 to 24000003 =>                         --Wait
        IF (Thread4 < 24000003) THEN 
          Thread4 := Thread4 + 1;
        ELSE
          Thread4 := 0;
        END IF;
      WHEN others => Thread4 := 0;
    END CASE;
  END IF;
  END PROCESS;

  UART_Interface1 : UART_Interface      --Add a UART interface (You can add as many as needed)
  GENERIC MAP (
      Baud_Rate   => 9600               --Set Baudrate = 9600
  ) PORT MAP (
    CLK           => CLK,
    RX            => RX,
    TX            => TX,
    TX_Enable     => UART_Interface_TX_Enable,
    TX_Busy       => UART_Interface_TX_Busy,
    TX_Data       => UART_Interface_TX_Data
  );
  
END BEHAVIORAL;
```