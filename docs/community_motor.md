---
id: community_motor
title: How to make your first robot
sidebar_label:  Your first robot
---

## What kind of robot?

In this tutorial we want to make a robot that can drive a pre defined route and surround objects blocking the route.

![Demonstration](assets/community/demonstration.gif)

## What you need

This is a list of realy everything you need, but if you will do more projects, this includes a lot of essentials you will need for every project.

**Important:** This are only links for the german products.<br/>

### 1. Electronics
1.  [VHDPlus Core MAX10](https://www.trenz-electronic.de/)
2.  [2 Motor drivers*](https://amzn.to/2RRGZTa)
3.  [2 Motors with wheel and encoder*](https://amzn.to/2PkJs6R)
4.  [3 Ultrasonic sensors*](https://amzn.to/2qSx0lp)
5.  [1 9V block battery*](https://amzn.to/38DsVCB)
6.  [1 Step down converter*](https://amzn.to/2YSZ7NN)
7.  [6 1k resistors*](https://amzn.to/2EnqLsF)
8.  [1 Battery clip*](https://amzn.to/2spvmIo)
9.  [1 Small breadboard*](https://amzn.to/2tac4a7)
10. [1 Jumper connector kit*](https://amzn.to/2PXw2gj)
11. [Some jumper cables*](https://amzn.to/2PkQGYr)
### 2. Casing
1. [Some wood* (or be creative)](https://amzn.to/36Klh7R)
2. [M3 Screws*](https://amzn.to/2LW3oL5)
### 3. Tools
1. [Screwdriver*](https://amzn.to/2LQKEg0)
2. [Small pliers](https://amzn.to/34qSCmI)
3. [Cordless Screwdriver*](https://amzn.to/2LVNEb7)
4. [Drill bit set*](https://amzn.to/35h8qcN)

*This links are Affiliate Links. By purchasing with them you support us and our work, because we get a part of the revenue as commission. You still pay the same price.

## The hardware

### The "casing"

Be creative and invent your own casing. The easiest way is probably to take some wood plank and mount the motors.
If you have the same motors as me, take the mount, drill some holes with a cordless screwdriver and a 3mm drill bit and secure it with the M3 screws. This is how my solution looks like:

![Motor](assets/community/Motor_Mount.jpg)

The same way you can mount the ultrasonic sensors. Ideally you have two that look to the sides and one or more that look forward, so they can detect if the robot hit something. If you bought a set of 5 sensors with mount, you can arrange them like this:

![Ultrasonic](assets/community/US_Mount.jpg)

### Electronics

First we connect the Motors like that:
![Motor connect](assets/community/Motor_Connect.png)
You can use the breadboard and jumper cables to make the connections. Use the Jumper connector kit and the pliers to be able to plug the motor cables in the breadboard.

The yellow cables and the motor driver outputs should be connected with the FPGA. The Motor driver and Motors have to be connected with 3.3V and GND (Blue = 3.3V and Black = GND). The Battery is connected with GND and VM of the motor driver and finaly the motors have to be connected with the motor outputs of the motor driver.

To power the FPGA, you could either use a powerbank and and connect an USB cable or you take a step down converter, supply it with the 9V, set 5V as output and connect it with VBUS (next to GND) and GND.



## The software

## Possible problems

First make shure that everything is connected like described and that you chose the correct pins of your fpga.

### 1. Only one wheel turns

1. When you e.g. connect the encoders correctly, but flip the right and left motor output, the robot will try to correct the speed and end up in having only one wheel turn. 
2. Turn the wheel of the spinning motor and check if the encoder input changes it's state (e.g. by connecting the encoder input with the led). If not, check every part between encoder and fpga, if everything is connected. You can use a multimeter and check if the voltage changes between 0 and 3V when you turn the wheel.

### 2. No wheel turns

1. Make sure that Route_Steps is not 0 and that the lengths are > 0.
2. Error_Delay is maybe too low (if CLK_Frequency is correct this is in ms)
3. Make sure that there is a signal at the motor output pins (with a multimeter or by connecting the signal with an LED).
   - If there is an output, check if the motor driver is working, by connecting the input pin directly with 3.3V. Check with a multimeter the voltages of the motor driver in and outputs. If it outputs voltage, check the connection between driver and motor. Otherwise maybe try a different motor driver.
   - If there is not output at the motor pins, check if you chose the correct pins and that Route_Start changes from '0' to '1' at the beginning (you have to press the button to start driving).

### 3. Both wheels turn, but in opposite direction

Check which wheel truns backwards and switch the connection of the M1 and M2 motor driver output.

### 4. The wheels are working but don't drive the desired lenghts

Check the Holes_In_Disk, Gear_Ratio and Wheel_Circumference parameters again. Holes_In_Disk is the number of changes from '0' to '1' of the encoder input for one wheel turn. Gear_Ratio can be found in the motor description (1:90 = 90). Wheel_Circumference is the diameter of the wheel (in mm) times 3.14 (pi). Finaly check if all your distances are in mm (1m = 100cm = 1000mm).

### 5. The robot doesn't drive streight

With Correction_Step, Correction_Cycles, Length_Corr_Step and Max_Length_Diff you can adjust this. 
1. If the encoder spins very quickly and the speed changes to heavily, increase Correction_Cycles and Max_Length_Diff and decrease Correction_Step and Length_Corr_Step.
2. If the encoder is e.g. connected directly with the wheel and spins not that quickly, decrease Correction_Cycles and Max_Length_Diff and increase Correction_Step and Length_Corr_Step.
3. If this doesn't help, you can try to change the Debounce_Cycles constant in the Motor_Route_Drive library.

### 6. The robot doesn't drive all route parts

- Check if Route_Steps is correct.
- Maybe Brake_Speed is too high and the motor hasn't enought power at the end

### 7. The robot drives the wrong route

- Check if Collision is '0'
- Error_Delay is maybe too low (if CLK_Frequency is correct this is in ms)
- Maybe the left and right motors are switched
- check if the lengths are correct (see 4.)

### 8. The robot doesn't stop precisely enought

You can set the length and amount of speed difference (0-255) with that the motor should brake. Brake_Length sets the length at the end of a route part, in that the robot should decelerate (in mm). With Brake_Speed you can set how much the robot should brake. Be cautious that the robot has enought power at the end of the route part to finish it. 

We hope you enjoyed the tutorial and feel free to check out 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vhdp) if you have problems
- [Youtube](https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw) if you are interested in more tutorials
- [Github](https://github.com/search?utf8=%E2%9C%93&q=vhdplus) for more examples and inspiration