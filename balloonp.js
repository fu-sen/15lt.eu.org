// Balloon | PanCake / IchigoLatte
// Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//PanCake Balloon

uart("\n");

video(0)

uart("PANCAKE VIDEO 01\n");

uart("PANCAKE SPRITE CREATE ");
uart("00 49\n");

uart("PANCAKE SPRITE MOVE ");
uart("00 25 13\n");

uart("PANCAKE SPRITE START ");
uart("05\n");

while(inkey()==0){}

uart("PANCAKE SPRITE START ");
uart("FF\n");

uart("PANCAKE VIDEO 00\n");

video(1);
