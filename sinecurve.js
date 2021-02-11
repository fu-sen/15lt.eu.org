// Sine Curve | IchigoLatte+PanCake
// Copyright (c) 2019 Keiichi SHIGA (BALLOON a.k.a. Fu-sen.)
// The MIT License (MIT) - https://gist.github.com/fu-sen/7e55ee56a67e07d804db9379178e3cb5

//PanCake Sine Curve

var x,y,ox=0,oy=22;

uart(10);

//video(0);
//uart(128,4,5,1);

uart(128,4,0,0);
uart(128,8,1,0,22,79,22,7);

x=1;
while(x<80)
{
 y=sin8(x*360/79);
 y=-y*22/256+22;

 uart(128,8,1,ox,oy,x,y,1);
 ox=x;
 oy=y;

 x=x+1;
}

while(inkey()==0){}

//video(1);
//uart(128,4,5,0);
