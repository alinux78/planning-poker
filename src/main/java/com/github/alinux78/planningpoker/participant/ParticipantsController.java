package com.github.alinux78.planningpoker.participant;

import java.util.HashSet;
import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/participants")
@CrossOrigin(origins = "http://localhost:4200")
public class ParticipantsController {
	
	private static Set<Participant> participants = new HashSet<>();
	
	@GetMapping
	public Set<Participant> getAll() {
		return participants;
	}
	
	
	@PutMapping(path = "/{name}")
	public void register(@PathVariable(name = "name")String name) {
		participants.add(new Participant(name));
	}

	@DeleteMapping(path="/{name}")
	public void unregister(@PathVariable(name = "name")String name) {
		participants.removeIf(p -> p.getName().equals(name) );
	}


}
