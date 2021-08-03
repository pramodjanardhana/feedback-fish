import React from "react";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import './FeedbackList.css'

function FeedbackList({ feedbackList, setFeedbackList }) {

	const changleVoteColor = (feedback) => {
		if(parseInt(feedback.vote) > 0) feedback.voteColor = "#3EBA59";
		else if(parseInt(feedback.vote) < 0) feedback.voteColor = "#DF4444";
		else feedback.voteColor = "#FFFFFF";
	}

	const upVote = (feedback) => {
		feedback.vote = parseInt(feedback.vote) + 1;
		changleVoteColor(feedback);
		setFeedbackList([...feedbackList]);
		console.log(feedback);
	} 

	const downVote = (feedback) => {
		feedback.vote = parseInt(feedback.vote) - 1;
		changleVoteColor(feedback);
		console.log(feedback);
	}

	const getVote = (feedback) => {
		if(parseInt(feedback.vote) > 0) 
			return "+" + feedback.vote; 
		else 
			return feedback.vote;
	}
  
    return feedbackList.map((feedback, i) => {
        return (
			<>
			<Flex justifyContent="space-between" className="feedback-card" key={i}>
				<Box className="feedback-details">
					<div className="feature-name">{feedback.featureName}</div>
					<div className="feature-requester">{feedback.featureRequester}</div>
				</Box>
				<Center className="feedback-vote">
				<Flex flexDirection="column" justifyContent="center" >
					<TriangleUpIcon onClick={() => upVote(feedback)} />
					<TriangleDownIcon onClick={() => downVote(feedback)}/>
					<div style={{color: feedback.voteColor}}>{getVote(feedback)}</div>
				</Flex>
				</Center>
				
			</Flex>
			<hr className="divider" />
			</>
        );
      });
}

export default FeedbackList;