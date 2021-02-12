// Character list | IchigoLatte
// Copyright (c) 2016 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2016

//Character code list

var c=0;

cls();

while(c<256)
{
  lc(c%32,c/32)
  log(chr(c));

  c=c+1;
}
