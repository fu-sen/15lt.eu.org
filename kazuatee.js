// kazuate | IchigoLatte
// Copyright (c) 2016 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://gist.github.com/fu-sen/0dc11ac111b48f7aaaf8

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