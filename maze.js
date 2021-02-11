// Maze | IchigoLatte
// Copyright (c) 2019 Keiichi SHIGA (BALLOON a.k.a. Fu-sen.)
// The MIT License (MIT) - https://gist.github.com/fu-sen/7e55ee56a67e07d804db9379178e3cb5

// Maze

var x=0,y=0;

cls();

while(x<31)
{
 lc(x,0);
 log(chr(0x8f));
 lc(x,22);
 log(chr(0x8f));
 x=x+1;
}

while(y<22)
{
 lc(0,y);
 log(chr(0x8f));
 lc(30,y);
 log(chr(0x8f));
 y=y+1;
}

x=2;
while(x<29)
{
 y=2;
 while(y<21)
 {
  lc(x,y);
  log(chr(0x8f));
  var r=rnd(3);
  var a=x-(r==0)+(r==1);
  var b=y-(r==2)+(r==3);
  lc(a,b);
  log(chr(0x8f));
  y=y+2;
 }
 x=x+2;
}

lc(29,21);
log(chr(242));

x=1;
y=1;

lc(x,y);
log(chr(249));

while((x<29)+(y<21))
{
 var a=x;
 var b=y;

 while((a==x)*(b==y))
 {
  var k=inkey();
  a=x-(k==28)+(k==29);
  b=y-(k==30)+(k==31);
  if(scr(a,b)==0x8f)
  {
   a=x;
   b=y;
  }
 }
 lc(x,y);
 log(chr(32));  
 x=a;
 y=b;
 lc(x,y);
 log(chr(249));
}
lc(0,23);
