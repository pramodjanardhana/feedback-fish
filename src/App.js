import React, { useState } from "react";
import { Box, Flex, Button, Center, Input, Heading } from "@chakra-ui/react";
import FeedbackList from './components/FeedbackList';
import './App.css';

const App = () => {
	const [error, setError] = useState(null);
	const [feedbackList, setFeedbackList] = useState([]);
	const [newFeatureName, setNewFeatureName] = useState("");
	const [newFeatureRequester, setNewFeatureRequester] = useState("");

	const addFeedback = (ev) => {
		ev.preventDefault();
		if (newFeatureRequester !== "" && newFeatureName !== "") {
			const newFeedback = {featureName: newFeatureName, featureRequester: newFeatureRequester, vote: 0, voteColor: "#FFFFFF"};
			setFeedbackList([...feedbackList, newFeedback]);
			setNewFeatureName("");
			setNewFeatureRequester("");
		} else {
			setError("All fields are requried!");
		}
	};

	const updateFeatureName = (ev) => {
		setNewFeatureName(ev.target.value);
	};

	const updateFeatureRequester = (ev) => {
		setNewFeatureRequester(ev.target.value);
	};

	const clearError = (ev) => {
		setError(null)
	}

	return (
		<Center>
		<Box className="container">
			<Box className="container-head">
				<Heading>Feedback Fish</Heading>
				{error && <Flex id="error" justifyContent="space-between">{error} <Button id="close-error" onClick={clearError}>X</Button></Flex>}
				<form>
					<Flex justifyContent="space-between">
						<Box className="form-input-group">
							<label className="form-input-lable" htmlFor="feature-name">REQUEST A FEATURE</label>
							<br />
							<Input className="form-input" id="feature-name" value={newFeatureName} onChange={updateFeatureName} placeholder="What's on your mind?" size="lg" />
						</Box>
						<Box className="form-input-group">
							<label className="form-input-lable" htmlFor="featur-requester">REQUESTED BY</label>
							<br />
							<Input className="form-input" id="featur-requester" value={newFeatureRequester} onChange={updateFeatureRequester} placeholder="Pramod J" size="lg"  />
						</Box>
						<Button id="form-button" onClick={addFeedback}>
							Add
						</Button>
					</Flex>
				</form>
			</Box>

			<Box>
				<FeedbackList feedbackList={feedbackList} setFeedbackList={setFeedbackList} />
			</Box>

		</Box>
		</Center>
	);
};

export default App;
