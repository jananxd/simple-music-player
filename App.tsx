import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import Library from './src/pages/Library';

import {
    SafeAreaView,
} from 'react-native';

const App = () => {

    return (
        <NativeRouter>
            <SafeAreaView>
                <Route path="/" component={Library}/>
            </SafeAreaView>
        </NativeRouter>
    );
};

export default App;
