// The Node class: Handles each individual Node within the Linked List
class Node {
  // Constructor, takes in a single element. Sets the next node to null, as we don't
  // know what will be ahead of it. This is set in the LinkedList class
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// The LinkedList class: Handles the creation of the list, and keeps the nodes linked. Various
// methods are implemented.
class LinkedList {
  
  // Constructor, takes no parameters. Sets head to null as we don't know what will enter the
  // Linked List. Sets size to 0 on initialization as well.
  constructor() {
    this.head = null
    this.size = 0
  }
  
  // Add method. Adds an element to the end of the Linked List. 
  add(element) {
    // Creates a new node, giving it the value of the element 
    var node = new Node(element)
    
    // Create a current variable to check the current node
    var current
    
    // If this is the first element in the linked list, set it as the head node. Else, add it at the end.
    if (this.size == 0) {
      this.head = node
    } else {
      
      // Set the current node as the head node first
      current = this.head
      
      // While this is not the last node. Keep traversing the list
      while (current.next) {
        current = current.next
      }
    
      // At this point current will be the last node of the list. Connect this node to the new node.
      current.next = node
     
    }
    console.log('Element \'' + node.element + '\' was successfully added!')
    
    // Increment size
    this.size++
    
  }
  
  // Insert At method. Inserts an element at a specific position of the Linked List
  insertAt(element, index) {
    // Create the node and insert an element into it
    var node = new Node(element)
    
    // Create current and previous nodes to keep track as we traverse the Linked List
    var current, previous
    
    // If we're adding something to the beginning of the list. Set the next property of the 
    // node to the current head, then make the head this node. Else if it's within or at the 
    // end of the list, traverse the list and place the node there.
    if (index == 0) {
      node.next = this.head
      this.head = node
    } else if (index <= this.size) {
      
      // Set current to the head
      current = this.head
      
      // Loop index amount of times through the list setting previous equal to current, then
      // current one ahead. This allows us to keep track of both so we can insert elements
      // anywhere
      for (var i = 0; i < index; i++) {
        previous = current
        current = current.next
      }
      
      // Once we're at our position, the previous node's next property gets set to this node.
      previous.next = node
      
      // Set the node's next property to the current node.
      node.next = current
    }
    
    // Increment size
    this.size++
  }
  
  // Remove from method. Removes an element at a given index position
  removeFrom(index) {
    
    // Create current and previous nodes for keeping track of where we are in the list
    var current, previous
    
    // If we want to remove the first element in the list, move the head one up.
    if (index == 0) {
      this.head = this.head.next
    } else if (index <= this.size) {
      
      // Set current to the head of the list
      current = this.head
      
      // Loop index amount of times. Set previous to current, and current one ahead
      for (var i = 0; i < index; i++) {
        previous = current
        current = current.next
      }
      
      // Set the previous of the current node, to the next of the current node
      previous.next = current.next
    }
    
    // Decrement size
    this.size--
  }
  
  // Print method. Prints out the contents of the list.
  print() {
    // Declare an empty string
    var str = ''
    
    // Set the current node as the head
    var current = this.head
    
    // Loop until current is null. With every node, add the node's element to the end of the string.
    while (current) {
      str += current.element + ' '
      current = current.next
    }
    
    //Output the string
    console.log(str)
  }
}

// Declare a Linked List object
var myList = new LinkedList()

// Add 'Pie', 'Tomatoes', 'Applesauce', and '7' to the list.
myList.add('Pie')
myList.add('Tomatoes')
myList.add('Applesauce')
myList.add(7)

// Print out the current list
myList.print()

myList.insertAt('Bread', 4)

myList.print()

myList.removeFrom(4)

myList.print()
