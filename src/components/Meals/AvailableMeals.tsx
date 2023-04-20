import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Trư Bát Giới đại náo chuồng gà",
    description: "Thịt kho trứng",
    price: 99.9,
  },
  {
    id: "m2",
    name: "Khổ tận Cam Lai",
    description: "Canh khổ qua nhồi thịt",
    price: 89.9,
  },
  {
    id: "m3",
    name: "Thái Dương Hạ Vân San",
    description: "Trứng luộc",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Rồng Xanh Vượt Đại Dương",
    description: "Rau muống luộc",
    price: 19.99,
  },
  {
    id: "m5",
    name: "Thủy cung khoái lạc",
    description: "canh sườn",
    price: 79.99,
  },
  {
    id: "m6",
    name: "Thủy quái đột lốt hoàng bào",
    description: "Tôm chiên xù",
    price: 98.99,
  },
  {
    id: "m7",
    name: "Hậu duệ Mặt Trời",
    description: "Hạt hướng dương",
    price: 9.99,
  },
  {
    id: "m8",
    name: "Lệ Thủy Dạ Minh Châu",
    description: "Chè đỗ đen",
    price: 38.99,
  },
];

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
