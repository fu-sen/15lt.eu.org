//PanCake Sine Curve

var x,y,ox=0,oy=22;

uart(10);

//video(0);
//uart(128,4,5,1);

uart(128,4,0,0);
uart(128,8,1,0,22,79,22,7);

x=1;
while(x<80)
{
 y=sin8(x*360/79);
 y=-y*22/256+22;

 uart(128,8,1,ox,oy,x,y,1);
 ox=x;
 oy=y;

 x=x+1;
}

while(inkey()==0){}

//video(1);
//uart(128,4,5,0);
