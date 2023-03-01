import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


export default function details({ route, navigation }) {
    const { track } = route.params;
    return (
        <WebView 
                    source={{uri: track.externalUrl}}
                />
    );
}