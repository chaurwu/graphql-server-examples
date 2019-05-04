package com.example.graphql.resolvers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.graphql.entities.Todo;

@Component
public class Query implements GraphQLQueryResolver {

    public List<Todo> todos() {
        List<Todo> todos = new ArrayList<>();

        Todo todo1 = new Todo("pick up package", true);
        Todo todo2 = new Todo("reschedule appointment", false);
        todos.add(todo1);
        todos.add(todo2);
        return todos;
    }
}