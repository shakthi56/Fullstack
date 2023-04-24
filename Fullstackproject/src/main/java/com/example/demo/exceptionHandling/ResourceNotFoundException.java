package com.example.demo.exceptionHandling;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	// Default serial version Id
	private static final long serialVersionUID = 1L;
	//Parameterized Constructor
	public ResourceNotFoundException(String message) {
		super(message);
	}
}

