import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import getMeals from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return (
    <Suspense fallback={<p className= {classes.loading}>Fetching Meals</p>}>
      <MealsGrid meals={meals} />
    </Suspense>
  );
}

export default  function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Marvelous Meals, curated
          <span className={classes.highlight}> for you </span>
        </h1>
        <p>Make your favorite recipe yourself!</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Recipies!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Meals />
      </main>
    </>
  );
}
