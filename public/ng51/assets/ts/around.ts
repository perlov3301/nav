function celcfarn_round (a1)
    {
      if(a1 >= 1000) {
        a1 = Math.round(a1);
      } else {
          if(a1 >= 100) {
            a1 = a1*10;
            a1 = Math.round(a1);
            a1 = a1/10;
          } else {
              if(a1 >= 10) {
                a1 = a1*100;
                a1 = Math.round(a1);
                a1 = a1/100;
              } else {
                 a1 = a1*1000;
                 a1 = Math.round(a1);
                 a1 = a1/1000;
                }
            }
        }
        return a1;
    }