// Random Screen | IchigoLatte
// Copyright (c) 2016 BALLOON | FU-SEN
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2016

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