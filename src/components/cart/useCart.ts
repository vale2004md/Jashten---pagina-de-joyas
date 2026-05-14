import { useState } from "react";
import type { Product } from "../../types";

export interface CartItem {
    product: Product;
    quantity: number;
}

export const useCart = () => {
    const [items, setItems] = useState<CartItem[]>([]);

    function add(product: Product) {
        setItems(prev => {
            const existingItem = prev.find(i => i.product.id === product.id);
            if (existingItem) {
                return prev.map(i =>
                    i.product.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { product, quantity: 1 }];
        })
    };

    function update(id: string, delta: number) {
        setItems(prev => 
            prev
                .map(i => i.product.id === id ? { ...i, quantity: i.quantity + delta } : i)
                .filter(i => i.quantity > 0)
            ) 
        }
    function total () {
        return items.reduce ((s, i)=> s + (i.product.precio ?? 0) * i.quantity, 0)
    }
    function totalItems () {
        return items.reduce ((s, i) => s + i.quantity, 0)
    }
    function msjWpp(phone: string) {
    const lines = items.map(i =>
      `• ${i.product.nombre} x${i.quantity} = $${((i.product.precio ?? 0) * i.quantity).toLocaleString('es-AR')}`
    ).join('\n')

    const msg = `Hola Jashten Joyas! Quiero hacer un pedido:\n\n${lines}\n\n*Total: $${total().toLocaleString('es-AR')}*`

    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
  }

  return { items, add, update, total, totalItems, msjWpp }
}