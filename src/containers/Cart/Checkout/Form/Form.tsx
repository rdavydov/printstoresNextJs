import React, { useContext } from "react";
import { useRouter } from "next/router";

// components
import { Form, Input, Select, Row, Col, Radio } from "antd";
import CartCheckoutFormPaymentFields from "./Payment/Payment";
import CartCheckoutFormContactsFields from "./Contacts/Contacts";
import CartCheckoutFormDeliveryFields from "./Delivery/Delivery";
import CartCheckoutFormLocationFields from "./Location/Location";
import { LoaderContext } from "src/context/loaderContext/loaderContext";

// constants
import { CartCheckoutDeliveryMethods, CartCheckoutPaymentsMethods } from "../constants/checkout.form.constans";
import { showSuccessNoticy } from "../constants/modal.form";

//api
import { orderService } from "src/api/services/order/order.service";

// types
import { CartCheckoutFormValue } from "src/types/containers/Cart/Checkout/Form";

// redux
import { useDispatch, useSelector } from "react-redux";
import { resetCheckoutFields, updateCheckoutFields } from "src/store/reducers/cart/checkout/checkout.reducer";
import { RootState } from "src/store/rootReducer";
import { resetCartProducts } from "src/store/reducers/cart/products/products.reducer";
import { Box } from "src/components/ui";

const CartCheckoutForm = () => {
  const { push } = useRouter();
  const [form] = Form.useForm();

  const { checkout } = useSelector((state: RootState) => state.cart);
  const { order_summary, product_summary, products } = useSelector((state: RootState) => state.cart.products);

  const { showLoading, hideLoading } = useContext(LoaderContext);

  const dispatch = useDispatch();

  const resetFields = () => {
    form.resetFields();
    dispatch(resetCheckoutFields());
    dispatch(resetCartProducts());
  };

  const goToHomePage = async () => {
    const passed = await push("/");
    passed && resetFields();
  };

  const onFinish = async (val: CartCheckoutFormValue) => {
    showLoading();
    const delivery_summary = CartCheckoutDeliveryMethods[val.delivery.method].value;

    const orderData = {
      delivery_summary,
      order_summary,
      products_summary: product_summary,
      order_products: products,
      ...val,
    };

    try {
      const { orderID } = await orderService.createOrder(orderData);
      hideLoading();

      if (val.payment_method === CartCheckoutPaymentsMethods.NON_CASH.key) {
        const passed = await push({ pathname: `/payment`, query: { orderID } });
        passed && resetFields();
      } else {
        showSuccessNoticy(orderID, goToHomePage, goToHomePage);
      }
    } catch (e) {
      hideLoading();
    }
  };

  const onValuesChange = (_, val) => {
    dispatch(updateCheckoutFields(val));
  };

  const showDeliveryAddressField = CartCheckoutDeliveryMethods.COURIER.key === checkout.delivery.method;
  const showNonCashPayment = order_summary <= 15000;

  return (
    <Box width="100%">
      <Form
        layout="vertical"
        id="checkout"
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        initialValues={checkout}
      >
        <CartCheckoutFormLocationFields />
        <CartCheckoutFormDeliveryFields showDeliveryAddressField={showDeliveryAddressField} />
        <CartCheckoutFormPaymentFields showNonCashPayment={showNonCashPayment} />
        <CartCheckoutFormContactsFields />
      </Form>
    </Box>
  );
};

export default CartCheckoutForm;
