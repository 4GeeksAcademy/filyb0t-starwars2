import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [detail, setDetail] = useState({});

  const search = () => {
    let searchDetail = store.characters
      .concat(store.planets)
      .find((item) => item._id === params.id);
    setDetail(searchDetail);
  };

  useEffect(() => {
    search();
  }, [store.characters, store.planets]);

  return (
    <div>
      <h1>Detail {detail?.properties?.name}</h1>
    </div>
  );
};

export default Detail;