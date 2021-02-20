# Character code list | IchigoLatte Python
# Copyright (c) 2021 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://mit.balloon.net.eu.org/#2021

# Character code list
c=0
cls()
while c<256:
  lc(c%32,c/32)
  print(chr(c))
  c=c+1
 
