import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
} from 'react-native';
import styled from 'styled-components';

const ScreenContainer = styled(SafeAreaView)`
  height: 100%;
`;

function App() {
	return (
		<ScreenContainer>
			<ScrollView>
				<Text>Hello World</Text>
			</ScrollView>
		</ScreenContainer>
	);
}

export default App;
