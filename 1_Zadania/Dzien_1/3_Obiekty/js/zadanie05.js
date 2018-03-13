var animals = [
    {
      type: "cat",
      breed: "persian",
      name: "Tiberius",
      health: [
        {
          date: "2012-03-03",
          visitType: "grafting"
        },
        {
          date: "2015-06-23",
          visitType: "bowel surgery"
        }
      ]
    },
     {
      type: "Guinea pig",
      breed: "The Rex",
      name: "Marko",
      health: [
        {
          date: "2015-12-04",
          visitType: "grafting"
        },
        {
          date: "2016-03-15",
          visitType: "ear cleaning"
        }
      ]
    }
    
  ]

// console.log(animals.length);


for (var i=0; i<animals.length; i++) {
    for (var key in animals[i]) {
        console.log(key, animals[i][key]);
    }
}
