import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import i18n from '../languages/i18n'

function LanguageDropdown() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');
    const [items, setItems] = useState([
        { label: 'Malay', value: 'my' },
        { label: 'English', value: 'en' },
        { label: 'Chinese', value: 'ch' },
        { label: 'Japanese', value: 'jp' }
    ]);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={(value) => {
                i18n.changeLanguage(value)
            }}
            style={{
                backgroundColor: "transparent",
                border: 0,

            }}
            containerStyle={{
                // backgroundColor: '#000',
                borderRadius: 10,
            }}
            textStyle={{
                color: '#000'
            }}
            labelStyle={{
                backgroundColor: 'transparent',
                color: '#fff',
            }}

        />
    );
}

export default LanguageDropdown;