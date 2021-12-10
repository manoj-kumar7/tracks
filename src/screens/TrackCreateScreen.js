import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation, state: { recording } } = useContext(LocationContext);

    //This callback function will be created only when there is change in state.recording
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    //We are going to track/listen to the location if the screen is focused or if track is being recorded
    const [err] = useLocation(isFocused || recording, callback);
    
    return <SafeAreaView style={styles.AndroidSafeArea}>
        <Text h2>Create a Track</Text>
        <Map />
        {err ? <Text> Please enable location services</Text> : null}
        <TrackForm />
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
});

export default withNavigationFocus(TrackCreateScreen);