// ��ޱ� | IchigoLatte
// Copyright (c) 2016 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2016

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