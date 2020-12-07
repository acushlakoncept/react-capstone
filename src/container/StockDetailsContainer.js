import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import StockDetail from '../components/StockDetail';
import { fetchStockItem } from '../redux/index';

export default function StockDetailsContainer() {
  const { ticker } = useParams();
  const [loading] = useState(false);
  const dispatch = useDispatch();
  const { stockItem } = useSelector(state => state.stockItem);

  useEffect(() => {
    dispatch(fetchStockItem(ticker));
  }, [dispatch]);

  return loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
  ) : (
    <StockDetail stockItem={stockItem} />

  );
}
