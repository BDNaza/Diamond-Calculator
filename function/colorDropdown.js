import React, { useState, useCallback, Component } from "react";
import { Image, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



function ColorDropdown() {
    const [colorOpen, setColorOpen] = useState(false);
    const [colorvalue, setColorValue] = useState('E');
    const [coloritems, setColorItems] = useState([
        {
            label: 'E',
            value: 'E',

        },
        {
            label: 'F',
            value: 'F',

        },
        {
            label: 'G',
            value: 'G',
        },
        {
            label: 'H',
            value: 'H',
        },
        {
            label: 'I',
            value: 'I',
        },
    ]);


    return (
        <View style={{ backgroundColor: 'green', zIndex: 9000 }}>


            <DropDownPicker
                selectedValue={coloritems}
                defaultValue={'E'}
                open={colorOpen}
                // onOpen={onColorOpen}
                value={colorvalue}
                items={coloritems}
                setOpen={setColorOpen}
                setValue={setColorValue}
                setItems={setColorItems}
                // onValueChange={(value, index) => setValue(value)}
                zIndexInverse={10000}
                zIndex={1000}
                style={{
                    borderColor: '#fff',
                    height: 50,
                }}
                dropDownContainerStyle={{
                    borderColor: '#D3D3D3',
                    backgroundColor: 'green',
                }}
                itemStyle={{ zIndex: 9000, }}
            />
        </View>
    );
}
export default ColorDropdown;