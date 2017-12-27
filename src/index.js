import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

renderHotModuleReplacement(App)
if (module.hot) {
    module.hot.accept('./App', () => {
        const App  = require('./App').default
        renderHotModuleReplacement(App)
    })
}
function renderHotModuleReplacement(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <RootElement/>
        </AppContainer>
        , document.getElementById('root'))
}