//monolithic file:-- big file where all code is writen in one place
// it’s been proven that large, "monolithic" code bases are far more likely to be
// difficult to understand and maintain than smaller, well-organized ones.
// So it’s only natural that one way of improving the structure and organization of our programs
// is to break them into smaller, relatively loosely coupled segments called "modules".

//Problems with monolithic code
//1)There may be chance of including third party code, the chances
//that naming clashes will occur starts to grow significantly.
//2)In most other programming languages, this problem is solved with namespaces (C++ and C#)
// or packages (Java), which wrap all enclosed names in another name,
// thereby significantly reducing potential clashes.

// The pattern of using immediate functions, objects, and closures
// to create modules in JavaScript is called the module pattern.
