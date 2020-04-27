# IchigoLatte character code list HEX | IchigoLatte Ruby
# Copyright (c) 2019 Keiichi SHIGA (BALLOON a.k.a. Fu-sen.)
# The MIT License (MIT) - https://gist.github.com/fu-sen/7e55ee56a67e07d804db9379178e3cb5

# Character Code List 16

cls

c=0
while c<256
 lc c%16+2,c/16+2
 print chr c
 c=c+1
end

i=0
while i<16
 c=i+48
 if i>9
  c=c+7
 end
 lc i+2,0
 print chr c
 lc i+2,1
 print chr 145
 lc 0,i+2
 print chr c
 lc 1,i+2
 print chr 146
 i=i+1
end

lc 0,0
print "\\"
lc 1,1
print chr 152
lc 0,23
