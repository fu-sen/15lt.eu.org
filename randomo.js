// Random Screen | IchigoLatte
// Copyright (c) 2016 Keiichi SHIGA (BALLOON a.k.a. Fu-sen.)
// The MIT License (MIT) - https://gist.github.com/fu-sen/0dc11ac111b48f7aaaf8

var r;

cls();

while (1)
{
  r=rnd(32*24-1);
  lc(r%32,r/32);
  if (rnd(2)==1)
  {
    log("€");
  }
  else
  {
    log(" ");
  }
}
