import VersionCheck from 'react-native-version-check';
import i18n from '../languages/i18n'
import { BackHandler, Linking, Alert } from 'react-native';


const checkVersion = async () => {
    try {
        let updateNeeded = await VersionCheck.needUpdate();
        VersionCheck.getCountry()
            .then(country => console.log(country));

        VersionCheck.getLatestVersion()
            .then(latestVersion => {
                console.log('New Version :', latestVersion);
            });

        console.log('Current Version :', VersionCheck.getCurrentVersion());     // 0.1.1
        VersionCheck.needUpdate()
            .then(async res => {
                console.log("update required? :", res.isNeeded);
                if (res.isNeeded) {
                    Linking.openURL(res.storeUrl);
                }

            });


        if (updateNeeded && updateNeeded.isNeeded) {
            Alert.alert(i18n.t("versionCheckTitle"),
                i18n.t("versionCheckContent"),
                [
                    {
                        text: i18n.t("versionCheckUpdate"),
                        onPress: () => {
                            BackHandler.exitApp();
                            Linking.openURL('https://play.google.com/store/apps/details?id=com.fccalculator');
                        },
                    },
                ],
                { cancelable: false }
            );
        } else if (updateNeeded != isNeeded) {
            console.log("Your app is up-to-date")
        }
    }
    catch (error) { }
};


export default checkVersion;

