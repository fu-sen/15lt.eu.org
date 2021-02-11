# Balloons | IchigoJam BASIC
# Copyright (c) 2021 Keiichi Shiga (BALLOON | FU-SEN)
# The MIT License (MIT) - https://gist.github.com/fu-sen/1d745079b391aeeaf5bd13bb85e1a0fb

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

