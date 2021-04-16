package com.github.alinux78.planningpoker.voting;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/voting")
@CrossOrigin(origins = "http://localhost:4200")//TODO - can this be externalized ?
public class VotingController {
	
	private static final String CURRENT_TOPIC = "current";
	private static Map<String, Topic> topics = new HashMap<>();
	//TODO - remove when implementing voting for multiple topics
	private static Topic currentTopic; 
	
	@GetMapping
	@RequestMapping(path = "/topic/{topicId}")
	public Topic getTopic(@PathVariable(name = "topicId")String topicId) {
		if (topicId.equals(CURRENT_TOPIC)) {
			return currentTopic;
		}
		return topics.get(topicId);
	}
	
	
	
	@RequestMapping(method = RequestMethod.PUT, path = "/topic/{name}")
	public Topic addTopic(@PathVariable(name = "name")String name) {
		Topic topic = new Topic(name);
		topic.setVotingStarted(true);
		topics.put(topic.getId(), topic);
		//TODO - remove when implementing voting for multiple topics
		currentTopic = topic;
		return topic;
	}
	
	@PutMapping
	@RequestMapping(path = "/start/{topicId}")
	public void startVoting(@PathVariable(name = "topicId")String topicId) {
		Topic topic = topics.get(topicId); 
		if ( topic != null) {
			topic.setVotingStarted(true);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Topic not found");
		}
	}
	
	@PutMapping
	@RequestMapping(path = "/stop/{topicId}")
	public void stopVoting(@PathVariable(name = "topicId")String topicId) {
		Topic topic = topics.get(topicId); 
		if ( topic != null) {
			topic.setVotingStarted(false);
			topics.remove(topicId);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Topic not found");
		}
	}


	

}
