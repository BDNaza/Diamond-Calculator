import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, TouchableHighlight, Image, Picker } from 'react-native';


const color_options = ['0%', '10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%'];


class DiscountDropdown extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView ref={el => this._scrollView = el}
                showsVerticalScrollIndicator={true}
                scrollEventThrottle={1}>
                <ModalDropdown ref={el => this._dropdown_3 = el}
                    style={{ marginTop: 25, fontSize: 30, color: '#fff', height: 50, width: 300, fontSize: 30, alignItems: 'center', }}
                    options={color_options}
                    // style={{ height: 50, width: 300, fontSize: 30, color: '#fff', alignItems: 'center', }}
                    textStyle={{ color: '#000', fontSize: 13, paddingVertical: 15, alignItems: 'center' }}
                    dropdownStyle={{ marginTop: -50, width: 300, marginLeft: -135, borderRadius: 30, }}
                    defaultValue='0%'
                    dropdownListProps={{ screenLeft: -10, }}
                />
            </ScrollView>

        );
    }

}
export default DiscountDropdown;