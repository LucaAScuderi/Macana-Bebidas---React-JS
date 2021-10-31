import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

import { Loading } from "../Loading/Loading";
import { useParams } from "react-router";
import "./itemDetailContainer.css";
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productos = db.collection("productos");
    const item = productos.doc(itemId);

    item
      .get()
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, setLoading]);

  return (
    <div className="pb-4 p-3 p-sm-0 bgItemDetailContainer">
      {loading ? <Loading /> : <ItemDetail {...item} />}
    </div>
  );
};
