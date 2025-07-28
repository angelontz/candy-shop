const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.";

const products = [
  {
    id: 1,
    name: "Classic Twists",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 2.12,
    image: "https://picsum.photos/seed/darkchocolate0/300/200",
    description: "Classic and classic dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 2,
    name: "Intense Discs",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 2.86,
    image: "https://picsum.photos/seed/darkchocolate1/300/200",
    description: "Tangy and tangy dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 3,
    name: "Tangy Snacks",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 3.75,
    image: "https://picsum.photos/seed/darkchocolate2/300/200",
    description: "Intense and sweet dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 4,
    name: "Intense Twists",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 2.41,
    image: "https://picsum.photos/seed/darkchocolate3/300/200",
    description: "Zesty and chewy dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 5,
    name: "Intense Strips",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 3.2,
    image: "https://picsum.photos/seed/darkchocolate4/300/200",
    description: "Sweet and zesty dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 6,
    name: "Chewy Bites",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 2.33,
    image: "https://picsum.photos/seed/darkchocolate5/300/200",
    description: "Classic and soft dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 7,
    name: "Crunchy Chews",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 1.96,
    image: "https://picsum.photos/seed/darkchocolate6/300/200",
    description: "Soft and sweet dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 8,
    name: "Soft Discs",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 2.43,
    image: "https://picsum.photos/seed/darkchocolate7/300/200",
    description: "Classic and crunchy dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 9,
    name: "Delicious Snacks",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 3.53,
    image: "https://picsum.photos/seed/darkchocolate8/300/200",
    description: "Zesty and classic dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 10,
    name: "Zesty Treat",
    category: "Chocolate",
    subcategory: "Dark Chocolate",
    price: 4.82,
    image: "https://picsum.photos/seed/darkchocolate9/300/200",
    description: "Soft and delicious dark chocolate!",
    fullDescription: lorem
  },
  {
    id: 11,
    name: "Soft Snacks",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 1.9,
    image: "https://picsum.photos/seed/milkchocolate0/300/200",
    description: "Soft and bold milk chocolate!"
  },
  {
    id: 12,
    name: "Bold Discs",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 2.82,
    image: "https://picsum.photos/seed/milkchocolate1/300/200",
    description: "Bold and zesty milk chocolate!"
  },
  {
    id: 13,
    name: "Delicious Snacks",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 1.65,
    image: "https://picsum.photos/seed/milkchocolate2/300/200",
    description: "Sweet and delicious milk chocolate!"
  },
  {
    id: 14,
    name: "Zesty Discs",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 1.7,
    image: "https://picsum.photos/seed/milkchocolate3/300/200",
    description: "Soft and crunchy milk chocolate!"
  },
  {
    id: 15,
    name: "Classic Squares",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 3.66,
    image: "https://picsum.photos/seed/milkchocolate4/300/200",
    description: "Crunchy and classic milk chocolate!"
  },
  {
    id: 16,
    name: "Classic Discs",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 2.84,
    image: "https://picsum.photos/seed/milkchocolate5/300/200",
    description: "Zesty and intense milk chocolate!"
  },
  {
    id: 17,
    name: "Sweet Squares",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 3.32,
    image: "https://picsum.photos/seed/milkchocolate6/300/200",
    description: "Intense and intense milk chocolate!"
  },
  {
    id: 18,
    name: "Intense Candy",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 2.62,
    image: "https://picsum.photos/seed/milkchocolate7/300/200",
    description: "Chewy and crunchy milk chocolate!"
  },
  {
    id: 19,
    name: "Chewy Squares",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 3.31,
    image: "https://picsum.photos/seed/milkchocolate8/300/200",
    description: "Intense and bold milk chocolate!"
  },
  {
    id: 20,
    name: "Intense Squares",
    category: "Chocolate",
    subcategory: "Milk Chocolate",
    price: 4.11,
    image: "https://picsum.photos/seed/milkchocolate9/300/200",
    description: "Classic and intense milk chocolate!"
  },
  {
    id: 21,
    name: "Delicious Candy",
    category: "Gummies",
    subcategory: "Bears",
    price: 4.61,
    image: "https://picsum.photos/seed/bears0/300/200",
    description: "Intense and chewy bears!"
  },
  {
    id: 22,
    name: "Delicious Snacks",
    category: "Gummies",
    subcategory: "Bears",
    price: 2.32,
    image: "https://picsum.photos/seed/bears1/300/200",
    description: "Intense and bold bears!"
  },
  {
    id: 23,
    name: "Intense Twists",
    category: "Gummies",
    subcategory: "Bears",
    price: 3.65,
    image: "https://picsum.photos/seed/bears2/300/200",
    description: "Chewy and crunchy bears!"
  },
  {
    id: 24,
    name: "Tangy Bites",
    category: "Gummies",
    subcategory: "Bears",
    price: 3.59,
    image: "https://picsum.photos/seed/bears3/300/200",
    description: "Crunchy and sweet bears!"
  },
  {
    id: 25,
    name: "Delicious Chews",
    category: "Gummies",
    subcategory: "Bears",
    price: 2.23,
    image: "https://picsum.photos/seed/bears4/300/200",
    description: "Zesty and classic bears!"
  },
  {
    id: 26,
    name: "Classic Strips",
    category: "Gummies",
    subcategory: "Bears",
    price: 4.42,
    image: "https://picsum.photos/seed/bears5/300/200",
    description: "Delicious and delicious bears!"
  },
  {
    id: 27,
    name: "Zesty Snacks",
    category: "Gummies",
    subcategory: "Bears",
    price: 3.11,
    image: "https://picsum.photos/seed/bears6/300/200",
    description: "Classic and crunchy bears!"
  },
  {
    id: 28,
    name: "Chewy Bites",
    category: "Gummies",
    subcategory: "Bears",
    price: 3.38,
    image: "https://picsum.photos/seed/bears7/300/200",
    description: "Tangy and crunchy bears!"
  },
  {
    id: 29,
    name: "Soft Chews",
    category: "Gummies",
    subcategory: "Bears",
    price: 4.08,
    image: "https://picsum.photos/seed/bears8/300/200",
    description: "Soft and chewy bears!"
  },
  {
    id: 30,
    name: "Intense Candy",
    category: "Gummies",
    subcategory: "Bears",
    price: 3.48,
    image: "https://picsum.photos/seed/bears9/300/200",
    description: "Classic and classic bears!"
  },
  {
    id: 31,
    name: "Bold Chews",
    category: "Gummies",
    subcategory: "Worms",
    price: 4.26,
    image: "https://picsum.photos/seed/worms0/300/200",
    description: "Crunchy and intense worms!"
  },
  {
    id: 32,
    name: "Delicious Bites",
    category: "Gummies",
    subcategory: "Worms",
    price: 4.94,
    image: "https://picsum.photos/seed/worms1/300/200",
    description: "Intense and delicious worms!"
  },
  {
    id: 33,
    name: "Zesty Snacks",
    category: "Gummies",
    subcategory: "Worms",
    price: 3.74,
    image: "https://picsum.photos/seed/worms2/300/200",
    description: "Bold and classic worms!"
  },
  {
    id: 34,
    name: "Intense Snacks",
    category: "Gummies",
    subcategory: "Worms",
    price: 4.63,
    image: "https://picsum.photos/seed/worms3/300/200",
    description: "Sweet and zesty worms!"
  },
  {
    id: 35,
    name: "Intense Snacks",
    category: "Gummies",
    subcategory: "Worms",
    price: 3.37,
    image: "https://picsum.photos/seed/worms4/300/200",
    description: "Tangy and delicious worms!"
  },
  {
    id: 36,
    name: "Delicious Discs",
    category: "Gummies",
    subcategory: "Worms",
    price: 3.69,
    image: "https://picsum.photos/seed/worms5/300/200",
    description: "Classic and delicious worms!"
  },
  {
    id: 37,
    name: "Bold Chews",
    category: "Gummies",
    subcategory: "Worms",
    price: 2.75,
    image: "https://picsum.photos/seed/worms6/300/200",
    description: "Crunchy and crunchy worms!"
  },
  {
    id: 38,
    name: "Delicious Snacks",
    category: "Gummies",
    subcategory: "Worms",
    price: 1.68,
    image: "https://picsum.photos/seed/worms7/300/200",
    description: "Bold and zesty worms!"
  },
  {
    id: 39,
    name: "Classic Twists",
    category: "Gummies",
    subcategory: "Worms",
    price: 2.95,
    image: "https://picsum.photos/seed/worms8/300/200",
    description: "Intense and soft worms!"
  },
  {
    id: 40,
    name: "Zesty Chews",
    category: "Gummies",
    subcategory: "Worms",
    price: 3.53,
    image: "https://picsum.photos/seed/worms9/300/200",
    description: "Delicious and intense worms!"
  },
  {
    id: 41,
    name: "Delicious Candy",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 2.88,
    image: "https://picsum.photos/seed/lollipops0/300/200",
    description: "Crunchy and chewy lollipops!"
  },
  {
    id: 42,
    name: "Crunchy Bites",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 2.18,
    image: "https://picsum.photos/seed/lollipops1/300/200",
    description: "Chewy and tangy lollipops!"
  },
  {
    id: 43,
    name: "Tangy Bites",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 4.94,
    image: "https://picsum.photos/seed/lollipops2/300/200",
    description: "Chewy and crunchy lollipops!"
  },
  {
    id: 44,
    name: "Sweet Twists",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 1.73,
    image: "https://picsum.photos/seed/lollipops3/300/200",
    description: "Sweet and crunchy lollipops!"
  },
  {
    id: 45,
    name: "Bold Bites",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 3.57,
    image: "https://picsum.photos/seed/lollipops4/300/200",
    description: "Bold and crunchy lollipops!"
  },
  {
    id: 46,
    name: "Delicious Strips",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 2.95,
    image: "https://picsum.photos/seed/lollipops5/300/200",
    description: "Crunchy and bold lollipops!"
  },
  {
    id: 47,
    name: "Intense Discs",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 2.79,
    image: "https://picsum.photos/seed/lollipops6/300/200",
    description: "Chewy and zesty lollipops!"
  },
  {
    id: 48,
    name: "Tangy Delight",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 4.96,
    image: "https://picsum.photos/seed/lollipops7/300/200",
    description: "Zesty and delicious lollipops!"
  },
  {
    id: 49,
    name: "Crunchy Twists",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 1.76,
    image: "https://picsum.photos/seed/lollipops8/300/200",
    description: "Crunchy and soft lollipops!"
  },
  {
    id: 50,
    name: "Classic Twists",
    category: "Hard Candy",
    subcategory: "Lollipops",
    price: 2.22,
    image: "https://picsum.photos/seed/lollipops9/300/200",
    description: "Sweet and classic lollipops!"
  },
  {
    id: 51,
    name: "Delicious Bites",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 4.74,
    image: "https://picsum.photos/seed/butterscotch0/300/200",
    description: "Intense and crunchy butterscotch!"
  },
  {
    id: 52,
    name: "Delicious Bites",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 2.58,
    image: "https://picsum.photos/seed/butterscotch1/300/200",
    description: "Intense and delicious butterscotch!"
  },
  {
    id: 53,
    name: "Sweet Bites",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 2.1,
    image: "https://picsum.photos/seed/butterscotch2/300/200",
    description: "Delicious and sweet butterscotch!"
  },
  {
    id: 54,
    name: "Delicious Treat",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 4.99,
    image: "https://picsum.photos/seed/butterscotch3/300/200",
    description: "Chewy and soft butterscotch!"
  },
  {
    id: 55,
    name: "Tangy Discs",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 1.63,
    image: "https://picsum.photos/seed/butterscotch4/300/200",
    description: "Bold and intense butterscotch!"
  },
  {
    id: 56,
    name: "Zesty Chews",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 4.38,
    image: "https://picsum.photos/seed/butterscotch5/300/200",
    description: "Crunchy and classic butterscotch!"
  },
  {
    id: 57,
    name: "Zesty Discs",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 1.63,
    image: "https://picsum.photos/seed/butterscotch6/300/200",
    description: "Classic and bold butterscotch!"
  },
  {
    id: 58,
    name: "Zesty Delight",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 4.07,
    image: "https://picsum.photos/seed/butterscotch7/300/200",
    description: "Sweet and crunchy butterscotch!"
  },
  {
    id: 59,
    name: "Zesty Strips",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 4.28,
    image: "https://picsum.photos/seed/butterscotch8/300/200",
    description: "Intense and soft butterscotch!"
  },
  {
    id: 60,
    name: "Zesty Bites",
    category: "Hard Candy",
    subcategory: "Butterscotch",
    price: 3.47,
    image: "https://picsum.photos/seed/butterscotch9/300/200",
    description: "Delicious and crunchy butterscotch!"
  },
  {
    id: 61,
    name: "Bold Twists",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.27,
    image: "https://picsum.photos/seed/sourbelts0/300/200",
    description: "Chewy and sweet sour belts!"
  },
  {
    id: 62,
    name: "Intense Discs",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 4.89,
    image: "https://picsum.photos/seed/sourbelts1/300/200",
    description: "Sweet and soft sour belts!"
  },
  {
    id: 63,
    name: "Classic Treat",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.91,
    image: "https://picsum.photos/seed/sourbelts2/300/200",
    description: "Bold and soft sour belts!"
  },
  {
    id: 64,
    name: "Delicious Bites",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.32,
    image: "https://picsum.photos/seed/sourbelts3/300/200",
    description: "Zesty and crunchy sour belts!"
  },
  {
    id: 65,
    name: "Soft Chews",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.08,
    image: "https://picsum.photos/seed/sourbelts4/300/200",
    description: "Soft and classic sour belts!"
  },
  {
    id: 66,
    name: "Bold Twists",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.05,
    image: "https://picsum.photos/seed/sourbelts5/300/200",
    description: "Crunchy and intense sour belts!"
  },
  {
    id: 67,
    name: "Zesty Candy",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.5,
    image: "https://picsum.photos/seed/sourbelts6/300/200",
    description: "Classic and bold sour belts!"
  },
  {
    id: 68,
    name: "Bold Bites",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.93,
    image: "https://picsum.photos/seed/sourbelts7/300/200",
    description: "Bold and tangy sour belts!"
  },
  {
    id: 69,
    name: "Soft Delight",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 3.01,
    image: "https://picsum.photos/seed/sourbelts8/300/200",
    description: "Sweet and bold sour belts!"
  },
  {
    id: 70,
    name: "Chewy Twists",
    category: "Sour Candy",
    subcategory: "Sour Belts",
    price: 2.22,
    image: "https://picsum.photos/seed/sourbelts9/300/200",
    description: "Delicious and crunchy sour belts!"
  },
  {
    id: 71,
    name: "Crunchy Twists",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 3.35,
    image: "https://picsum.photos/seed/sourgummies0/300/200",
    description: "Zesty and classic sour gummies!"
  },
  {
    id: 72,
    name: "Classic Candy",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 3.43,
    image: "https://picsum.photos/seed/sourgummies1/300/200",
    description: "Chewy and crunchy sour gummies!"
  },
  {
    id: 73,
    name: "Sweet Candy",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 4.92,
    image: "https://picsum.photos/seed/sourgummies2/300/200",
    description: "Bold and intense sour gummies!"
  },
  {
    id: 74,
    name: "Classic Snacks",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 1.58,
    image: "https://picsum.photos/seed/sourgummies3/300/200",
    description: "Soft and soft sour gummies!"
  },
  {
    id: 75,
    name: "Bold Strips",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 2.59,
    image: "https://picsum.photos/seed/sourgummies4/300/200",
    description: "Sweet and bold sour gummies!"
  },
  {
    id: 76,
    name: "Chewy Candy",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 2.6,
    image: "https://picsum.photos/seed/sourgummies5/300/200",
    description: "Delicious and soft sour gummies!"
  },
  {
    id: 77,
    name: "Delicious Squares",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 2.15,
    image: "https://picsum.photos/seed/sourgummies6/300/200",
    description: "Intense and zesty sour gummies!"
  },
  {
    id: 78,
    name: "Classic Discs",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 3.12,
    image: "https://picsum.photos/seed/sourgummies7/300/200",
    description: "Soft and tangy sour gummies!"
  },
  {
    id: 79,
    name: "Tangy Chews",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 2.11,
    image: "https://picsum.photos/seed/sourgummies8/300/200",
    description: "Bold and sweet sour gummies!"
  },
  {
    id: 80,
    name: "Delicious Delight",
    category: "Sour Candy",
    subcategory: "Sour Gummies",
    price: 2.95,
    image: "https://picsum.photos/seed/sourgummies9/300/200",
    description: "Chewy and bold sour gummies!"
  },
  {
    id: 81,
    name: "Tangy Treat",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.07,
    image: "https://picsum.photos/seed/redlicorice0/300/200",
    description: "Soft and delicious red licorice!"
  },
  {
    id: 82,
    name: "Chewy Twists",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 1.77,
    image: "https://picsum.photos/seed/redlicorice1/300/200",
    description: "Classic and intense red licorice!"
  },
  {
    id: 83,
    name: "Sweet Discs",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 2.97,
    image: "https://picsum.photos/seed/redlicorice2/300/200",
    description: "Crunchy and intense red licorice!"
  },
  {
    id: 84,
    name: "Delicious Strips",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 4.53,
    image: "https://picsum.photos/seed/redlicorice3/300/200",
    description: "Tangy and bold red licorice!"
  },
  {
    id: 85,
    name: "Bold Chews",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.64,
    image: "https://picsum.photos/seed/redlicorice4/300/200",
    description: "Crunchy and delicious red licorice!"
  },
  {
    id: 86,
    name: "Classic Chews",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.36,
    image: "https://picsum.photos/seed/redlicorice5/300/200",
    description: "Bold and tangy red licorice!"
  },
  {
    id: 87,
    name: "Chewy Candy",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.37,
    image: "https://picsum.photos/seed/redlicorice6/300/200",
    description: "Soft and crunchy red licorice!"
  },
  {
    id: 88,
    name: "Zesty Strips",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 4.94,
    image: "https://picsum.photos/seed/redlicorice7/300/200",
    description: "Soft and intense red licorice!"
  },
  {
    id: 89,
    name: "Sweet Squares",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.98,
    image: "https://picsum.photos/seed/redlicorice8/300/200",
    description: "Crunchy and soft red licorice!"
  },
  {
    id: 90,
    name: "Delicious Strips",
    category: "Licorice",
    subcategory: "Red Licorice",
    price: 3.9,
    image: "https://picsum.photos/seed/redlicorice9/300/200",
    description: "Crunchy and tangy red licorice!"
  },
  {
    id: 91,
    name: "Bold Squares",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 4.29,
    image: "https://picsum.photos/seed/blacklicorice0/300/200",
    description: "Chewy and zesty black licorice!"
  },
  {
    id: 92,
    name: "Chewy Squares",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 4.06,
    image: "https://picsum.photos/seed/blacklicorice1/300/200",
    description: "Sweet and delicious black licorice!"
  },
  {
    id: 93,
    name: "Intense Chews",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 2.22,
    image: "https://picsum.photos/seed/blacklicorice2/300/200",
    description: "Chewy and soft black licorice!"
  },
  {
    id: 94,
    name: "Chewy Strips",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 4.3,
    image: "https://picsum.photos/seed/blacklicorice3/300/200",
    description: "Chewy and delicious black licorice!"
  },
  {
    id: 95,
    name: "Soft Discs",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 3.34,
    image: "https://picsum.photos/seed/blacklicorice4/300/200",
    description: "Zesty and zesty black licorice!"
  },
  {
    id: 96,
    name: "Tangy Squares",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 3.55,
    image: "https://picsum.photos/seed/blacklicorice5/300/200",
    description: "Zesty and delicious black licorice!"
  },
  {
    id: 97,
    name: "Soft Chews",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 1.61,
    image: "https://picsum.photos/seed/blacklicorice6/300/200",
    description: "Bold and tangy black licorice!"
  },
  {
    id: 98,
    name: "Intense Snacks",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 4.93,
    image: "https://picsum.photos/seed/blacklicorice7/300/200",
    description: "Bold and delicious black licorice!"
  },
  {
    id: 99,
    name: "Soft Snacks",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 2.12,
    image: "https://picsum.photos/seed/blacklicorice8/300/200",
    description: "Zesty and tangy black licorice!"
  },
  {
    id: 100,
    name: "Bold Bites",
    category: "Licorice",
    subcategory: "Black Licorice",
    price: 4.5,
    image: "https://picsum.photos/seed/blacklicorice9/300/200",
    description: "Chewy and crunchy black licorice!"
  }
];
export default products;