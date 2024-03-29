import React from 'react';
import { View, Dimensions, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DynamicallySelectedPicker from "react-native-dynamically-selected-picker";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checking: false
    };
    this.filterPrice = this.filterPrice.bind(this);

  }

  // playSong() {
  //   try {
  //     SoundPlayer.playSoundFile('tick', 'wav');
  //     SoundPlayer.setVolume(0.1);
  //   } catch (e) {
  //     alert('Cannot play the files')
  //     console.log('cannot play the song file', e)
  //   }
  // }

  filterPrice() { }

  render() {
    const windowWidth = Dimensions.get('window').width;
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: true
    };
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 10, }}>
        <View>
          <DynamicallySelectedPicker
            items={[
              {
                value: 1,
                label: 'Round',
              },
              {
                value: 2,
                label: 'Pear',
              },
            ]}
            onScroll={({ index, item }) => {
              ReactNativeHapticFeedback.trigger("notificationError", options);
              // this.playSong();
              this.props.updateSelectedShape(index + 1);
            }}
            height={200}
            width={70}
            initialSelectedIndex={1}
            backgroundColor={'#fffff'}
            selectedItemBorderColor={'#005fe9'}
            selectedItemBorderWidth={1}
            fontSize={13}

          />
        </View>
        <View>
          <DynamicallySelectedPicker
            items={[
              {
                value: 1,
                label: 'D',
              },
              {
                value: 2,
                label: 'E',
              },
              {
                value: 3,
                label: 'F',
              },
              {
                value: 4,
                label: 'G',
              },
              {
                value: 5,
                label: 'H',
              },
              {
                value: 6,
                label: 'I',
              },
              {
                value: 7,
                label: 'J',
              },
              {
                value: 8,
                label: 'K',
              },
              {
                value: 9,
                label: 'L',
              },
              {
                value: 10,
                label: 'M',
              },
              {
                value: 11,
                label: 'N',
              },
            ]}
            onScroll={({ index, item }) => {
              ReactNativeHapticFeedback.trigger("notificationError", options);
              this.props.updateSelectedColor(index + 1);
              // this.playSong();
            }}
            height={200}
            width={60}
            initialSelectedIndex={1}
            backgroundColor={'#fffff00'}
            selectedItemBorderColor={'#005fe9'}
            selectedItemBorderWidth={3}
            fontSize={13}

          />
        </View>
        <View>
          <DynamicallySelectedPicker
            items={[
              {
                value: 1,
                label: 'IF',
              },
              {
                value: 2,
                label: 'VVS1',
              },
              {
                value: 3,
                label: 'VVS2',
              },
              {
                value: 4,
                label: 'VS1',
              },
              {
                value: 5,
                label: 'VS2',
              },
              {
                value: 6,
                label: 'SI1',
              },
              {
                value: 7,
                label: 'SI2',
              },
              {
                value: 8,
                label: 'SI3',
              },
              {
                value: 9,
                label: 'I1',
              },
              {
                value: 10,
                label: 'I2',
              },
              {
                value: 11,
                label: 'I3',
              },
            ]}
            onScroll={({ index, item }) => {
              ReactNativeHapticFeedback.trigger("notificationError", options);
              this.props.updateSelectedClarity(index + 1);
              // this.playSong();
            }}
            height={200}
            width={60}
            initialSelectedIndex={1}
            backgroundColor={'#fffff00'}
            selectedItemBorderColor={'#005fe9'}
            selectedItemBorderWidth={3}
            fontSize={13}
          />
        </View>
        <View>
          <DynamicallySelectedPicker
            items={[
              { label: '0.01 - 0.03', value: '1' },
              { label: '0.04 - 0.07', value: '2' },
              { label: '0.08 - 0.14', value: '3' },
              { label: '0.15 - 0.17', value: '4' },
              { label: '0.18 - 0.22', value: '5' },
              { label: '0.23 - 0.29', value: '6' },
              { label: '0.30 - 0.39', value: '7' },
              { label: '0.40 - 0.49', value: '8' },
              { label: '0.50 - 0.69', value: '9' },
              { label: '0.70 - 0.89', value: '10' },
              { label: '0.90 - 0.99', value: '11' },
              { label: '1.00 - 1.49', value: '12' },
              { label: '1.50 - 1.99', value: '13' },
              { label: '2.00 - 2.99', value: '14' },
              { label: '3.00 - 3.99', value: '15' },
              { label: '4.00 - 4.99', value: '16' },
              { label: '5.00 - 5.99', value: '17' },
              { label: '10.00 - 10.99', value: '18' }
            ]}
            onScroll={({ index, item }) => {
              ReactNativeHapticFeedback.trigger("notificationError", options);
              this.props.updateSelectedCarat(index + 1);
              // this.playSong();
            }}
            height={200}
            width={80}
            initialSelectedIndex={1}
            backgroundColor={'#fffff00'}
            selectedItemBorderColor={'#005fe9'}
            selectedItemBorderWidth={4}
            fontSize={13}
          />
          {/* <View style={{ marginTop: 50 }}>
            <Text>Selected item index {this.state.selectedColorIndex + 1}</Text>
            {console.log(this.state.selectedColorIndex + 1)}
          </View> */}
          {this.filterPrice()}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  scrollAreaTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 15,
    width: '100%'
  },
})
