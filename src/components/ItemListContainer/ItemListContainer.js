import React, { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import "./ItemListContainer.css";
import { Loading } from "../Loading/Loading";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";


export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? <Loading /> : <ItemList productos={items} />}
    </>
  );
};
