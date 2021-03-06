package com.github.alinux78.planningpoker.voting;

import java.util.UUID;

public class Topic {
	private String id = UUID.randomUUID().toString();
	private String name;
	private boolean votingStarted;

	public Topic(String name) {
		super();
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public boolean isVotingStarted() {
		return votingStarted;
	}

	public void setVotingStarted(boolean votingStarted) {
		this.votingStarted = votingStarted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Topic other = (Topic) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	

}
