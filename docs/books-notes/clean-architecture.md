# Clean Architecture

> This book, written by Robert C. Martin, presents universal principles of software architecture that aim to improve the 
> quality of system development throughout its lifecycle.

All software systems provide two fundamental types of value:

1. **Behavior (Functionality)**

* Defines what the system does.
* Makes machines behave according to requirements or functional specifications.
* Usually urgent, because stakeholders want features delivered quickly.
* However, it is not the most important long-term concern.

2. **Architecture (Structure)**

* Defines how the system is built to support change.
* Exists to enable and simplify future modifications.
* Typically not urgent, but critically important.

Which One Should Be Prioritized?

Most teams prioritize behavior, because it delivers immediate value. However, a system that works but is hard to 
change becomes effectively useless over time because it can only support one way of behaving, making evolution expensive 
or impossible.

On the other hand, a system that is easy to change can continuously evolve; new features can be added, and existing 
ones can be modified or removed.

> The cost of change must not exceed the value the software provides.
> So the primary goal is to design systems that are: Easy to develop; Easy to change; Easy to extend.

---
## Programming Paradigms

Programming paradigms define constraints and disciplines in how we write code.
* They are not tied to specific languages.
* They often define what we should avoid doing, rather than what we should do.

The Three Major Paradigms:
1. **Structured Programming**: Imposes discipline on direct control flow (e.g., loops, conditionals).
2. **Object-Oriented Programming (OOP)**: Imposes discipline on indirect control flow through abstractions.
3. **Functional Programming**: Imposes discipline on state and assignment.

---
## Key Architectural Concerns

There are three major concerns in software architecture:
1. **Functionality**: Ensuring the system fulfills its intended behavior.
2. **Component Segregation**: Organizing the system into well-defined, independent components.
3. **Data Management**: Handling how data is structured, accessed, and maintained.

---
## Structured Programming

Structured Programming is based on the idea that any program can be constructed using three fundamental control 
structures: sequence, selection and repetition, avoiding constructs like unrestricted `goto` statements.

The main goal of structured programming is to enable decomposition of complex problems into smaller, manageable parts. 
In practice, large-scale problems are broken down into high-level functions which can be recursively decomposed into 
smaller units and this process continues until reaching easily understandable operations.


> Tests can be compared to the scientific method: they do not prove that a program is correct; they only reveal when it 
> is incorrect. In practice, what can be demonstrated is that the system is correct enough to fulfill its intended 
> purpose. Even so, the possibility of bugs can never be completely eliminated.

