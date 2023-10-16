import React, { useState, Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const shape_options = ['Round'];
// const shape_options = ['Round', 'shape 2', 'shape 3', 'shape 4', 'shape 5', 'shape 6', 'shape 7', 'shape 8', 'shape 9'];


function ShapeDropdown() {
    const [shapeOpen, setShapeOpen] = useState(false);
    // const [open, setOpen] = useState(false);
    const [shapevalue, setShapeValue] = useState('FL');
    const [shapeitems, setShapeItems] = useState([
        {
            label: 'Round',
            value: 'Round',

        },]);

    return (
        <DropDownPicker
            selectedValue={shapeitems}
            defaultValue={'FL'}
            open={shapeOpen}
            // onOpen={onClarityOpen}
            value={shapevalue}
            items={shapeitems}
            setOpen={setShapeOpen}
            setValue={setShapeValue}
            setItems={setShapeItems}
            zIndexInverse={10000}
            zIndex={1000}
            // onValueChange={(value, index) => setValue(value)}
            style={{
                borderColor: '#fff',
                height: 50,
                width: 150,
            }}
            dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: 'red',

            }}
        />
    );
}
export default ShapeDropdown;