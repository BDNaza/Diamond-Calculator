import React, { useState, useCallback, Component } from "react";
import { Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function ClarityDropdown() {

    const [clarityOpen, setClarityOpen] = useState(false);
    // const [open, setOpen] = useState(false);
    const [clarityvalue, setClarityValue] = useState('FL');
    const [clarityitems, setClarityItems] = useState([
        {
            label: 'FL',
            value: 'FL',

        },
        {
            label: 'VVS',
            value: 'VVS',

        },
        {
            label: 'VS',
            value: 'VS',
        },
        {
            label: 'SI',
            value: '2SI',
        },
        {
            label: 'I',
            value: 'I',
        },
    ]);


    return (
        <DropDownPicker
            selectedValue={clarityitems}
            defaultValue={'FL'}
            open={clarityOpen}
            // onOpen={onClarityOpen}
            value={clarityvalue}
            items={clarityitems}
            setOpen={setClarityOpen}
            setValue={setClarityValue}
            setItems={setClarityItems}
            zIndexInverse={10000}
            zIndex={1000}
            // onValueChange={(value, index) => setValue(value)}
            style={{
                borderColor: '#fff',
                height: 50,
            }}
            dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: 'red',

            }}
        />
    );
}
export default ClarityDropdown;