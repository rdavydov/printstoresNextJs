import React, { Fragment, useState } from "react";
import { Form, Input, Select, Radio, DatePicker, ConfigProvider } from "antd";
import cn from "classnames";
import replaceDate from "utils/replaceDate";
import {
    DeliveryRadioContent,
    FormRadioContent,
    FormRadioHeader,
    Price,
    SmallText,
    SubSmallText,
    Text,
} from "../../styled";
import styles from "./DeliveryStep.module.scss";

const { Option } = Select;

const DELIVERY_METHOD = "Способ доставки";
const DELIVERY_ADDRESS = "Адрес доставки";
const DATE_TIME = "Дата и время";
const PICKUP = {
    title: "Самовывоз",
    time: "После 10.00 в любой день недели",
    price: "Бесплатно",
};
const COURIER_DELIVERY = {
    title: "Доставка курьером",
    time: "В течении 12 часов",
    price: 200,
};

const selectTime = [
    { time: "10:00 - 13:00" },
    { time: "13:00 - 16:00" },
    { time: "16:00 - 19:00" },
    { time: "19:00 - 22:00" },
];
interface IProps {
    setFieldsValue: (value: any) => void;
    getFieldValue: (value: string[]) => string;
}

const DeliveryStep: React.FC<IProps> = ({
    setFieldsValue,
    getFieldValue,
    ...rest
}) => {
    const [method, setMethod] = useState(getFieldValue(["delivery", "method"]));

    const onDeliveryChangeValue = (e) => {
        setFieldsValue({ delivery: { method: e.target.value } });
        setMethod(e.target.value);
    };

    const onDeliveryClicked = (value) => {
        setFieldsValue({ delivery: { method: value } });
        setMethod(value);
    };

    return (
        <Fragment>
            <Text>{DELIVERY_METHOD}</Text>
            <Form.Item
                valuePropName="value"
                initialValue="Самовывоз"
                name={["delivery", "method"]}
            >
                <Radio.Group
                    onChange={onDeliveryChangeValue}
                    value={method}
                    style={{ width: "100%" }}
                >
                    <DeliveryRadioContent
                        className={cn(
                            styles.radioContent,
                            method === "Самовывоз" && styles.active
                        )}
                        onClick={() => onDeliveryClicked("Самовывоз")}
                    >
                        <Radio value="Самовывоз" />
                        <FormRadioContent>
                            <FormRadioHeader>
                                <SmallText>{PICKUP.title}</SmallText>
                                <Price>{PICKUP.price}</Price>
                            </FormRadioHeader>
                            <SubSmallText>{PICKUP.time}</SubSmallText>
                        </FormRadioContent>
                    </DeliveryRadioContent>
                    <DeliveryRadioContent
                        className={cn(
                            styles.radioContent,
                            method === "Курьер" && styles.active
                        )}
                        onClick={() => onDeliveryClicked("Курьер")}
                    >
                        <Radio value="Курьер" />
                        <FormRadioContent>
                            <FormRadioHeader>
                                <SmallText>{COURIER_DELIVERY.title}</SmallText>
                                <Price>{COURIER_DELIVERY.price + "Руб."}</Price>
                            </FormRadioHeader>
                            <SubSmallText>{COURIER_DELIVERY.time}</SubSmallText>
                        </FormRadioContent>
                    </DeliveryRadioContent>
                </Radio.Group>
            </Form.Item>
            <Text>{DELIVERY_ADDRESS}</Text>
            <Form.Item style={{ display: "flex" }} className={cn(styles.input)}>
                <Form.Item
                    name={["delivery", "city"]}
                    style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                    }}
                >
                    <Select>
                        <Option value="Ростов-На-Дону">Ростов-На-Дону</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name={["delivery", "address"]}
                    style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                        margin: "0 8px",
                    }}
                >
                    <Input placeholder={DELIVERY_ADDRESS} />
                </Form.Item>
            </Form.Item>
            <Text>{DATE_TIME}</Text>
            <Form.Item style={{ display: "flex" }} className={cn(styles.input)}>
                <Form.Item
                    name={["delivery", "date"]}
                    style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                    }}
                >
                    <DatePicker
                        format={replaceDate}
                        dropdownClassName={cn(styles.picker)}
                    />
                </Form.Item>
                <Form.Item
                    name={["delivery", "time"]}
                    style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                        margin: "0 8px",
                    }}
                >
                    <Select>
                        {selectTime.map(({ time }, index) => (
                            <Option value={time} key={index}>
                                {time}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form.Item>
        </Fragment>
    );
};

export default DeliveryStep;
