---
id: getstarted_compare
title: Comparison Arduino, VHDP and VHDL
sidebar_label: Comparison Arduino, VHDP and VHDL
---

## Sequential Example

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
    Process() {                 --For parallel and procedural programming
        Thread {   			      --Procedural programming
            LED <= '1'; 		      --LED on
            Wait(1000ms);		      --Wait
            LED <= '0';             --LED off
            Wait(1000ms);		      --Wait
        }
    }
}
```

### Generated VHDL Code

```vhdl
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

## Parallel Calculation Example (+ VARIABLE vs SIGNAL)

### Arduino

Can't be compared because Arduino doesn't support parallel programming.
You can't have multiple parallel processes for different tasks and calculations are much slower because one operation can take more than one clock cycle. If you have multiple operations together (like "(Xi / 10) + 5"), every operation increases the time after calculation is finished.

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

```vhdl
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

## Parallel Process Example

This is a simple code for an ultrasonic-sensor

### VHDP

```vhdp
Main (
    US_Trigger : OUT STD_LOGIC := '0';
    US_Echo    : IN  STD_LOGIC := '0'; 
){
    Process Trigger_Process () {
    	--Creates an impuls every ~100ms to trigger the distance measurement
        Thread {
            US_Trigger <= '1';
            Wait(10us);
            US_Trigger <= '0';
            Wait(100ms);
        }
    }
    
    Process Echo_Process () {
	    Thread {
	        --Waits for a new echo impuls to calculate the distance
	        While(US_Echo = '1'){}
	        While(US_Echo = '0'){}
	
	        --Counts the microseconds while the sound travels to the object and back
	        --58 microseconds = 1cm
	        For(VARIABLE d : INTEGER := 0; US_Echo = '1'; d := d + 1) {
                Wait(58us);
            }
	        --d is now the distance to the object in cm
	    }
    }
}
```

### VHDL

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 

ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  
  US_Trigger : OUT STD_LOGIC := '0';
  US_Echo    : IN  STD_LOGIC := '0'
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS
  
BEGIN

  Trigger_Process : PROCESS (CLK)  
    VARIABLE Thread3 : NATURAL range 0 to 1200124 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    CASE (Thread3) IS
      WHEN 0 =>
        US_Trigger <= '1';
        Thread3 := 1;
      WHEN 1 to 121 =>
        Thread3 := Thread3 + 1;
      WHEN 122 =>
        US_Trigger <= '1';
        Thread3 := 123;
      WHEN 123 to 1200123 =>
        IF (Thread3 < 1200123) THEN 
          Thread3 := Thread3 + 1;
        ELSE
          Thread3 := 0;
        END IF;
      WHEN others => Thread3 := 0;
    END CASE;
  END IF;
  END PROCESS;
  
  Echo_Process : PROCESS (CLK)  
    VARIABLE d : INTEGER := 0;
    VARIABLE Thread9 : NATURAL range 0 to 4 := 0;
    VARIABLE Thread14 : NATURAL range 0 to 698 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    CASE (Thread9) IS
      WHEN 0 =>
        IF (US_Echo = '1') THEN
        ELSE
          Thread9 := Thread9 + 1;
        END IF;
      WHEN 1 =>
        IF (US_Echo = '0') THEN
        ELSE
          Thread9 := Thread9 + 1;
        END IF;
      WHEN 2 =>
        d := 0;
        Thread9 := 3;
      WHEN 3 =>
        IF ( US_Echo = '1') THEN 
          Thread9 := Thread9 + 1;
        ELSE
          Thread9 := 0;
        END IF;
      WHEN (3+1) =>
        CASE (Thread14) IS
          WHEN 0 to 696 =>
            Thread14 := Thread14 + 1;
          WHEN 697 =>
            d := d + 1;
            Thread9 := 3;
            Thread14 := 0;
          WHEN others => Thread14 := 0;
        END CASE;
      WHEN others => Thread9 := 0;
    END CASE;
  END IF;
  END PROCESS;
  
END BEHAVIORAL;
```

## Parallel Component Example

In the libraries you can find `Components` that form an interface for different hardware. You can find controller for ultrasonic-sensors or for UART data (like Serial in Arduino).
Every `NewComponent` runs in parallel, so you can add as many UART ports as you need.

### VHDP

