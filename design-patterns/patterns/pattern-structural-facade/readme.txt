Façade Pattern
  The Façade Pattern organizes subsystems and provides a unified higher-level interface.
  An example that might be familiar to you is a modular system.
  In JavaScript (and of course TypeScript), people use modules to organize code.
  A modular system makes projects easier to maintain, as a clean project structure
  can help reveal the interconnections among different parts of the project.

Participants
  The participants of a Façade Pattern are relatively simple when it comes to their categories:

  Façade:
   Defines a set of higher-level interfaces, and makes subsystems cooperate.
  Subsystems: 
   Implements their own functionalities and communicates internally with other subsystems if necessary.
   Subsystems are dependencies of a façade, and they do not depend on the façade.

Pattern scope
  Façades usually act as junctions that connect a higher-level system and its subsystems.
  The key to the Façade Pattern is to draw a line between what a dependent should or shouldn't care about of its dependencies.

Consequences
  Façade Pattern loosens the coupling between client and subsystems.
  Though it does not decouple them completely as you will probably still need to work with objects defined in subsystems.
  Façades usually forward operations from client to proper subsystems or even do heavy work to make them work together.
  With the help of Façade Pattern, the system and the relationship and structure within the system can stay clean and intuitive.


---------------------------------------------------------------

Intent
  Provide a unified interface to a set of interfaces in a subsystem.
  Facade defines a higher-level interface that makes the subsystem easier to use.

Motivation
  Structuring a system into subsystems helps reduce complexity.
  A common design goal is to minimize the communication and dependencies between subsystems.
  One way to achieve this goal is to introduce a facade object that provides a single,
  simplified interface to the more general facilities of a subsystem.

Applicability
  Use the Facade pattern when:

  • you want to provide a simple interface to a complex subsystem.
    Subsystems often get more complex as they evolve.
    Most patterns, when applied, result in more and smaller classes.
    This makes the subsystem more reusable and easier to customize,
    but it also becomes harder to use for clients that don't need to customize it.
    A facade can provide a simple default view of the subsystem that is good enough
    for most clients.
    Only clients needing more customizability will need to look beyond the facade.

  • there are many dependencies between clients and the implementation classes of an abstraction.
    Introduce a facade to decouple the subsystem from clients and other subsystems, thereby
    promoting subsystem independence and portability.

  • you want to layer your subsystems. Use a facade to define an entry point to each subsystem level.
    If subsystems are dependent, then you can simplify the dependencies between them by making them
    communicate with each other solely through their facades.

Participants
• Facade
  o knows which subsystem classes are responsible for a request.
  o delegates client requests to appropriate subsystem objects.

• Subsystem classes
  o implement subsystem functionality.
  o handle work assigned by the Facade object.
  o have no knowledge of the facade; that is, they keep no references to it.

Collaborations
  • Clients communicate with the subsystem by sending requests to Facade, which
    forwards them to the appropriate subsystem object(s). Although the
    subsystem objects perform the actual work, the facade may have to do work
    of its own to translate its interface to subsystem interfaces.
  • Clients that use the facade don't have to access its subsystem objects directly.

Consequences
The Facade pattern offers the following benefits:
  1. It shields clients from subsystem components, thereby reducing the number
     of objects that clients deal with and making the subsystem easier to use.

  2. It promotes weak coupling between the subsystem and its clients.
     Often the components in a subsystem are strongly coupled.
     Weak coupling lets you vary the components of the subsystem without affecting its clients.
     Facades help layer a system and the dependencies between objects.
     They can eliminate complex or circular dependencies.
     This can be an important consequence when the client and the
     subsystem are implemented independently.
     Reducing compilation dependencies is vital in large software systems.
     You want to save time by minimizing recompilation when subsystem classes change.
     Reducing compilation dependencies with facades can limit the recompilation needed
     for a small change in an important subsystem.
     A facade can also simplify porting systems to other platforms, because it's less likely that
     building one subsystem requires building all others.

  3. It doesn't prevent applications from using subsystem classes if they need to.
     Thus you can choose between ease of use and generality.

Implementation
  Consider the following issues when implementing a facade:

  1. Reducing client-subsystem coupling. The coupling between clients and the
     subsystem can be reduced even further by making Facade an abstract class
     with concrete subclasses for different implementations of a subsystem. Then
     clients can communicate with the subsystem through the interface of the
     abstract Facade class. This abstract coupling keeps clients from knowing
     which implementation of a subsystem is used.
     An alternative to subclassing is to configure a Facade object with different
     subsystem objects. To customize the facade, simply replace one or more of
     its subsystem objects.

  2. Public versus private subsystem classes. A subsystem is analogous to a class
     in that both have interfaces, and both encapsulate something—a class
     encapsulates state and operations, while a subsystem encapsulates classes.
     And just as it's useful to think of the public and private interface of
     a class, we can think of the public and private interface of a subsystem.
     The public interface to a subsystem consists of classes that all clients
     can access; the private interface is just for subsystem extenders. The
     Facade class is part of the public interface, of course, but it's not the
     only part. Other subsystem classes are usually public as well. For example,
     the classes Parser and Scanner in the compiler subsystem are part of the
     public interface.
     Making subsystem classes private would be useful, but few object-oriented
     languages support it. Both C++ and Smalltalk traditionally have had a global
     name space for classes. Recently, however, the C++ standardization
     committee added name spaces to the language [Str94], which will let you
     expose just the public subsystem classes.

Related Patterns
   Abstract Factory (99) can be used with Facade to provide an interface for creating
   subsystem objects in a subsystem-independent way. Abstract Factory can also be
   used as an alternative to Facade to hide platform-specific classes.
   Mediator (305) is similar to Facade in that it abstracts functionality of existing
   classes. However, Mediator's purpose is to abstract arbitrary communication
   between colleague objects, often centralizing functionality that doesn't belong
   in any one of them. A mediator's colleagues are aware of and communicate with
   the mediator instead of communicating with each other directly. In contrast, a
   facade merely abstracts the interface to subsystem objects to make them easier
   to use; it doesn't define new functionality, and subsystem classes don't know
   about it.
   Usually only one Facade object is required. Thus Facade objects are often Singletons (144).
