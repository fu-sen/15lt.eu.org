# IchigoLatte character code list | IchigoLatte Ruby
# Copyright (c) 2019 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://mit.balloon.net.eu.org/#2019

# Character code list

c=0

cls

while c<256
 lc c%32,c/32
 print chr c

 c=c+1
end
