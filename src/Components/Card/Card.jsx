import * as React from 'react';
import { Card, Number, Text } from "./styles";
const CustomCard = (props)=>{
    const {text,number,variant}=props;
    return(
        <Card variant={variant}>
            <Text variant={variant}>{text}</Text>
            <Number variant={variant}>{number}</Number>
        </Card>
    );
}
export default CustomCard;