```vhdp
Main (
    US_Trigger : OUT STD_LOGIC_VECTOR(7 downto 0) := '0';   --8 ultrasonic sensors
    US_Echo    : IN  STD_LOGIC_VECTOR(7 downto 0) := '0';
    
    LED        : OUT STD_LOGIC;                             --1 LED to show distance with brightness
){
    TYPE Distance_type IS ARRAY (0 to 7) OF NATURAL range 0 to 255;
    SIGNAL Distance : Distance_type;                        --Distances of the 8 sensors
    
    Generate (for i in 0 to 7) {                            --Generate an controller for every ultrasonic-sensor
        NewComponent Ultrasonic_Controller (
            Update_Frequency => 15,                         --Checks 15 times in a second
            Trigger          => US_Trigger(i),
            Echo             => US_Echo(i),
            Dist             => Distance(i),
        );
    }
    
    --Convert number from 0 to 255 to a 8-bit bit vector
    PWM_Generator_Duty <= STD_LOGIC_VECTOR(TO_UNSIGNED(Distance(0), PWM_Generator_Duty'LENGTH));
    
    SIGNAL PWM_Generator_Duty : STD_LOGIC_VECTOR (7 DOWNTO 0);
    NewComponent PWM_Generator (                            --Outputs distance of first sensor
        Duty            => PWM_Generator_Duty,
        PWM_Out(0)      => LED,
    );
}
```

### VHDL

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 

ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  
  US_Trigger : OUT STD_LOGIC_VECTOR(7 downto 0) := '0';   
  US_Echo    : IN  STD_LOGIC_VECTOR(7 downto 0) := '0';
  LED        : OUT STD_LOGIC         
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS

  TYPE Distance_type IS ARRAY (0 to 7) OF NATURAL range 0 to 255;
  SIGNAL Distance : Distance_type;
  SIGNAL PWM_Generator_Duty            : STD_LOGIC_VECTOR (7 DOWNTO 0);
  
  COMPONENT Ultrasonic_Controller IS
  GENERIC (
    CLK_Frequency       : NATURAL := 12000000;      
    Update_Frequency    : NATURAL := 15      
  );
  PORT (
    CLK : IN STD_LOGIC;
    Reset   : IN  STD_LOGIC := '0';             
    Trigger : OUT STD_LOGIC := '0';             
    Echo    : IN  STD_LOGIC := '0';             
    Dist    : OUT NATURAL range 0 to 1000 := 0 
  );
  END COMPONENT;
  
  COMPONENT PWM_Generator IS
  GENERIC (
    CLK_Frequency   : INTEGER := 12000000;   
    PWM_Frequency   : INTEGER := 100000;     
    Bits_Resolution : INTEGER := 8;          
    Phases          : INTEGER := 1   
  );
  PORT (
    CLK : IN STD_LOGIC;
    Reset     : IN  STD_LOGIC := '0';                             
    Enable    : IN  STD_LOGIC := '1';                             
    Duty      : IN  STD_LOGIC_VECTOR(Bits_Resolution-1 DOWNTO 0) := (others => '0'); 
    PWM_Out   : OUT STD_LOGIC_VECTOR(Phases-1 DOWNTO 0) := (others => '0')   
  );
  END COMPONENT;
  
