import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../category";
import { List, Item } from "./styles";

import db from "../../../api/db.json";

const useCategoriesData = () => {
  const [categories, setCategories] = useState(db.categories);
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(URL)
  //       .then((res) => res.json())
  //       .then((response) => {
  //         setCategories(response);
  //         setLoading(false);
  //       });
  //   }, []);
  return { categories, loading };
};

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll); //Limpiando el efecto cada vez que se vuelva a renderizar el componente
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if (loading) {
    return "Cargando..";
  }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
