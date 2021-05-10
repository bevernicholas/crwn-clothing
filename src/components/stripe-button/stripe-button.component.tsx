import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
  price: any;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = '';

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;