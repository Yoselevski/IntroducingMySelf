import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Java and C++ Developer',
    description: 'Did few projects in Java and C++',
    price: 75.99,
  },
  {
    id: 'm2',
    name: 'Frontend Developer',
    description: 'What a react app to illustrate !',
    price: 12.5,
  },
  {
    id: 'm3',
    name: 'Data scientist',
    description: 'Emphasizing in my Bs.c ',
    price: 34.99,
  },
  {
    id: 'm4',
    name: 'Algo-Trading Developer',
    description: 'Participant in this program !',
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
