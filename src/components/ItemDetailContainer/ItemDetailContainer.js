import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { pedirProductos } from "../../helpers/pedirProductos";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router";
import './itemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return <div className="pb-4 p-3 p-sm-0 bgItemDetailContainer">{loading ? <Loading /> : <ItemDetail {...item} />}</div>;
};
