import React from "react";
import ReactDOM from "react-dom";
import {MoralisProvider} from "react-moralis";
import {ChakraProvider} from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<MoralisProvider
				appId="https://j0lecmwqvhvo.usemoralis.com:2053/server"
				serverUrl="vYOgIMso0FV6bq1YRg4Ew3qmfuJhOb2Yy5c2xCvW"
			>
				<App />
			</MoralisProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
