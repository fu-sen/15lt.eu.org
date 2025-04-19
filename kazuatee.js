// kazuate | IchigoLatte
// Copyright (c) 2016 BALLOON | FU-SEN
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2016

//KAZUate

var r=rnd(100);
var c=0;
var i;

while (1)
{
  c=c+1;
  log("turn",c,"\n");

  log("kazu(0~99)?");
  i=input();

  if (i==r)
  {
    break;
  }

  if (i<r)
  {
    log("O o ki i\n");
  }

  if (i>r)
  {
    log("Chi i sa i\n");
  }
}
