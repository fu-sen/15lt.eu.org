// Color list STAMP1 version | PanCake / IchigoLatte
// Copyright (c) 2019 BALLOON | FU-SEN
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//PanCake Color List STAMP1

var c=0,a,b,x,y;

uart("\n");
video(0);
uart("PANCAKE VIDEO 01\n");
uart("PANCAKE CLEAR 00\n");

while(c<16){
 a=(c%4)*20;
 b=(c/4)*11;
 x=0;
 while(x<24){
 y=0;
  while(y<16){
   uart(128,14,3);
   uart(x+a);
   uart(y+b);
   uart(c);
   uart(0xff,0xff,0xff,0xff);
   uart(0xff,0xff,0xff,0xff);
   y=y+8;
  }
  x=x+8;
 }
 c=c+1;
}

while(inkey()==0){}

uart("\n");
uart("PANCAKE VIDEO 00\n");
video(1);
