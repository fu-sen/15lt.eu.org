// ��ޱ� | IchigoLatte
// Copyright (c) 2016 Keiichi SHIGA (BALLOON a.k.a. Fu-sen.)
// The MIT License (MIT) - https://gist.github.com/fu-sen/0dc11ac111b48f7aaaf8

//��ޱ�

var r=rnd(100);
var c=0;
var i;

while (1)
{
  c=c+1;
  log("���",c,"\n");

  log("���(0~99)?");
  i=input();

  if (i==r)
  {
    break;
  }

  if (i<r)
  {
    log("����\n");
  }

  if (i>r)
  {
    log("����\n");
  }
}
