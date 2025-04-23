"use client";
import { IOrder } from "@/interfaces/orderInterface";
import { getUserOrders } from "@/services/userServices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserOrders: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const userStoreage = localStorage.getItem("user");
      if (userStoreage) {
        const data = await getUserOrders();
        setOrders(data);
      } else {
        console.log("No hay datos en Local Storage para la clave 'miObjeto'");
      }
    };

    console.log(orders);
    fetchOrders();
  }, []);

  const handleGoToProducts = () => {
    router.push(`/products`);
  };
  return (
    <div>
      <>
        {orders.length ? (
          orders.map((order: IOrder) => (
            <div key={order.id}>
              <p>Order Number : {order.id}</p>
              <p>Order Status: {order.status}</p>
              <p>Date: {order.date}</p>
            </div>
          ))
        ) : (
          <div>
            <p>no tienes ordenes</p>
            <button
              onClick={handleGoToProducts}
              className="bg-gray-700 text-white px-3 py-1 rounded"
            >
              Volver a productos
            </button>
          </div>
        )}
        <button onClick={() => console.log(orders)}>boton</button>
      </>
    </div>
  );
};

export default UserOrders;
