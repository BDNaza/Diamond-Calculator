const calcPrice = () => {
    if (text >= 0.01 && text <= 0.03) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
                // setData(diamondPrice.replace(/\"/g, ""));
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            });

    } else if (text >= 0.04 && text <= 0.07) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.08 && text <= 0.14) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.15 && text <= 0.17) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.18 && text <= 0.22) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);

            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.23 && text <= 0.29) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.3 && text <= 0.39) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.4 && text <= 0.49) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.5 && text <= 0.69) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.7 && text <= 0.89) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 0.9 && text <= 0.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 1.0 && text <= 1.49) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 1.5 && text <= 1.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 2.0 && text <= 2.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 3.0 && text <= 3.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 4.0 && text <= 4.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 5.0 && text <= 5.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                const priceFixedTwoDP = floatPrice.toFixed(2);
                setData(priceFixedTwoDP);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (text >= 10.0 && text <= 10.99) {
        if (currencyvalue == 'MYR') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=MYR', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.MYR);
                    setCurrencySymbol('RM');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'USD') {
            setCurrencyPrice(1);
            setCurrencySymbol('$');
        } else if (currencyvalue == 'TWD') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=TWD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.TWD);
                    setCurrencySymbol('NT$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'SGD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.SGD);
                    setCurrencySymbol('S$');
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (currencyvalue == 'JPY') {
            fetch('https://api.exchangerate.host/latest?base=USD&symbols=JPY', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.JPY);
                    setCurrencySymbol('¥');
                })
                .catch(error => {
                    console.error(error);
                });

        } else if (currencyvalue == 'HKD') {
            fetch('https://api.exchangerate.host/latest?base=USD', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setCurrencyPrice(responseJson.rates.HKD);
                    setCurrencySymbol('HK$');
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {

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
                const priceConvertCurrency = priceAfterPurchaseDiscount * currencyPrice;
                const floatPrice = parseFloat(priceConvertCurrency);
                setData(floatPrice.toFixed(2));

            })
            .catch(error => {
                console.error(error);
            });
    }
    // else {

    // }
};