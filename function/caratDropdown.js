import React, { useState, useCallback, Component } from "react";
import { Image, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function CaratDropdown() {
    const [caratOpen, setCaratOpen] = useState(false);
    // const [open, setOpen] = useState(false);
    const [caratvalue, setCaratValue] = useState('0.9-0.99');
    const [caratitems, setCaratItems] = useState([
        {
            label: '0.9-0.99',
            value: '0.9-0.99',

        },
        {
            label: '1.0-0.49',
            value: '1.0-0.49',

        },
        {
            label: '1.5-1.99',
            value: '1.5-1.99',
        },
        {
            label: '2.0-2.99',
            value: '2.0-2.99',
        },
        {
            label: '3.0-3.99',
            value: '3.0-3.99',
        },
    ]);


    return (
        <View style={{ position: 'relative', zIndex: 9000 }}>
            <DropDownPicker
                selectedValue={caratitems}
                defaultValue={'0.9-0.99'}
                open={caratOpen}
                // onOpen={onCaratOpen}
                value={caratvalue}
                items={caratitems}
                setOpen={setCaratOpen}
                setValue={setCaratValue}
                setItems={setCaratItems}
                // onValueChange={(value, index) => setValue(value)}
                style={{
                    borderColor: '#fff',
                    height: 50,
                    zIndex: 10,
                }}
                dropDownContainerStyle={{
                    borderColor: '#D3D3D3',
                    backgroundColor: '#D3D3D3',
                    color: 'blue',
                }}
            />
        </View>

    );
}
export default CaratDropdown;