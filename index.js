const app = require('express')();
require('dotenv').config();
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;
const URI = process.env.uri || undefined


mongoose.connect(URI)
.then(()=>{
    console.log('Lify off!, Connected to the database');
    
})


const music = [
    {
        id: 1, Name: "Shape of You", 
        Artist: "Ed Sheeran",
        Genre: "Pop",
        Year: 2017,
        Duration: "3:53",
        Language: "English"
    },
    {
        id: 2, Name: "Blinding Lights",
        Artist: "The Weeknd",
        Genre: "Synthwave",
        Year: 2019, 
        Duration: "3:20", 
        Language: "English"
    },

    {
          id: 3,
          Name: "Bohemian Rhapsody",
          Artist: "Queen",
          Genre: "Rock", 
          Year: 1975,
          Duration: "5:55", 
          Language: "English"
    },


    {
        id: 4, 
        Name: "Bad Guy", 
        Artist: "Billie Eilish", 
        Genre: "Alternative", 
        Year: 2019,
        Duration: "3:14", 
        Language: "English"

    },

    {
         id: 5, 
         Name: "Levitating", 
         Artist: "Dua Lipa", 
         Genre: "Pop", 
         Year: 2020, 
         Duration: "3:23", 
         Language: "English"
    },

    {
         id: 6, 
         Name: "Hotel California", 
         Artist: "Eagles", 
         Genre: "Rock", 
         Year: 1976, 
         Duration: "6:30", 
         Language: "English"
    },

    {
          id: 7, 
          Name: "Uptown Funk", 
          Artist: "Mark Ronson ft. Bruno Mars", 
          Genre: "Funk", 
          Year: 2014, 
          Duration: "4:30", 
          Language: "English"
    },

    {
          id: 8, 
          Name: "Someone Like You", 
          Artist: "Adele", 
          Genre: "Soul", 
          Year: 2011,
          Duration: "4:45", 
          Language: "English"
    },

    {
            id: 9, 
            Name: "Despacito", 
            Artist: "Luis Fonsi ft. Daddy Yankee", 
            Genre: "Reggaeton", 
            Year: 2017, 
            Duration: "4:42", 
            Language: "Spanish"
    },

    {
          id: 10, 
          Name: "Hello", 
          Artist: "Adele", 
          Genre: "Soul", 
          Year: 2015, 
          Duration: "4:55", 
          Language: "English"
    }, 
]


  const food = [
    {
         id: 1, 
         Name: "Pizza", 
         Origin: "Italy", 
         MainIngredient: "Dough, Cheese, Tomato Sauce", 
         Type: "Fast Food", 
         Calories: 285, 
         CookingMethod: "Baked", 
         BestServedWith: "Soda"
    }, 

    {
         id: 2, 
         Name: "Sushi", 
         Origin: "Japan", 
         MainIngredient: "Rice, Fish, Seaweed", 
         Type: "Traditional", 
         Calories: 200, 
         CookingMethod: "Raw", 
         BestServedWith: "Soy Sauce"
    }, 

    {
        id: 3, 
        Name: "Burger", 
        Origin: "Germany/USA", 
        MainIngredient: "Beef Patty, Bun, Cheese", 
        Type: "Fast Food", 
        Calories: 354, 
        CookingMethod: "Grilled", 
        BestServedWith: "Fries"
    },

    {
         id: 4, 
         Name: "Tacos", 
         Origin: "Mexico", 
         MainIngredient: "Tortilla, Meat, Vegetables", 
         Type: "Street Food", 
         Calories: 156, 
         CookingMethod: "Grilled", 
         BestServedWith: "Guacamole"
    }, 

    {
          id: 5, 
          Name: "Pasta", 
          Origin: "Italy", 
          MainIngredient: "Wheat, Sauce, Cheese", 
          Type: "Traditional", 
          Calories: 350, 
          CookingMethod: "Boiled", 
          BestServedWith: "Garlic Bread"
    }, 

    {
        id: 6, 
        Name: "Fried Rice", 
        Origin: "China", 
        MainIngredient: "Rice, Vegetables, Soy Sauce", 
        Type: "Asian", 
        Calories: 228, 
        CookingMethod: "Stir-Fried", 
        BestServedWith: "Chicken"
    }, 

    {
          id: 7, 
          Name: "Shawarma", 
          Origin: "Middle East", 
          MainIngredient: "Pita Bread, Meat, Sauce", 
          Type: "Street Food", 
          Calories: 600, 
          CookingMethod: "Grilled", 
          BestServedWith: "Pickles"
    },

    {
         id: 8, 
         Name: "Jollof Rice", 
         Origin: "West Africa", 
         MainIngredient: "Rice, Tomato, Pepper", 
         Type: "Traditional", 
         Calories: 320, 
         CookingMethod: "Boiled", 
         BestServedWith: "Fried Plantain"
    }, 

    {
         id: 9, 
         Name: "Ice Cream", 
         Origin: "China", 
         MainIngredient: "Milk, Sugar, Cream", 
         Type: "Dessert", 
         Calories: 207, 
         CookingMethod: "Frozen", 
         BestServedWith: "Waffles"
    }, 

    {
        id: 10, 
        Name: "Pancakes", 
        Origin: "France", 
        MainIngredient: "Flour, Eggs, Milk", 
        Type: "Breakfast", 
        Calories: 227, 
        CookingMethod: "Fried", 
        BestServedWith: "Maple Syrup"
    }
  ]


  const car = [
    {
         id: 1, 
         Brand: "Toyota", 
         Model: "Camry", 
         Year: 2023, 
         Type: "Sedan", 
         Engine: "2.5L 4-cylinder", 
         FuelType: "Petrol", 
         Price: "$26,000"
    }, 

    {
         id: 2, 
         Brand: "Tesla", 
         Model: "Model S", 
         Year: 2022, 
         Type: "Electric", 
         Engine: "Dual Motor", 
         FuelType: "Electric", 
         Price: "$94,990"
    },

    {
          id: 3, 
          Brand: "Honda", 
          Model: "Civic", 
          Year: 2023, 
          Type: "Sedan", 
          Engine: "2.0L 4-cylinder", 
          FuelType: "Petrol", 
          Price: "$23,000"
    },

    {
          id: 4, 
          Brand: "Ford", 
          Model: "Mustang", 
          Year: 2023, 
          Type: "Sports Car", 
          Engine: "5.0L V8", 
          FuelType: "Petrol", 
          Price: "$55,000"
    },

    {
         id: 5, 
         Brand: "BMW", 
         Model: "X5", 
         Year: 2023, 
         Type: "SUV", 
         Engine: "3.0L 6-cylinder", 
         FuelType: "Petrol", 
         Price: "$65,000"
    },

    {
         id: 6, 
         Brand: "Mercedes", 
         Model: "C-Class", 
         Year: 2023, 
         Type: "Luxury Sedan", 
         Engine: "2.0L Turbo", 
         FuelType: "Petrol", 
         Price: "$44,000"
    }, 

    {
          id: 7, 
          Brand: "Lamborghini", 
          Model: "Huracan", 
          Year: 2023, 
          Type: "Supercar", 
          Engine: "5.2L V10", 
          FuelType: "Petrol", 
          Price: "$250,000"
    },

    {
         id: 8, 
         Brand: "Audi", 
         Model: "A6", 
         Year: 2023, 
         Type: "Sedan", 
         Engine: "2.0L 4-cylinder", 
         FuelType: "Hybrid", 
         Price: "$56,000"
    }, 

    {
         id: 9, 
         Brand: "Chevrolet", 
         Model: "Corvette", 
         Year: 2023, 
         Type: "Sports Car", 
         Engine: "6.2L V8", 
         FuelType: "Petrol", 
         Price: "$65,000"
    },

    {
        id: 10, 
        Brand: "Nissan", 
        Model: "GTR", 
        Year: 2023, 
        Type: "Sports Car", 
        Engine: "3.8L V6 Turbo", 
        FuelType: "Petrol", 
        Price: "$113,000"
    }
  ]



app.get('/',(req,res)=> {
    // res.send('working')
    res.sendFile(__dirname+'/public/index.html')
    //res.send(_dirname)
})


app.get('/api1', (req,res) => {
   res.send(music)
});


app.get('/api2', (req,res)=>{
    res.send(food)
});

app.get('/api3', (req,res) => {
    res.send(car)
});



app.listen(port, () => console.log(`Server started at port ${port}`));