BEGIN

  PWM_Generator_Duty <= STD_LOGIC_VECTOR(TO_UNSIGNED(Distance(0), PWM_Generator_Duty'LENGTH));
  
  Generate1 : for i in 0 to 7 GENERATE
    Ultrasonic_Controller1 : Ultrasonic_Controller
    GENERIC MAP (
      Update_Frequency => 15       
    ) PORT MAP (
      CLK => CLK,
      Trigger          => US_Trigger(i),
      Echo             => US_Echo(i),
      Dist             => Distance(i)
    );
  END GENERATE Generate1;
  
  PWM_Generator1 : PWM_Generator  PORT MAP (
    CLK => CLK,
    Duty            => PWM_Generator_Duty,
    PWM_Out(0)      => LED
  );
  
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

```vhdl
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

## Loop Example

### Arduino

```cpp
void loop() {
  //Only has sequential loops
  for (int i = 0; i < 10; i ++){	//Turn LEDs 0-9 on
    digitalWrite(i, HIGH);
  }
  delay(1000);				//Wait
  int i = 0;
  while (i < 10){			//Turn LEDs 0-9 off
    digitalWrite(i, LOW);
    i ++;
  }
  delay(1000);				//Wait
}
```

### VHDP

```vhdp
Main (
    LEDs_par : OUT STD_LOGIC_VECTOR(0 to 9);
    LEDs_seq : OUT STD_LOGIC_VECTOR(0 to 9);
){
    Process() {                         --For parallel and procedural programming
        For(i IN 0 to 9) {		        --Turn every led on in the first clock cycle
            LEDs_par(i) <= '1';		    --LEDs_par <= (others => '1'); does the same
        }
        
        Thread {			            --Same program as Arduino program
            For(VARIABLE i : INTEGER := 0; i < 10; i := i + 1) {
                LEDs_seq(i) <= '1';	    --Turn LEDs 0-9 on
            }
            Wait(1000ms);	          	--Wait
            i := 0;
            While(i < 10) {	        	--Turn LEDs 0-9 off
                LEDs_seq(i) <= '0';
                i := i + 1;
            }
            Wait(1000ms);		        --Wait
        }
    }
}
```

### VHDL

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 

ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  
  LEDs_par : OUT STD_LOGIC_VECTOR(0 to 9);
  LEDs_seq : OUT STD_LOGIC_VECTOR(0 to 9)
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS
  
BEGIN

  PROCESS (CLK)  
    VARIABLE i : INTEGER := 0;
    VARIABLE Thread4 : NATURAL range 0 to 24000006 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    FOR i IN 0 to 9 LOOP
      LEDs_par(i) <= '1';
    END LOOP;
    CASE (Thread4) IS
      WHEN 0 =>
        i := 0;
        Thread4 := 1;
      WHEN 1 =>
        IF ( i < 10) THEN 
          LEDs_seq(i) <= '1';
          i := i + 1;
        ELSE
          Thread4 := Thread4 + 1;
        END IF;
      WHEN 2 to 12000002 =>
        Thread4 := Thread4 + 1;
      WHEN 12000003 =>
        i := 0;
        Thread4 := 12000004;
      WHEN 12000004 =>
        IF (i < 10) THEN 
          LEDs_seq(i) <= '0';
          i := i + 1;
        ELSE
          Thread4 := Thread4 + 1;
        END IF;
      WHEN 12000005 to 24000005 =>
        IF (Thread4 < 24000005) THEN 
          Thread4 := Thread4 + 1;
        ELSE
          Thread4 := 0;
        END IF;
      WHEN others => Thread4 := 0;
    END CASE;
  END IF;
  END PROCESS;
  
END BEHAVIORAL;
```

## Loop Comparison

The parallel `For` and `While` can be also be used in a `Thread`.

### VHDP

```vhdp
Main (
    LEDs : OUT STD_LOGIC_VECTOR(0 to 9);
){
    Process() {
        Thread {
            --Turn on LEDs 0-9 sequentially in 12 clock cycles (10 + 1 for start and end)
            For(VARIABLE i : INTEGER := 0; i < 10; i := i + 1) {
                LEDs(i) <= '1';	
            }
            Wait(1000ms);		--Wait
	        --Turn on LEDs 0-9 parallely in 1 clock cycle
            ParFor(i IN 0 to 9) {		
                LEDs(i) <= '1';		
            }
            Wait(1000ms);		--Wait
        }
    }
}
```

### VHDL

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.numeric_std.all; 
      
ENTITY Blink IS
PORT (
  CLK : IN STD_LOGIC;
  
  LEDs : OUT STD_LOGIC_VECTOR(0 to 9)
);
END Blink;

ARCHITECTURE BEHAVIORAL OF Blink IS
  
BEGIN

  PROCESS (CLK)  
    VARIABLE i : INTEGER := 0;
    VARIABLE Thread3 : NATURAL range 0 to 24000005 := 0;
  BEGIN
  IF RISING_EDGE(CLK) THEN
    CASE (Thread3) IS
      WHEN 0 =>
        i := 0;
        Thread3 := 1;
      WHEN 1 =>
        IF ( i < 10) THEN 
          LEDs(i) <= '1';
          i := i + 1;
        ELSE
          Thread3 := Thread3 + 1;
        END IF;
      WHEN 2 to 12000002 =>
        Thread3 := Thread3 + 1;
      WHEN 12000003 =>
        FOR i IN 0 to 9 LOOP
          LEDs(i) <= '1';
        END LOOP;
        Thread3 := 12000004;
      WHEN 12000004 to 24000004 =>
        IF (Thread3 < 24000004) THEN 
          Thread3 := Thread3 + 1;
        ELSE
          Thread3 := 0;
        END IF;
      WHEN others => Thread3 := 0;
    END CASE;
  END IF;
  END PROCESS;
  
END BEHAVIORAL;
```


