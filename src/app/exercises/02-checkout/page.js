'use client';

import './styles.css';

import { CHECKOUT_STATUS } from './constants';
import CheckoutFlow from './CheckoutFlow';
import DATA from './data';
import React from 'react';
import StoreItem from './StoreItem';
import reducer from './reducer';

/**
 * Acceptance Criteria:
 *
 * - There should be no errors.
 * - If the user has saved items in their cart, they should
 *   never be told that their cart is empty, not even for a fraction of a second.
 * - You'll likely need to tweak some of the existing code (eg. the reducer).
 *   Don't be afraid to make changes!
 */

function CheckoutExercise() {
  const [items, dispatch] = React.useReducer(reducer, null, () => []);
  const [checkoutStatus, setCheckoutStatus] = React.useState(
    CHECKOUT_STATUS.LOADING
  );

  React.useEffect(() => {
    const savedItems = window.localStorage.getItem('cart-items');

    if (savedItems !== null) {
      dispatch({
        type: 'load-initial-items',
        items: JSON.parse(savedItems),
      });
    }

    setCheckoutStatus(CHECKOUT_STATUS.IDLE);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: 'add-item',
                  item,
                });
              }}
            />
          ))}
        </div>

        <CheckoutFlow
          items={items}
          taxRate={0.15}
          status={checkoutStatus}
          handleDeleteItem={(item) =>
            dispatch({
              type: 'delete-item',
              item,
            })
          }
        />
      </main>
    </>
  );
}

export default CheckoutExercise;
