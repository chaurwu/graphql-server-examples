package com.example.graphql.entities;

import lombok.Data;

@Data
public class Todo {
    public Todo(String text, boolean done) {
    	this.text = text;
    	this.done = done;
	}

	private long id;

    private String text;

    private boolean done;
}