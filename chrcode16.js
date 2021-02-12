// Character Code List HEX | IchigoLatte 1.0.0b8+
// Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//Character Code List 16

var c=0,i;

cls();

while(c<256)
{
  lc(c%16+2,c/16+2);
  log(chr(c));

  c=c+1;
}

i=0;

while(i<16)
{
  c=i+48;

  if(i>9)
  {
    c=c+7;
  }

  lc(i+2,0);
  log(chr(c));  
  lc(i+2,1);
  log(chr(145));

  lc(0,i+2);
  log(chr(c));
  lc(1,i+2);
  log(chr(146));

  i=i+1;
}

lc(0,0);
log("\\");

lc(1,1);
log(chr(152));

lc(0,23);
