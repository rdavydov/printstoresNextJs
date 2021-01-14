import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, Select, Radio, DatePicker } from "antd";
import cn from "classnames";
import replaceDate from "utils/replaceDate";
import { Text } from "../../styled";
import styles from "./DeliveryStep.module.scss";
import { getValidatingConfig } from "../config/getValidatingConfig";
import DeliveryMethod from "./DeliveryRadioContent/DeliveryMethod";
import {
    DATE_TIME,
    deliveryProps,
    DELIVERY_ADDRESS,
    DELIVERY_CITY,
    DELIVERY_METHOD,
    DELIVERY_TIME,
    selectTime,
} from "./deliveryConfig/deliveryConfig";

const { Option } = Select;

interface IProps {
    setFieldsValue: (value: any) => void;
    getFieldValue: (value: string[]) => string;
    onDeliveryChange: (value: string) => void;
}

const DeliveryStep: React.FC<IProps> = ({
    setFieldsValue,
    getFieldValue,
    onDeliveryChange,
    ...rest
}) => {
    const [method, setMethod] = useState(
        getFieldValue(["delivery", "method"]) ?? "Самовывоз"
    );

    const onDeliveryChangeValue = (e) => {
        setFieldsValue({ delivery: { method: e.target.value } });
        setMethod(e.target.value);
    };

    const onDeliveryClicked = (value) => {
        setFieldsValue({ delivery: { method: value } });
        setMethod(value);
    };

    const { validate } = getValidatingConfig();

    useEffect(() => {
        onDeliveryChange(method);
    }, [method]);

    return (
        <Fragment>
            <Text>{DELIVERY_METHOD}</Text>
            <Form.Item
                valuePropName="value"
                initialValue="Самовывоз"
                name={["delivery", "method"]}
                rules={validate.method}
            >
                <Radio.Group
                    onChange={onDeliveryChangeValue}
                    value={method}
                    style={{ width: "100%" }}
                >
                    <DeliveryMethod
                        className={cn(
                            styles.radioContent,
                            method === deliveryProps.PICKUP.title &&
                                styles.active
                        )}
                        onDeliveryClicked={onDeliveryClicked}
                        {...deliveryProps.PICKUP}
                    />
                    <DeliveryMethod
                        className={cn(
                            styles.radioContent,
                            method === deliveryProps.COURIER.title &&
                                styles.active
                        )}
                        onDeliveryClicked={onDeliveryClicked}
                        {...deliveryProps.COURIER}
                    />
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
                    rules={validate.city}
                >
                    <Select placeholder={DELIVERY_CITY}>
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
                    rules={validate.address}
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
                    rules={validate.date}
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
                    rules={validate.time}
                >
                    <Select placeholder={DELIVERY_TIME} options={selectTime} />
                </Form.Item>
            </Form.Item>
        </Fragment>
    );
};

export default DeliveryStep;
