export interface CartContextType {
  cartIds: number[];
  addToCart: (productId: number, stockAvailable?: number) => void;
  removeOneFromCart: (productId: number) => void;
  removeAllFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartCount: () => Record<number, number>;
}
