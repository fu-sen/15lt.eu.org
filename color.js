// Color list | PanCake / IchigoLatte
// Copyright (c) 2019 BALLOON | FU-SEN
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//PanCake Color List

var c=0,x,y,z;

uart("\n");

video(0);
uart("PANCAKE VIDEO 01\n");
uart("PANCAKE CLEAR 00\n");

while(c<16){
 x=(c%4)*20;
 y=(c/4)*11;
 z=0;
 while(z<11){
  uart(128,8,1);
  uart(x);
  uart(y+z);
  uart(x+19);
  uart(y+z);
  uart(c);

  z=z+1;
 }

 c=c+1;
}

while(inkey()==0){}

uart("\n");
uart("PANCAKE VIDEO 00\n");
video(1);
