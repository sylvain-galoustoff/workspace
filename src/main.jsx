import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './styles/index.scss'

import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Nunito:400,600,700,900']
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
