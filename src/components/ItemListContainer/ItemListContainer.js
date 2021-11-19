import React, { useEffect, useState } from "react";

import "./ItemListContainer.css";
import { Loading } from "../Loading/Loading";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productos = categoryId
      ? db.collection("productos").where("category", "==", categoryId)
      : db.collection("productos");

    productos
      .get()
      .then((res) => {
        const newItems = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        
        setItems(newItems);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return <>{loading ? <Loading /> : <ItemList productos={items} />}</>;
};
