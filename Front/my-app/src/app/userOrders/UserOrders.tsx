"use client";
import { IOrder } from "@/interfaces/orderInterface";
import { getUserOrders } from "@/services/userServices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserOrders: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const userStorage = localStorage.getItem("user");
      if (userStorage) {
        const data = await getUserOrders();
        setOrders(data);
      }
    };
    fetchOrders();
  }, []);

  const handleGoToProducts = () => {
    router.push(`/products`);
  };

  return (
    <div className="p-6 bg-amber-100 min-h-screen overflow-x-hidden">
      <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">
        Mis Órdenes
      </h1>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 duration-300 max-w-md mx-auto"
            >
              <p className="text-lg font-semibold text-red-800">
                Orden N°: {order.id}
              </p>
              <p className="text-base text-yellow-700">
                Status: {order.status}
              </p>
              <p className="text-sm text-gray-600">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl text-yellow-700 mb-4">
            You haven`t placed any orders yet
          </p>
          <button
            onClick={handleGoToProducts}
            className="px-6 py-3 bg-red-800 text-amber-100 font-semibold rounded-xl shadow-md hover:bg-red-900 transition-colors duration-300"
          >
            Back to Products
          </button>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
