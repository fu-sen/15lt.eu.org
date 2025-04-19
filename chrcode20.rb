# IchigoLatte character code list DEC | IchigoLatte Ruby
# Copyright (c) 2019 BALLOON | FU-SEN
# The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

# Chratcter list 20

cls

c=0
while c<256
 lc c%20+4,c/20+3
 print chr c
 c=c+1
end

c=0
while c<20
 if c>9
  lc c+4,0
  print "1"
 end
 lc c+4,1
 print c%10
 lc c+4,2
 print chr 145
 c=c+1
end

c=0
while c<256
 lc 0,c/20+3
 if c==0
  print chr 32
 end
 if c<100
  print chr 32
 end
 print c
 print chr 146
 c=c+20
end

lc 1,0
print "\\"
lc 2,1
print "\\"
lc 3,2
print chr 152

lc 0,20
