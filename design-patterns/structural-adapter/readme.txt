Adapter Pattern

Intent
   Convert the interface of a class into another interface clients expect.
   Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
   Also Known As Wrapper

Motivation
   Sometimes a toolkit class that's designed for reuse isn't reusable only because its interface
   doesn't match the domain-specific interface an application requires.

Applicability
   Use the Adapter pattern when
      • you want to use an existing class, and its interface does not match the one you need.
      • you want to create a reusable class that cooperates with unrelated or unforeseen classes,
        that is, classes that don't necessarily have compatible interfaces.
      • (object adapter only) you need to use several existing subclasses, but it's impractical
        to adapt their interface by subclassing every one.
        An object adapter can adapt the interface of its parent class.

Participants
   • Target
     defines the domain-specific interface that Client uses.

   • Client
     collaborates with objects conforming to the Target interface.

   • Adaptee
     defines an existing interface that needs adapting.

   • Adapter
     adapts the interface of Adaptee to the Target interface.

Collaborations
   • Clients call operations on an Adapter instance.
     In turn, the adapter calls Adaptee operations that carry out the request.

Consequences
   Class and object adapters have different trade-offs.
   
   A class adapter:
   • adapts Adaptee to Target by committing to a concrete Adapter class.
     As a consequence, a class adapter won't work when we want to adapt a class and all its subclasses.
   • lets Adapter override some of Adaptee's behavior, since Adapter is a subclass of Adaptee.
   • introduces only one object, and no additional pointer indirection is needed to get to the adaptee.

   An object adapter:
   • lets a single Adapter work with many Adaptees—that is, the Adaptee itself and all of its subclasses (if any).
     The Adapter can also add functionality to all Adaptees at once.
   • makes it harder to override Adaptee behavior.
     It will require subclassing Adaptee and making Adapter refer to the subclass rather than the Adaptee itself.

   Here are other issues to consider when using the Adapter pattern:
   1. How much adapting does Adapter do? Adapters vary in the amount of work they do to adapt Adaptee to the
      Target interface.
      There is a spectrum of possible work, from simple interface conversion—for example, changing the names of
      operations—to supporting an entirely different set of operations.
      The amount of work Adapter does depends on how similar the Target interface is to Adaptee's.

   2. Pluggable adapters.
      A class is more reusable when you minimize the assumptions other classes must make to use it.
      By building interface adaptation into a class, you eliminate the assumption that other classes see the same interface.
      Put another way, interface adaptation lets us incorporate our class into existing systems that might expect different
      interfaces to the class.

   3. Using two-way adapters to provide transparency.
      A potential problem with adapters is that they aren't transparent to all clients.
      An adapted object no longer conforms to the Adaptee interface, so it can't be used as is wherever an Adaptee object can.
      Two-way adapters can provide such transparency.
      Specifically, they're useful when two different clients need to view an object differently.

Related Patterns
   • Bridge (171) has a structure similar to an object adapter, but Bridge has a different intent:
     It is meant to separate an interface from its implementation so that they can be varied easily and independently.
     An adapter is meant to change the interface of an existing object.
   • Decorator (196) enhances another object without changing its interface.
     A decorator is thus more transparent to the application than an adapter is.
     As a consequence, Decorator supports recursive composition, which isn't possible with pure adapters.
   • Proxy (233) defines a representative or surrogate for another object and does not change its interface.


--------------------------------
Adapter Pattern

Adapter Pattern connects existing classes or objects with another existing client.
It makes classes that are not designed to work together possible to cooperate with each other.

An adapter could be either a class adapter or an object adapter.
A class adapter extends the adaptee class and exposes extra APIs that would work with the client.
An object adapter, on the other hand, does not extend the adaptee class.
Instead, it stores the adaptee as a dependency.
The class adapter is useful when you need to access protected methods or properties of the adaptee class.

However, it also has some restrictions when it comes to the JavaScript world:
   • The adaptee class needs to be extendable
   • If the client target is an abstract class other than pure interface, you can't extend the adaptee class
     and the client target with the same adapter class without a mixin
   • A single class with two sets of methods and properties could be confusing

Participants
   The participants of Adapter Pattern include:
      Target
         Defines the interface of existing targets that works with client
      Adaptee
         The implementation that is not designed to work with the client
      Adapter
         Conforms the interface of target and interacts with adaptee
      Client
         Manipulates the target

Pattern scope
   Adapter Pattern can be applied when the existing client class is not designed to work with the existing adaptees.
   It focuses on the unique adapter part when applying to different combinations of clients and adaptees.

Consequences
   By applying Adapter Pattern, we can fill the gap between classes that originally would not work together.
   In this situation, Adapter Pattern is quite a straightforward solution that might come to mind.
   But in other scenarios like a debugger adapter for debugging extensions of an IDE, the implementation of
   Adapter Pattern could be more challenging.
