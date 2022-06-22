
import React, { useState, useCallback, Component } from "react";
import { Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function CurrencyDropdown() {
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [currencyvalue, setCurrencyValue] = useState('USD');
    const [currencyitems, setCurrencyItems] = useState([
        {
            label: 'USD',
            value: 'USD',
            icon: () => (<Image source={require('../assets/currency/usa.jpg')} />),
        },
        {
            label: 'MYR',
            value: 'MYR',
            icon: () => (<Image source={require('../assets/currency/my.jpg')} />),
        },
        {
            label: 'YEN',
            value: 'YEN',
            icon: () => (<Image source={require('../assets/currency/jp.jpg')} />),
        },
        {
            label: 'TWD',
            value: 'TWD',
            icon: () => (<Image source={require('../assets/currency/tw.jpg')} />),
        },
        {
            label: 'SGD',
            value: 'SGD',
            icon: () => (<Image source={require('../assets/currency/sg.jpg')} />),
        },
    ]);


    return (
        <DropDownPicker
            selectedValue={currencyitems}
            defaultValue={'MYR'}
            open={currencyOpen}
            // onOpen={onCurrencyOpen}
            value={currencyvalue}
            items={currencyitems}
            setOpen={setCurrencyOpen}
            setValue={setCurrencyValue}
            setItems={setCurrencyItems}
            // onValueChange={(value, index) => setValue(value)}
            style={{
                borderColor: '#fff',
                height: 50,
            }}
            dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                height: 140,
            }}
        />
    );
}
export default CurrencyDropdown;