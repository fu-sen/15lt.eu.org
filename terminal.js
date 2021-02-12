// Terminal | IchigoLatte 1.0.0b8+
// Copyright (c) 2018 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2018

//Terminal
 
var d,c=0;
 
bps(2400);
 
while(1)
{
  d=uart();
  if((d!=-1)*(d!=13))
  {
    if(c==1)
    {
      log(chr(8));
      c=0;
    }
 
    log(chr(d));
  }
  else if((d==-1)*(c==0))
  {
    c=1;
    log(chr(140));
  }
 
  d=inkey();
  if(d==10)
  {
    if(c==1)
    {
      log(chr(8));
      c=0;
    }
 
    // log("\n"); // echo
    uart(13); // CR
    uart(10); // LF
  }
  else if(d!=0)
  {
    if(c==1)
    {
      log(chr(8));
      c=0;
    }
 
    // log(chr(d)); // echo
    uart(d);
  }
}
