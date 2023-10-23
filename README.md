# Requirements

Given this basic Spring Boot project structure, please implement a
REST service and simple UI using React.js that implements an endpoint to solve the palindrome
problem described below.

We are looking for you to:

* complete, refine, and polish the solution you started building with us
* create a simple clean UI in ReactJS that calls the Java API
* use tests to show the effectiveness of your solution
* add any applicable documentation
* note any assumptions that you make

Please craft a solution that:

* you would consider to be representative of your level of professionalism
* you would be comfortable handing off to someone else to maintain
* You would feel at ease delegating this to a developer who may not be as well-versed in Spring Boot

## Palindrome problem

Given a string `n` representing an integer, return the closest integer
(not including itself), which is a palindrome. If there is a tie,
return the smaller one.

example:

Input: n = "123"

Output: "121"


## Additional Requirements

* Implement an API contract (e.g. swagger/OpenAPI)
* Validation of requests adhering to contract
* Note and/or implement any improvements to the code and project
  structure that you believe would make this service "enterprise
  ready"

### Optional 

The sample algorithm used may not be the most efficient implementation
of the solution. Implement a more performant solution and discuss or
show how you can prove your implementation is faster than the original.


# Getting Started


### Run maven project:

```shell
mvn spring-boot:run
```

### build jar file 

```shell
mvn clean package spring-boot:repackage
java -jar target/palindrome-1.0.0.jar
```
