# Random screen | IchigoLatte Ruby
# Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://gist.github.com/fu-sen/7e55ee56a67e07d804db9379178e3cb5

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