package com.github.alinux78.planningpoker.voting;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/voting")
@CrossOrigin(origins = "http://localhost:4200")//TODO - can this be externalized ?
public class VotingController {
	
	private static Topic topic;
	
	@GetMapping
	@RequestMapping(path = "/topic")
	public Topic getTopic() {
		return topic;
	}
	
	
	@PutMapping
	@RequestMapping(path = "/topic/{name}")
	public void setTopic(@PathVariable(name = "name")String name) {
		this.topic = new Topic(name);
	}


}
