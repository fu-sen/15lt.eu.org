// Output of background color palette and images | PanCake / IchigoLatte
// Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
// The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

//PanCake Output Background

var k,l=0;

uart("\n");
uart("PANCAKE RESET\n");
video(0);

uart("PANCAKE VIDEO 01\n");

while(l<2){
 l=0;

 while(l==0){
  k=inkey();

  if((k>47)*(k<58)){l=1;}
  if((k>64)*(k<79)){l=1;}
  if((k>96)*(k<111)){
    k=k-32;
    l=1;
  }
  if((k==10)+(k==32)){l=2;}
 }

 if(l==1){
  uart("PANCAKE ");
  if(k<71){uart("CLEAR ");}
  else{
   uart("IMAGE "); k=k-23;
  }
  uart("0");
  uart(k);
  uart("\n");
 }
}

uart("PANCAKE VIDEO 00\n");
video(1);
