import React from 'react';
import Card from '../UI/Card';
import styles from "./AvailableMeals.module.css";
import MealItem from './MealItem/MealItem';

const AVAILABLE_MEALS = [
    {
      id: "m1",
      name: "Chicken Biryani",
      description: "Biryani with boiled egg & raita",
      price: 325,
    },
    {
      id: "m2",
      name: "Mutton Biryani",
      description: "Hyderabadi Mutton Dum Biryani",
      price: 380,
    },
    {
      id: "m3",
      name: "Hot & Spice Chicken",
      description: "30 small cubes of hot & spicy boneless chicken",
      price: 199,
    },
    {
      id: "m4",
      name: "Schezwan Chicken Fried Rice",
      description: "Chicken, rice, onions, soy sauce and shredded egg stir fried together",
      price: 150,
    },


  ];

const AvailableMeals = () => {
  const mealsList = AVAILABLE_MEALS.map((meal) => (
    <MealItem 
        id={meal.id}
        key={meal.key}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />
  ))

  return (
        <section className={styles.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
        </section>
  )
}

export default AvailableMeals
