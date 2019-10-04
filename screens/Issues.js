import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Layout, Text, TopNavigation, Icon, Menu } from 'react-native-ui-kitten';


export default function Issues() {
    state = {
        selectedIndex: null,
    };

    data = [
        { title: 'Heart' },
        { title: 'Diabetes' },
        { title: 'Blood Pressure' },
        { title: 'Knee Injury' },

    ];

    onSelect = (selectedIndex) => {
        this.setState({ selectedIndex });
    };

    return (
        <>
            <TopNavigation
                title="CareMore"
                leftControl={() => <Icon {...style} name='arrow-back' />}
                rightControls={null}
            />

            <Layout style={styles.container} level='2'>


                <Menu
                    ListHeaderComponent={() => {
                        return (<Text>
                            Health Concerns
                        </Text>)
                    }}
                    data={this.data}
                    selectedItem={this.state.selectedIndex}
                    onSelect={this.onItemSelect}
                />


            </Layout>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
        // alignItems: 'center',
        // justifyContent: 'center'

    }
});
