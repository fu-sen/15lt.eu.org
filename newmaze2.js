// New Maze 2 | IchigoLatte+PanCake
// Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://gist.github.com/fu-sen/7e55ee56a67e07d804db9379178e3cb5

//PanCake New Maze 2

var x=1,y=1,a,b,c,d,e,k;

uart(10);

//var i=0;
//video(1);
//uart(128,4,5,0);

cls();
uart(128,4,0,0);

while(x<30)
{
 lc(x,1);
 log(chr(0x8f));
 lc(x,21);
 log(chr(0x8f));
 x=x+1;
}

while(y<22)
{
 lc(1,y);
 log(chr(0x8f));
 lc(29,y);
 log(chr(0x8f));
 y=y+1;
}

x=3;
while(x<28)
{
 y=3;
 while(y<20)
 {
  lc(x,y);
  log(chr(0x8f));

  c=rnd(3);
  a=x-(c==0)+(c==1);
  b=y-(c==2)+(c==3);

  lc(a,b);
  log(chr(0x8f));

  y=y+2;
 }
 x=x+2;
}

lc(2,2);
log(chr(83));

lc(28,20);
log(chr(242));

//while(inkey()==0)
//{
//}
//video(0);
//uart(128,4,5,1);

x=2;
y=2;

while(1)
{
 a=-2;
 while(a<3)
 {
  b=-2;
  while(b<3)
  {
   d=scr(x+b,y+a);

   if(d==0x8f)
   {
    e=0x5d;
   }
   else
   {
    e=0x64;
   }
   uart(128,6,20,
        36+b*8,18+a*8,e);

   if(d==83)
   {
    uart(128,6,20,
         36+b*8,18+a*8,0x92);
   }

   if(d==242)
   {
    uart(128,6,20,
         36+b*8,18+a*8,0x49);
   }

   b=b+1;
  }
  a=a+1;
 }

 uart(128,6,20,36,18,0x07);

 c=scr(x,y);

 lc(x,y);
 log(chr(249));

 if((x==28)*(y==20))
 {
  break;
 }

 a=x;
 b=y;

 while((a==x)*(b==y))
 {
  k=inkey();
  a=x-(k==28)+(k==29);
  b=y-(k==30)+(k==31);
  if(scr(a,b)==0x8f)
  {
   a=x;
   b=y;
  }

//  if(k==32)
//  {
//    i=1-i;
//    video(i);
//    uart(128,4,5,1-i);
//  }
 }

 lc(x,y);
 log(chr(c));

 x=a;
 y=b;
}

//video(1);
//uart(128,4,5,0);

lc(0,23);
