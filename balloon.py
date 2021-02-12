# Balloons | IchigoLatte Python
# Copyright (c) 2021 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://mit.balloon.net.eu.org/#2021

# Balloons

x=0

y=0

cls()
while inkey()==0:
  x=rnd(31)
  if x!=y-1:
    lc(x,22)
    print(chr(232))
    msleep(100)
    scroll(0)
    lc(x,22)
    print("l")
    y=x

