// IchigoLatte character random display | PanCake / IchigoLatte
// Copyright (c) 2019 BALLOON | FU-SEN
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//PanCake IchigoLatte CHRput

var c,v;

video(0);
uart("PANCAKE VIDEO 01\n");
uart("PANCAKE CLEAR 00\n");

while(inkey()==0){
 uart(128,14,3);
 uart(rnd(72),rnd(37));
 uart(rnd(16));

 c=mem("f");
 c=c+(rnd(224)+32)*8;
 v=0;
 while(v<8){
  uart(mem(c+v));
  v=v+1;
 }
}

uart("PANCAKE VIDEO 00\n");
video(1);
