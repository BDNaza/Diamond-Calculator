import React, { useCallback, useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
// import CurrencyDropdown from '../function/currencyDropdown';

const bgimg = {
  uri: 'https://www.crane-a.co.jp/en/wp-content/themes/lotus_tcd039a/img/diamondapp/mobile/main-bg.jpg',
};

export default function CalculatorScreen({ navigation }) {
  const { t, i18n } = useTranslation();

  const onColorOpen = useCallback(() => {
    setClarityOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
    setCurrencyOpen(false);
  }, []);

  const onClarityOpen = useCallback(() => {
    setColorOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
    setCurrencyOpen(false);
  }, []);
  const onShapeOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
    setCurrencyOpen(false);
  }, []);
  const onDiscountOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setShapeOpen(false);
    setPurchaseOpen(false);
    setCurrencyOpen(false);
  }, []);
  const onPurchaseOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
    setCurrencyOpen(false);
  }, []);
  const onCurrencyOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setShapeOpen(false);
    setPurchaseOpen(false);
    setDiscountOpen(false);
  }, []);

  //color
  const [colorOpen, setColorOpen] = useState(false);
  const [colorvalue, setColorValue] = useState('1');
  const [coloritems, setColorItems] = useState([
    { label: 'D', value: '1' },
    { label: 'E', value: '2' },
    { label: 'F', value: '3' },
    { label: 'G', value: '4' },
    { label: 'H', value: '5' },
    { label: 'I', value: '6' },
    { label: 'J', value: '7' },
    { label: 'K', value: '8' },
    { label: 'L', value: '9' },
    { label: 'M', value: '10' },
    { label: 'N', value: '11' },
  ]);
  // console.log(colorvalue + 'color');
  //clarity
  const [clarityOpen, setClarityOpen] = useState(false);
  const [clarityvalue, setClarityValue] = useState('1');
  const [clarityitems, setClarityItems] = useState([
    { label: 'IF', value: '1' },
    { label: 'VVS1', value: '2' },
    { label: 'VVS2', value: '3' },
    { label: 'VS1', value: '4' },
    { label: 'VS2', value: '5' },
    { label: 'SI1', value: '6' },
    { label: 'SI2', value: '7' },
    { label: 'SI3', value: '8' },
    { label: 'I1', value: '9' },
    { label: 'I2', value: '10' },
    { label: 'I3', value: '11' },
  ]);
  // console.log(clarityvalue + 'clarity');
  //carat

  const [number, onChangeNumber] = React.useState(null);
  const LOWER_LIMIT = 0.0;
  const HIGHER_LIMIT = 10.99;
  const currentCaratValue = ['0', '.', '0', '0'];
  const [text, setText] = React.useState('');

  const onChangeText = newText => {
    if (newText > 10.99) {
      setText((10.99).toString());
    } else {
      if (newText >= 0.0 && newText <= 10.99) {
        let splitNumber = newText;
        const myArray = splitNumber.toString().split('.');
        if (
          myArray[0] == 6 ||
          myArray[0] == 7 ||
          myArray[0] == 8 ||
          myArray[0] == 9
        ) {
          if (myArray[1] === undefined) {
            return;
          }
          myArray[0] = 0;
          setText((myArray[0] + '.' + myArray[1]).toString());
        } else {
          setText(newText.toString());
          // console.log(newText + 'test1');
        }
      } else {
        setText(newText.toString());
      }

      // setText((0.01).toString())
    }
  };

  //shape
  const [shapeOpen, setShapeOpen] = useState(false);
  const [shapevalue, setShapeValue] = useState('1');
  const [shapeitems, setShapeItems] = useState([
    {
      label: 'Round',
      value: '1',
    },
  ]);

  //Cut Discount
  const [discountOpen, setDiscountOpen] = useState(false);
  const [discountvalue, setDiscountValue] = useState('30');
  const [discountitems, setDiscountItems] = useState([
    {
      label: '20% - Excellent',
      value: '20',
    },
    {
      label: '30% - Very Good',
      value: '30',
    },
    {
      label: '40% - Good',
      value: '40',
    },
    {
      label: '50% - Fair',
      value: '50',
    },
    {
      label: '60% - Poor',
      value: '60',
    },
  ]);

  //Purchase Price
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchasevalue, setPurchaseValue] = useState('0');
  const [purchaseitems, setPurchaseItems] = useState([
    {
      label: 'No Discount',
      value: '0',
    },
    {
      label: '20%',
      value: '20',
    },
    {
      label: '30%',
      value: '30',
    },
    {
      label: '40%',
      value: '40',
    },
    {
      label: '50%',
      value: '50',
    },
    {
      label: '60%',
      value: '60',
    },
    {
      label: '70%',
      value: '70',
    },
    {
      label: '80%',
      value: '80',
    },
  ]);

  const reset = () => {
    setColorValue('1');
    setClarityValue('1');
    setText(LOWER_LIMIT);
    setShapeValue('1');
    setDiscountValue('20');
    setPurchaseValue('0');
    setPriceAfterCalc('');
    setCurrencyValue('USD');
    setCurrencySymbol('$');
    setData('0.00');
    setFinalPrice('0.00');
  };

  //Currency Dropdown
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencyvalue, setCurrencyValue] = useState('USD');
  const [currencyitems, setCurrencyItems] = useState([
    {
      label: 'USD',
      value: 'USD',
      icon: () => <Image source={require('../assets/currency/usa.jpg')} />,
    },
    {
      label: 'MYR',
      value: 'MYR',
      icon: () => <Image source={require('../assets/currency/my.jpg')} />,
    },
    {
      label: 'JPY',
      value: 'JPY',
      icon: () => <Image source={require('../assets/currency/jp.jpg')} />,
    },
    {
      label: 'TWD',
      value: 'TWD',
      icon: () => <Image source={require('../assets/currency/tw.jpg')} />,
    },
    {
      label: 'SGD',
      value: 'SGD',
      icon: () => <Image source={require('../assets/currency/sg.jpg')} />,
    },
    {
      label: 'HKD',
      value: 'HKD',
      icon: () => <Image source={require('../assets/currency/hk.jpg')} />,
    },
  ]);

  const [listCurrency, setListCurrency] = useState({
    MYR: '',
    JPY: '',
    TWD: '',
    SGD: '',
    HKD: '',
    USD: '',
  });

  async function currencyAPI() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `https://api.exchangerate.host/latest?base=USD`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getCurrency() {
      const data = await currencyAPI();
      setListCurrency({
        'MYR': data.rates.MYR,
        'JPY': data.rates.JPY,
        'TWD': data.rates.TWD,
        'SGD': data.rates.SGD,
        'HKD': data.rates.HKD,
        'USD': data.rates.USD,
      });
    }
    getCurrency();
  }, [finalPrice]);

  // console.log('list Currency: ' + listCurrency.HKD)

  const [defaultState, setDefaultState] = useState('USD');
  const [finalPrice, setFinalPrice] = useState('0.00');
  const [data, setData] = useState('0.00');
  const [currencyPrice, setCurrencyPrice] = useState('');
  const [priceAfterCalc, setPriceAfterCalc] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('$');
  // console.log('final price: ' + data);

  const calcPrice = () => {
    if (text >= 0.01 && text <= 0.03) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '1',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice;
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });

    }
    else if (text >= 0.04 && text <= 0.07) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '2',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.08 && text <= 0.14) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '3',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.15 && text <= 0.17) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '4',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.18 && text <= 0.22) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '5',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.23 && text <= 0.29) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '6',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.3 && text <= 0.39) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '7',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.4 && text <= 0.49) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '8',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.5 && text <= 0.69) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '9',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.7 && text <= 0.89) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '10',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 0.9 && text <= 0.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '11',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 1.0 && text <= 1.49) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '12',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 1.5 && text <= 1.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '13',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 2.0 && text <= 2.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '14',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 3.0 && text <= 3.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '15',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 4.0 && text <= 4.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '16',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 5.0 && text <= 5.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '17',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (text >= 10.0 && text <= 10.99) {
      fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            item =>
              item.id_shape === '1' &&
              item.id_color === colorvalue &&
              item.id_clarity === clarityvalue &&
              item.id_carat === '18',
          );
          const diamondPrice = filtered[0].price;
          const caratValue = text * 100;
          const pricePerCarat = diamondPrice * caratValue;
          const priceAfterCutDiscount = pricePerCarat - (discountvalue / 100) * pricePerCarat;
          const priceAfterPurchaseDiscount = priceAfterCutDiscount - (purchasevalue / 100) * priceAfterCutDiscount;
          const floatPrice = parseFloat(priceAfterPurchaseDiscount);
          const priceFixedTwoDP = floatPrice.toFixed(2);
          setData(priceFixedTwoDP);
          if (currencyvalue == 'USD') {
            const x = listCurrency.USD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('$');
            setFinalPrice(final_price);
          }
          else if (currencyvalue == 'MYR') {
            const x = listCurrency.MYR;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('RM');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'JPY') {
            const x = listCurrency.JPY;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('¥');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'TWD') {
            const x = listCurrency.TWD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('NT$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'SGD') {
            const x = listCurrency.SGD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('S$');
            setFinalPrice(final_price);
          } else if (currencyvalue == 'HKD') {
            const x = listCurrency.HKD;
            const final_price = (parseFloat(priceFixedTwoDP) * parseFloat(x)).toFixed(2);
            setCurrencySymbol('HK$');
            setFinalPrice(final_price);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

  };
  const [pricing, setPricing] = useState('');
  const onValueChange = currencyvalue => {
    if (currencyvalue == 'MYR') {
      setCurrencySymbol('RM');
      setDefaultState('MYR');
      const final_price = (parseFloat(data) * parseFloat(listCurrency.MYR)).toFixed(2)
      setFinalPrice(final_price);
    } else if (currencyvalue == 'USD') {
      setCurrencySymbol('$');
      setDefaultState('USD');
      const final_price = (parseFloat(data) * 1).toFixed(2)
      setFinalPrice(final_price);
    }
    else if (currencyvalue == 'TWD') {
      setCurrencySymbol('NT$');
      setDefaultState('TWD');
      const final_price = (parseFloat(data) * parseFloat(listCurrency.TWD)).toFixed(2)
      setFinalPrice(final_price);
    } else if (currencyvalue == 'SGD') {
      setCurrencySymbol('S$');
      setDefaultState('SGD');
      const final_price = (parseFloat(data) * parseFloat(listCurrency.SGD)).toFixed(2)
      setFinalPrice(final_price);

    } else if (currencyvalue == 'JPY') {
      setCurrencySymbol('¥');
      setDefaultState('JPY');
      const final_price = (parseFloat(data) * parseFloat(listCurrency.JPY)).toFixed(2)
      setFinalPrice(final_price);
    } else if (currencyvalue == 'HKD') {
      setCurrencySymbol('HK$');
      setDefaultState('HKD');
      const final_price = (parseFloat(data) * parseFloat(listCurrency.HKD)).toFixed(2)
      setFinalPrice(final_price);
    }

  };
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={bgimg}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.head}>
          <Image
            source={require('../assets/navIcon/DiamondIcon.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 80,
              resizeMode: 'contain',
              tintColor: '#fff',
            }} />
          <Text style={styles.headTitle}>{t('Calculator')}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.scrollArea}>
            <View style={{ width: '50%', justifyContent: 'space-evenly', }}>
              <Text
                style={{
                  color: '#fff',
                  marginBottom: -10,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {t('Color')}
              </Text>
              <DropDownPicker //Color
                selectedValue={coloritems}
                defaultValue={'E'}
                open={colorOpen}
                onOpen={onColorOpen}
                value={colorvalue}
                items={coloritems}
                setOpen={setColorOpen}
                setValue={setColorValue}
                setItems={setColorItems}
                zIndex={3000}
                zIndexInverse={1000}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  textAlign: 'center',
                  alignItems: 'center',
                  // textAlign: 'center',
                  borderRadius: 5,
                }}
                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  height: 90,
                  width: '95%',
                }}
                labelStyle={{
                  textAlign: 'center',
                }}
              />

              <Text
                style={{
                  color: '#fff',
                  marginBottom: -10,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {t('Carat')}
              </Text>
              <TextInput //Carat
                style={{
                  height: 50,
                  width: '95%',
                  borderWidth: 1,
                  marginTop: 2,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  borderRadius: 5,
                  textAlign: 'center'
                }}
                onChangeText={onChangeText}
                value={text}
                placeholder="0.2ct"
                keyboardType="decimal-pad"
                maxLength={5}
                returnKeyType={'done'}
                keyboardAppearance={'default'}
                autoCorrect={true}

              />
            </View>

            <View style={{ width: '50%', justifyContent: 'space-evenly' }}>
              <Text
                style={{
                  color: '#fff',
                  marginBottom: -10,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {t('Clarity')}
              </Text>
              <DropDownPicker //Clarity
                selectedValue={clarityitems}
                defaultValue={'FL'}
                open={clarityOpen}
                onOpen={onClarityOpen}
                setOpen={setClarityOpen}
                value={clarityvalue}
                items={clarityitems}
                setValue={setClarityValue}
                setItems={setClarityItems}
                zIndex={3000}
                zIndexInverse={1000}
                // onValueChange={(value, index) => setValue(value)}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  borderRadius: 5,
                }}
                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  height: 90,
                  width: '95%',
                }}
                labelStyle={{
                  textAlign: 'center',
                }}
              />

              <Text
                style={{
                  color: '#fff',
                  marginBottom: -10,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {t('Shape')}
              </Text>
              <DropDownPicker //Shape
                selectedValue={shapeitems}
                defaultValue={'Round'}
                open={shapeOpen}
                onOpen={onShapeOpen}
                value={shapevalue}
                items={shapeitems}
                setOpen={setShapeOpen}
                setValue={setShapeValue}
                setItems={setShapeItems}
                zIndex={2000}
                zIndexInverse={2000}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  borderRadius: 5,
                }}
                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  width: '95%',
                }}
                labelStyle={{
                  textAlign: 'center',
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              // height: '40%',
              height: 270,
              width: '90%',
              justifyContent: 'space-between',
              // backgroundColor: 'blue',
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                marginBottom: -10,
                fontWeight: '600',
              }}>
              {t('Discount')}
            </Text>
            <DropDownPicker //discount
              selectedValue={discountitems}
              defaultValue={'30%'}
              open={discountOpen}
              onOpen={onDiscountOpen}
              value={discountvalue}
              items={discountitems}
              setOpen={setDiscountOpen}
              setValue={setDiscountValue}
              setItems={setDiscountItems}
              zIndex={3000}
              zIndexInverse={1000}
              // onValueChange={(value, index) => setValue(value)}
              style={{
                borderColor: '#fff',
                height: 50,
                width: '100%',
                alignItems: 'center',
                marginVertical: 5,
                textAlign: 'center',
              }}
              dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: '#D3D3D3',
                height: 150,
              }}
              labelStyle={{
                textAlign: 'center',
              }}
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                marginBottom: -10,
                fontWeight: '600',
              }}>
              {t('PurchasePrice')}
            </Text>
            <DropDownPicker //purchase price
              selectedValue={purchaseitems}
              defaultValue={'30% - Min Price'}
              open={purchaseOpen}
              onOpen={onPurchaseOpen}
              value={purchasevalue}
              items={purchaseitems}
              setOpen={setPurchaseOpen}
              setValue={setPurchaseValue}
              setItems={setPurchaseItems}
              zIndex={2000}
              zIndexInverse={2000}
              // onValueChange={(value, index) => setValue(value)}
              style={{
                borderColor: '#fff',
                height: 50,
                width: '100%',
                alignItems: 'center',
                marginVertical: 5,
              }}
              dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: '#D3D3D3',
                height: 90,
              }}
              labelStyle={
                {
                  textAlign: 'center',
                }
              }
            />

            <View style={{
              //  backgroundColor: 'red' 
            }}>
              <View
                style={{
                  flexDirection: 'row',
                  // display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                  alignItems: 'center',
                  // backgroundColor: 'blue',
                }}>
                <View
                  style={{
                    width: '49%',
                    height: 50,
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center', height: '100%', justifyContent: 'center'
                    }}
                    onPress={calcPrice}>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: '600',
                      }}>
                      {t('Calculate')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '49%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#fffff00',
                  }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}
                    onPress={reset}>
                    <Text style={{ color: '#fff', fontWeight: '600' }}>
                      {t('Reset')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{
            marginVertical: '5%',
            height: 150,
            // backgroundColor: 'orange' 
          }}>
            <Text style={styles.resultNote}>{t('Diamond_price')}</Text>
            <View style={styles.priceListMain}>
              <View
                style={{
                  width: '38%',
                  height: 150,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>

                <DropDownPicker //currency
                  selectedValue={currencyitems}
                  defaultValue={'USD'}
                  open={currencyOpen}
                  onOpen={onCurrencyOpen}
                  value={currencyvalue}
                  items={currencyitems}
                  setOpen={setCurrencyOpen}
                  setValue={setCurrencyValue}
                  setItems={setCurrencyItems}
                  zIndex={1000}
                  onChangeValue={onValueChange}
                  style={{
                    borderColor: '#fff',
                    height: 50,
                    width: '100%',
                    alignItems: 'center',
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                  dropDownContainerStyle={{
                    borderColor: '#D3D3D3',
                    height: 120,
                  }}
                />
              </View>
              <View
                style={{
                  width: '60%',
                  height: 50,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderLeftWidth: 1,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeftColor: '#808080',
                }}>
                <Text style={styles.scrollAreaTitle2}>{currencySymbol}{finalPrice}</Text>
              </View>

            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  head: {
    width: '100%',
    height: '8%',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTitle: {
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 5,
    fontSize: 30,
    width: '100%',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'purple'
  },
  scrollArea: {
    // height: '35%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  dropdownarea: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  resultNote: {
    width: '90%',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,

    fontWeight: '600',
  },
  scrollAreaTitle2: {
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 15,
    width: 200,
    // backgroundColor: 'green'
  },
  priceListMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    height: 150,
    // backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    // backgroundColor: 'magenta'
  },
});
