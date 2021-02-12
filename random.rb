# Random screen | IchigoLatte Ruby
# Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

# Random Screen

cls

while 1
 r=rnd 32*24-1
 lc r%32,r/32

 c=rnd 2
 if c==1
  c=0x8f
 else
  c=0x20
 end
 print chr c
end
