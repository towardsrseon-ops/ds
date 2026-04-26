/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';

export const questions: Question[] = [
  // --- BATCH 1 (1-50) ---
  {
    id: 1,
    text: "Which choice best defines a data structure?",
    options: [
      "A method of organizing and storing data for efficient use",
      "A step-by-step procedure for solving a problem",
      "A device used to store files permanently",
      "A command that compiles a program",
      "A type of computer hardware"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "Which choice best defines an algorithm?",
    options: [
      "A container that stores values by index only",
      "A finite sequence of steps used to solve a problem",
      "A hardware circuit used for arithmetic",
      "A memory location reserved by the operating system",
      "A programming language syntax"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "What is the index of the first element in a Python array-like list?",
    options: ["0", "1", "-1", "2", "3"],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "What is the time complexity of accessing an element by index in an array?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)", "O(n log n)"],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "If matrix = [[1, 2], [3, 4], [5, 6]], what is matrix[2][1]?",
    options: ["6", "5", "4", "3", "2"],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "If a 2D array has 5 rows and 3 columns, how many elements does it contain?",
    options: ["15", "8", "10", "20", "12"],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "What does LIFO mean in a stack?",
    options: [
      "Last In, First Out",
      "Left In, First Out",
      "Last In, Final Order",
      "Linear In, First Out",
      "Least Input, First Output"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Which operation adds an element to the top of a stack?",
    options: ["dequeue()", "push()", "enqueue()", "insert_front()", "pop()"],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "A stack starts empty. After push(2), push(4), push(6), pop(), pop(), what is the top?",
    options: ["4", "2", "6", "empty", "8"],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Which data structure is classically used to check balanced parentheses?",
    options: ["Queue", "Stack", "Graph", "Heap", "Hash Table"],
    correctAnswer: 1
  },
  {
    id: 11,
    text: "What does FIFO mean in a queue?",
    options: [
      "First In, First Out",
      "Final In, First Out",
      "First In, Final Order",
      "Fast Input, Fast Output",
      "First In, Fast Output"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Which operation removes and returns the front element of a queue?",
    options: ["enqueue()", "push()", "dequeue()", "insert()", "pop()"],
    correctAnswer: 2
  },
  {
    id: 13,
    text: "A queue is [3, 6, 8] from front to rear. After dequeue() and enqueue(10), what is the final order?",
    options: ["[3, 6, 10]", "[10, 6, 8]", "[6, 10, 8]", "[6, 8, 10]", "[3, 8, 10]"],
    correctAnswer: 3
  },
  {
    id: 14,
    text: "Which condition usually shows that a circular queue is full?",
    options: [
      "front == -1",
      "rear == -1",
      "(rear + 1) % capacity == front",
      "front == rear in every case",
      "front == capacity"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    text: "If capacity = 8, front = 6, and rear = 1, how many elements are in the queue?",
    options: ["3", "5", "6", "4", "2"],
    correctAnswer: 3
  },
  {
    id: 16,
    text: "A circular queue has capacity = 5, front = 4, rear = 1. Which indices currently contain elements?",
    options: ["1, 2, 3, 4", "0, 1, 2, 3", "4, 1 only", "4, 0, 1", "0, 1"],
    correctAnswer: 3
  },
  {
    id: 17,
    text: "A circular queue has capacity = 5, front = 3, rear = 4. After one dequeue and one enqueue, what is the final rear?",
    options: ["1", "3", "0", "4", "2"],
    correctAnswer: 2
  },
  {
    id: 18,
    text: "Which formula gives the number of elements when front and rear are valid positions in a circular queue?",
    options: [
      "(front - rear + capacity) % capacity + 1",
      "rear + front",
      "(rear - front + capacity) % capacity + 1",
      "capacity - rear",
      "rear - front"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    text: "What is a linked list?",
    options: [
      "A linear data structure made of nodes connected by links",
      "A data structure that stores elements in contiguous memory only",
      "A non-linear structure with many children per node",
      "A sorting algorithm",
      "A networking protocol"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "In a circular linked list, the last node points to",
    options: ["None", "the previous node", "a random node", "the head node", "the middle node"],
    correctAnswer: 3
  },
  {
    id: 21,
    text: "What is the time complexity of inserting a new node at the beginning of a singly linked list?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n^2)", "O(n!)"],
    correctAnswer: 1
  },
  {
    id: 22,
    text: "Which linked list type allows traversal in both directions?",
    options: ["Doubly linked list", "Singly linked list", "Circular queue", "Stack", "Binary Tree"],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "A singly linked list is 5 -> 8 -> 12 -> None. After deleting node 8, the list becomes",
    options: ["8 -> 12 -> None", "5 -> 8 -> None", "5 -> 12 -> None", "12 -> None", "Empty list"],
    correctAnswer: 2
  },
  {
    id: 24,
    text: "In a circular linked list with head = 10, which condition is commonly used to stop traversal safely?",
    options: [
      "current == None",
      "current.next == None",
      "count == 0 only",
      "current returns to head",
      "current matches tail"
    ],
    correctAnswer: 3
  },
  {
    id: 25,
    text: "In a doubly linked list, moving backward from a node uses",
    options: ["next", "head", "prev", "count", "tail"],
    correctAnswer: 2
  },
  {
    id: 26,
    text: "What is the topmost node in a tree called?",
    options: ["Root", "Leaf", "Child", "Edge", "Branch"],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "A node with no children is called",
    options: ["Parent", "Leaf", "Root", "Depth", "Level"],
    correctAnswer: 1
  },
  {
    id: 28,
    text: "In a binary tree, each node can have at most",
    options: ["2 children", "1 child", "3 children", "4 children", "Unlimited children"],
    correctAnswer: 0
  },
  {
    id: 29,
    text: "Which formula gives the maximum number of nodes at level k in a binary tree?",
    options: ["2k", "k^2", "2^(k+1) - 1", "2^k", "3^k"],
    correctAnswer: 3
  },
  {
    id: 30,
    text: "What is the maximum number of nodes in a binary tree of height 4?",
    options: ["31", "15", "16", "32", "63"],
    correctAnswer: 0
  },
  {
    id: 31,
    text: "Which type of binary tree has every node with either 0 or 2 children?",
    options: ["Complete binary tree", "Perfect binary tree", "Skewed binary tree", "Full binary tree", "Balanced tree"],
    correctAnswer: 3
  },
  {
    id: 32,
    text: "Which type of binary tree has all levels full except possibly the last, and the last is filled from left to right?",
    options: ["Complete binary tree", "Full binary tree", "Perfect binary tree", "Threaded binary tree", "Infinite tree"],
    correctAnswer: 0
  },
  {
    id: 33,
    text: "In a node-based representation of a binary tree, each node usually stores",
    options: [
      "data, left reference, and right reference",
      "data only",
      "a matrix row",
      "head and tail only",
      "only child pointers"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    text: "In an array-based binary tree representation, if a node is stored at index i, its left child is usually at",
    options: ["i + 1", "2i + 1", "2i", "2i + 2", "i / 2"],
    correctAnswer: 1
  },
  {
    id: 35,
    text: "In an array-based binary tree representation, if a node is stored at index i, its right child is usually at",
    options: ["2i", "2i + 1", "2i + 2", "i - 1", "2i + 3"],
    correctAnswer: 2
  },
  {
    id: 36,
    text: "What is the maximum number of leaf nodes in a perfect binary tree of height 3?",
    options: ["4", "6", "15", "8", "7"],
    correctAnswer: 3
  },
  {
    id: 37,
    text: "Which traversal of a BST produces sorted output?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order", "Breadth-first"],
    correctAnswer: 2
  },
  {
    id: 38,
    text: "In the BST formed by inserting 50, 30, 70, 20, 40, 60, 80, what is the post-order traversal?",
    options: [
      "20, 40, 30, 60, 80, 70, 50",
      "50, 30, 20, 40, 70, 60, 80",
      "20, 30, 40, 50, 60, 70, 80",
      "50, 70, 80, 30, 40, 20, 60",
      "80, 70, 60, 50, 40, 30, 20"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    text: "If a BST contains the values 8, 3, 10, 1, 6, 14, what is the post-order traversal?",
    options: [
      "8, 3, 1, 6, 10, 14",
      "1, 3, 6, 8, 10, 14",
      "8, 10, 14, 3, 6, 1",
      "1, 6, 3, 14, 10, 8",
      "14, 10, 8, 6, 3, 1"
    ],
    correctAnswer: 3
  },
  {
    id: 40,
    text: "Which data structure is commonly used for level-order traversal?",
    options: ["Stack", "Heap", "Array of size one", "Queue", "Priority Queue"],
    correctAnswer: 3
  },
  {
    id: 41,
    text: "What rule defines a Binary Search Tree?",
    options: [
      "Left subtree values are smaller than the node and right subtree values are greater",
      "Every node has exactly two children",
      "All values are stored in sorted array positions",
      "The root must be the smallest value",
      "Balanced tree property (AVL)"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    text: "In a BST, searching for 65 in the tree built from 50, 30, 70, 20, 40, 60, 80 will first move from 50 to",
    options: ["20", "30", "70", "60", "Search ends at 50"],
    correctAnswer: 2
  },
  {
    id: 43,
    text: "In the BST formed by inserting 20, 10, 30, 5, 15, where is 15 located relative to 10?",
    options: ["Left child", "Parent", "Right child", "Root", "Outside tree"],
    correctAnswer: 2
  },
  {
    id: 44,
    text: "Which statement is true?",
    options: [
      "Every binary tree is a BST",
      "A BST node can have three children",
      "A BST cannot be traversed",
      "Every BST is a binary tree",
      "Sorting is O(1) in a BST"
    ],
    correctAnswer: 3
  },
  {
    id: 45,
    text: "In a BST, where is the value smaller than the current node placed?",
    options: ["In the right subtree", "In the left subtree", "At the root only", "In any empty position", "Outside the tree"],
    correctAnswer: 1
  },
  {
    id: 46,
    text: "In a BST, where is a value greater than the current node placed?",
    options: ["In the left subtree", "At the first leaf only", "In the right subtree", "At the parent only", "In the root"],
    correctAnswer: 2
  },
  {
    id: 47,
    text: "What is the average search time in a balanced BST?",
    options: ["O(log n)", "O(1)", "O(n)", "O(n^2)", "O(sqrt(n))"],
    correctAnswer: 0
  },
  {
    id: 48,
    text: "What is the worst-case search time in a skewed BST?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)", "O(n!)"],
    correctAnswer: 1
  },
  {
    id: 49,
    text: "A graph consists of",
    options: ["vertices and edges", "edges only", "nodes stored contiguously only", "arrays only", "loops only"],
    correctAnswer: 0
  },
  {
    id: 50,
    text: "Which algorithm is classically O(n log n) in the worst case ?",
    options: ["Bubble sort", "Merge sort", "Linear search", "Accessing the top of a stack", "Selection sort"],
    correctAnswer: 1
  },
  // --- BATCH 2 (51-100) ---
  {
    id: 51,
    text: "What is a data structure?",
    options: ["Programming language", "Algorithm", "Hardware device", "Method to organize data", "Operating system"],
    correctAnswer: 3
  },
  {
    id: 52,
    text: "Sorting arranges data in:",
    options: ["Random order", "Specific order", "Reverse order", "Memory order", "Chronological order only"],
    correctAnswer: 1
  },
  {
    id: 53,
    text: "If a data structure is organizing the data in sequential order, then that data structure is called:",
    options: ["Linear data structure", "Non-linear data structure", "Queue", "All the above mention", "Linked structure"],
    correctAnswer: 0
  },
  {
    id: 54,
    text: "Array elements are stored in:",
    options: ["Random memory", "Linked memory", "Contiguous memory", "Disk", "Virtual memory"],
    correctAnswer: 2
  },
  {
    id: 55,
    text: "Index of first element in array:",
    options: ["1", "Depends on language", "-1", "0", "End of array"],
    correctAnswer: 3
  },
  {
    id: 56,
    text: "Time complexity of access in an array:",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)", "O(sqrt(n))"],
    correctAnswer: 2
  },
  {
    id: 57,
    text: "Arrays can be used to implement various data structures like:",
    options: ["Stack", "Queue", "Heap", "All the mention above", "None of the above"],
    correctAnswer: 3
  },
  {
    id: 58,
    text: "Time complexity of searching in an unsorted array:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 59,
    text: "Which is a linear data structure?",
    options: ["Tree", "Graph", "Stack", "Heap", "Trie"],
    correctAnswer: 2
  },
  {
    id: 60,
    text: "Which structure uses LIFO?",
    options: ["Stack", "Queue", "Array", "Graph", "Hash Table"],
    correctAnswer: 0
  },
  {
    id: 61,
    text: "Stack top element is accessed using:",
    options: ["pop()", "push()", "peek()", "delete()", "search()"],
    correctAnswer: 2
  },
  {
    id: 62,
    text: "Which operation is NOT allowed in stack?",
    options: ["Insert in middle", "Pop", "Push", "Peek", "Top"],
    correctAnswer: 0
  },
  {
    id: 63,
    text: "Stack overflow occurs when:",
    options: ["Empty", "Full", "Half", "Sorted", "Accessing null"],
    correctAnswer: 1
  },
  {
    id: 64,
    text: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Array", "Graph", "Tree"],
    correctAnswer: 1
  },
  {
    id: 65,
    text: "Which structure is best for undo operation?",
    options: ["Queue", "Array", "Graph", "Stack", "Map"],
    correctAnswer: 3
  },
  {
    id: 66,
    text: "In stack, Push: 10, 20, 30. Pop: ?",
    options: ["10", "20", "30", "Error", "15"],
    correctAnswer: 2
  },
  {
    id: 67,
    text: "In stack Push(5), Push(10), Push(15), Pop(), Pop(). What remains?",
    options: ["[5]", "[10]", "[15]", "[]", "[10, 15]"],
    correctAnswer: 0
  },
  {
    id: 68,
    text: "If you Push: 10, 20, 30 to a stack and then Pop, which value is removed?",
    options: ["10", "20", "30", "None", "Error"],
    correctAnswer: 2
  },
  {
    id: 69,
    text: "FIFO structure used in?",
    options: ["Stack", "Queue", "Tree", "List", "Hash Map"],
    correctAnswer: 1
  },
  {
    id: 70,
    text: "Queue deletion is called:",
    options: ["Pop", "Push", "Dequeue", "Remove", "Delete"],
    correctAnswer: 2
  },
  {
    id: 71,
    text: "Queue insertion occurs at:",
    options: ["Front", "Middle", "Rear", "Anywhere", "Center"],
    correctAnswer: 2
  },
  {
    id: 72,
    text: "Queue underflow occurs when:",
    options: ["Empty", "Full", "Sorted", "Insert", "Overflowing"],
    correctAnswer: 0
  },
  {
    id: 73,
    text: "Queue front element accessed by:",
    options: ["push", "pop", "peek", "insert", "getRear"],
    correctAnswer: 2
  },
  {
    id: 74,
    text: "Time complexity of dequeue in circular queue:",
    options: ["O(n)", "O(1)", "O(log n)", "O(n^2)", "O(sqrt(n))"],
    correctAnswer: 1
  },
  {
    id: 75,
    text: "Which data structure is used for scheduling tasks?",
    options: ["Stack", "Tree", "Graph", "Queue", "Heap"],
    correctAnswer: 3
  },
  {
    id: 76,
    text: "Enqueue: 5, 10, 15. Dequeue: ?",
    options: ["15", "10", "5", "Error", "Empty"],
    correctAnswer: 2
  },
  {
    id: 77,
    text: "Queue operations: Enqueue(10), Enqueue(20), Dequeue(), Enqueue(30), Dequeue(). Result?",
    options: ["[10, 20]", "[20, 30]", "[30]", "[10, 30]", "[20]"],
    correctAnswer: 2
  },
  {
    id: 78,
    text: "Which type of queue takes the most important task is completed first, rather than FIFO concept?",
    options: ["Circle queue", "Double-ended queue", "Priority queue", "Simple queue", "Deque"],
    correctAnswer: 2
  },
  {
    id: 79,
    text: "Linked list stores data in:",
    options: ["Continuous memory", "Random memory", "Files", "Nodes", "Arrays"],
    correctAnswer: 3
  },
  {
    id: 80,
    text: "Linked list last node points to:",
    options: ["First node", "Null", "Itself", "Random", "Virtual Head"],
    correctAnswer: 1
  },
  {
    id: 81,
    text: "Which data structure is considered dynamic?",
    options: ["Array", "Linked list", "Stack", "Matrix", "Tuple"],
    correctAnswer: 1
  },
  {
    id: 82,
    text: "Which data structure uses pointers?",
    options: ["Array", "Stack", "Linked list", "Queue", "Primitive type"],
    correctAnswer: 2
  },
  {
    id: 83,
    text: "Linked list uses:",
    options: ["Index", "Pointer", "Address", "File", "Sequential ID"],
    correctAnswer: 1
  },
  {
    id: 84,
    text: "In a Circular Linked List:",
    options: [
      "Last node points back to the first node",
      "Each node points to the next node",
      "Last node points to NULL",
      "Each node has two pointers",
      "Nodes are indexed"
    ],
    correctAnswer: 0
  },
  {
    id: 85,
    text: "One of the most popular applications of linked list is:",
    options: ["Scheduling system", "Resource sharing", "Music Playlists", "None of the above", "Database indexing"],
    correctAnswer: 2
  },
  {
    id: 86,
    text: "One of the main differences between the Queue and Link List is:",
    options: ["Fix Vs Dynamic", "Strict order (FIFO)", "Music Playlists", "None of the above", "Execution speed"],
    correctAnswer: 0
  },
  {
    id: 87,
    text: "Which of the following best describes a Linked List?",
    options: ["Fixed size and contiguous", "Dynamic and non-contiguous", "Static and ordered", "Random access", "Stack-based"],
    correctAnswer: 1
  },
  {
    id: 88,
    text: "Which statement is FALSE?",
    options: [
      "Array allows random access",
      "Linked list allows random access",
      "Stack uses LIFO",
      "Queue uses FIFO",
      "Graph can have cycles"
    ],
    correctAnswer: 1
  },
  {
    id: 89,
    text: "Binary tree has maximum children:",
    options: ["2", "1", "3", "Unlimited", "0"],
    correctAnswer: 0
  },
  {
    id: 90,
    text: "Binary Search Tree property:",
    options: ["Left > Right", "All equal", "Left < Root < Right", "Random", "Depth first"],
    correctAnswer: 2
  },
  {
    id: 91,
    text: "Binary Search Tree Structure consist of:",
    options: ["Nodes", "Root", "Edges", "All the above", "Leaves only"],
    correctAnswer: 3
  },
  {
    id: 92,
    text: "The path from the root to a given node is measured as:",
    options: ["height", "Depth", "Space complexity", "Not mention", "Level"],
    correctAnswer: 1
  },
  {
    id: 93,
    text: "Insert the values in BST: 50, 30, 70, 20, 40, 60, 80. What is the root?",
    options: ["30", "50", "70", "20", "80"],
    correctAnswer: 1
  },
  {
    id: 94,
    text: "In Binary Search Tree, siblings are:",
    options: [
      "Children with the same parents",
      "Children share the same grandpa",
      "A direct downward link node",
      "Unsorted",
      "Nodes at same level"
    ],
    correctAnswer: 0
  },
  {
    id: 95,
    text: "To calculate Time Complexity of Binary Search Tree (BST) you consider:",
    options: ["tree height", "tree depth", "Number of nodes", "All the above", "Root only"],
    correctAnswer: 0
  },
  {
    id: 96,
    text: "If number of nodes in BST is 7 then number of edge is?",
    options: ["7", "5", "6", "None of the above", "14"],
    correctAnswer: 2
  },
  {
    id: 97,
    text: "A graph consists of:",
    options: ["Vertices and edges", "Edges only", "Nodes only", "Arrays", "Planes"],
    correctAnswer: 0
  },
  {
    id: 98,
    text: "Which algorithm splits problem recursively?",
    options: ["Bubble sort", "Stack", "Linear search", "Merge sort", "Heap sort"],
    correctAnswer: 3
  },
  {
    id: 99,
    text: "Merge sort first step:",
    options: ["Swap", "Divide", "Merge", "Compare", "Selection"],
    correctAnswer: 1
  },
  {
    id: 100,
    text: "After one pass of Bubble Sort on: [5, 3, 8, 4], the array becomes:",
    options: ["[3, 5, 8, 4]", "[3, 5, 4, 8]", "[5, 3, 4, 8]", "[3, 4, 5, 8]", "[8, 5, 4, 3]"],
    correctAnswer: 1
  },
  // --- BATCH 3 (101-150) ---
  {
    id: 101,
    text: "What is the primary purpose of a data structure in a computer system?",
    options: [
      "To define the hardware architecture",
      "To organize, process, and store data for efficient access",
      "To replace the operating system",
      "To increase the monitor's resolution",
      "To compile source code into machine language"
    ],
    correctAnswer: 1
  },
  {
    id: 102,
    text: "Which of the following is a key difference between a data type and a data structure?",
    options: [
      "Data structures are predefined by languages, while data types are not",
      "Data types can hold multiple kinds of data in one object, data structures cannot",
      "Time complexity is irrelevant for data types but crucial for data structures",
      "Data types are non-linear, while data structures are always linear",
      "There is no difference between them"
    ],
    correctAnswer: 2
  },
  {
    id: 103,
    text: "Which searching algorithm requires the array to be sorted before the search begins?",
    options: ["Linear Search", "Sequential Search", "Bubble Search", "Binary Search", "Selection Search"],
    correctAnswer: 3
  },
  {
    id: 104,
    text: "An array is defined as a collection of items stored at:",
    options: [
      "Random memory locations",
      "Non-contiguous memory locations",
      "Contiguous memory locations",
      "External storage only",
      "Virtual memory addresses only"
    ],
    correctAnswer: 2
  },
  {
    id: 105,
    text: "When memory efficiency is important for large sets of homogeneous data in Python, which library is recommended?",
    options: ["Math", "Random", "NumPy", "Sys", "Statistics"],
    correctAnswer: 2
  },
  {
    id: 106,
    text: "In a one-dimensional array of size 'n', what is the index of the first element?",
    options: ["n-1", "1", "-1", "0", "n"],
    correctAnswer: 3
  },
  {
    id: 107,
    text: "How is a two-dimensional array stored in memory?",
    options: [
      "As a hierarchical tree",
      "As contiguous storage locations where rows are stored one after another",
      "Scattered across different sectors of the hard drive",
      "As a non-linear linked list",
      "Only in the CPU registers"
    ],
    correctAnswer: 1
  },
  {
    id: 108,
    text: "In 2D array, if you need to access diagonal elements specifically, which condition on row index (i) and column index (j) is used?",
    options: ["i < j", "i > j", "i = j", "(i + j) > n", "(i + j) < n"],
    correctAnswer: 2
  },
  {
    id: 109,
    text: "The Stack data structure operates on which principle?",
    options: [
      "First-In-First-Out (FIFO)",
      "Last-In-First-Out (LIFO)",
      "Highest-Priority-First (HPF)",
      "Random-In-Random-Out (RIRO)",
      "Bottom-In-Top-Out (BITO)"
    ],
    correctAnswer: 1
  },
  {
    id: 110,
    text: "Which situation occurs when a user tries to push an element onto a stack that is already full?",
    options: ["Stack Underflow", "Stack Error", "Stack Overflow", "Stack Collision", "Stack Replacement"],
    correctAnswer: 2
  },
  {
    id: 111,
    text: "What is the initial value of the TOP pointer when a stack is empty?",
    options: ["0", "1", "-1", "NULL", "Infinity"],
    correctAnswer: 2
  },
  {
    id: 112,
    text: "Which of the following is a real-world application of a Stack?",
    options: [
      "People waiting in a ticket line",
      "A deck of cards or a pile of plates",
      "A social network friend suggestion",
      "GPS navigation routes",
      "Printer job management"
    ],
    correctAnswer: 1
  },
  {
    id: 113,
    text: "Stacks are commonly used in which of the following computer algorithms?",
    options: [
      "Simple addition",
      "Image brightness adjustment",
      "Tree traversal and recursion",
      "Hardware driver installation",
      "Keyboard layout mapping"
    ],
    correctAnswer: 2
  },
  {
    id: 114,
    text: "Which operation returns the top data value without removing it from the stack?",
    options: ["Push", "Pop", "IsEmpty", "Peek", "Size"],
    correctAnswer: 3
  },
  {
    id: 115,
    text: "What does the Pop operation do?",
    options: [
      "Adds an element to the bottom",
      "Returns the number of elements",
      "Checks if the stack is full",
      "Removes the last data value on top of the stack",
      "Swaps the top two elements"
    ],
    correctAnswer: 3
  },
  {
    id: 116,
    text: "Which function is used to check if a stack contains no elements?",
    options: ["IsFull", "Peek", "IsEmpty", "Pop", "Reset"],
    correctAnswer: 2
  },
  {
    id: 117,
    text: "In stack, for the Push operation, what is the step immediately following the 'Check if full' stage (assuming it's not full)?",
    options: [
      "Add data to the current top",
      "Decrement the top pointer",
      "Exit the program",
      "Increment top to point to the next empty space",
      "Return an overflow error"
    ],
    correctAnswer: 3
  },
  {
    id: 118,
    text: "In stack, the IsFull operation returns true when the top pointer is equal to:",
    options: ["0", "-1", "capacity - 1", "capacity + 1", "size / 2"],
    correctAnswer: 2
  },
  {
    id: 119,
    text: "In a stack implementation, if stack.top >= stack.size-1, what error message should be printed?",
    options: ["memory full", "stack underflow", "stack overflow", "array error", "index out of bounds"],
    correctAnswer: 2
  },
  {
    id: 120,
    text: "When implementing a pop function in stack, after retrieving the value, what must happen to the pointer?",
    options: [
      "stack.top = stack.top + 1",
      "stack.top = stack.top - 1",
      "stack.top = 0",
      "stack.top = size",
      "The pointer remains the same"
    ],
    correctAnswer: 1
  },
  {
    id: 121,
    text: "A Queue is a linear data structure that follows the principle of:",
    options: [
      "Last-In-First-Out",
      "First-In-First-Out",
      "Priority-Based-Access",
      "Last-In-Last-Out",
      "Middle-In-First-Out"
    ],
    correctAnswer: 1
  },
  {
    id: 122,
    text: "Which two pointers are used to perform operations in an array-based Queue?",
    options: ["Top and Bottom", "Start and End", "Head and Tail (Front and Rear)", "Left and Right", "Root and Leaf"],
    correctAnswer: 2
  },
  {
    id: 123,
    text: "Why is a queue referred to as having 'one-way access'?",
    options: [
      "Elements can only be added to the front",
      "Elements can only be removed from the rear",
      "It can only be used by one user at a time",
      "Insertion and deletion happen at opposite ends",
      "It uses only one pointer for everything"
    ],
    correctAnswer: 3
  },
  {
    id: 124,
    text: "What does 'Capacity' refer to in the context of a Queue?",
    options: [
      "Current number of elements",
      "The size of each data element",
      "The maximum number of elements it can hold",
      "The speed of the dequeue operation",
      "The memory address of the first node"
    ],
    correctAnswer: 2
  },
  {
    id: 125,
    text: "If the queue elements are [3, 5, 7, 9] from front to rear. After dequeue(), enqueue(2) and enqueue(4), what is the final order?",
    options: ["[ 2, 3, 4, 5, 7]", "[ 5, 7, 9, 2, 4]", "[ 4, 2, 5, 7 ,9]", "[ 5, 7, 9, 4, 2]", "[ 2, 4, 3, 5, 7]"],
    correctAnswer: 1
  },
  {
    id: 126,
    text: "The operation used to insert an element into the queue is called:",
    options: ["Push", "Pop", "Dequeue", "Enqueue", "Append"],
    correctAnswer: 3
  },
  {
    id: 127,
    text: "From which end are elements removed during a Dequeue operation?",
    options: ["Rear", "Tail", "Front (Head)", "Top", "Center"],
    correctAnswer: 2
  },
  {
    id: 128,
    text: "According to standard algorithms, what is one condition that proves a queue is Empty?",
    options: ["front = rear", "rear = -1", "front = -1 OR front > rear", "front = max_size", "rear = max_size - 1"],
    correctAnswer: 2
  },
  {
    id: 129,
    text: "To check if an array_based_queue is Full, we check if:",
    options: ["front = rear", "rear = max_array_size - 1", "front = max_array_size - 1", "rear = max_array_size", "front = max_array_size"],
    correctAnswer: 1
  },
  {
    id: 130,
    text: "What does the Dequeue() operation return?",
    options: [
      "The element at the rear without removing it",
      "The element at the front without removes it",
      "The element at the front and removing it",
      "The element at the rear and removing it",
      "The last element inter the queue"
    ],
    correctAnswer: 2
  },
  {
    id: 131,
    text: "Each element in a Linked List is a separate object called a:",
    options: ["Block", "Index", "Node", "Sector", "Link"],
    correctAnswer: 2
  },
  {
    id: 132,
    text: "How is memory allocated for a Linked List compared to an Array?",
    options: [
      "Arrays are allocated one by one; Linked Lists are allocated as a whole",
      "Both are allocated to the whole structure at once",
      "Arrays are contiguous; Linked Lists are non-contiguous and allocated node by node",
      "Linked lists use no memory for pointers",
      "Arrays are more efficient for insertions and deletions"
    ],
    correctAnswer: 2
  },
  {
    id: 133,
    text: "What does the next pointer of the last node in a singly linked list point to?",
    options: ["The head", "The first node", "NULL", "Itself", "The previous node"],
    correctAnswer: 2
  },
  {
    id: 134,
    text: "Which pointer identifies the very first node of the Linked List?",
    options: ["Tail", "End", "Root", "Head", "Start"],
    correctAnswer: 3
  },
  {
    id: 135,
    text: "In which type of linked list does the last node point back to the first node?",
    options: ["Doubly Linked-List", "Linear Linked-List", "Circular Linked-List", "Static Linked-List", "Pathological Linked-List"],
    correctAnswer: 2
  },
  {
    id: 136,
    text: "When inserting a node at the beginning, what is the first step regarding pointers?",
    options: [
      "Set head to point to NULL",
      "Set the new node's next to the current head",
      "Set the last node's next to the new node",
      "Set head to the new node immediately",
      "Traverse to the end of the list"
    ],
    correctAnswer: 1
  },
  {
    id: 137,
    text: "To delete a node from the end of a multi-node list, you must:",
    options: [
      "Set head to NULL",
      "Set the head's next pointer to NULL",
      "Traverse to the second-last node and set its next pointer to NULL",
      "Simply delete the head node",
      "Change the head to the second node"
    ],
    correctAnswer: 2
  },
  {
    id: 138,
    text: "What is the purpose of the Traversal operation?",
    options: [
      "To delete the entire list",
      "To access each element of the linked list sequentially",
      "To find the last node and delete it",
      "To sort the list in descending order",
      "To reverse the pointers of all nodes"
    ],
    correctAnswer: 1
  },
  {
    id: 139,
    text: "In Linked list Node class constructor, self.next pointer is initialized to what value?",
    options: ["0", "-1", "None (or NULL)", "The head address", "1"],
    correctAnswer: 2
  },
  {
    id: 140,
    text: "Deleting a node from the beginning involves pointing the head to:",
    options: ["NULL", "The last node", "The second node (head.next)", "The current node itself", "A new temporary node"],
    correctAnswer: 2
  },
  {
    id: 141,
    text: "A Binary Tree is a special type of tree where every node can have a maximum of:",
    options: ["1 child", "2 children", "3 children", "5 children", "Infinite children"],
    correctAnswer: 1
  },
  {
    id: 142,
    text: "What is a 'leaf node'?",
    options: [
      "The topmost node of a tree",
      "A node with at least one child",
      "A node that does not have any child nodes",
      "A node with exactly two children",
      "The node that stores the pointers to the root"
    ],
    correctAnswer: 2
  },
  {
    id: 143,
    text: "In a 'Perfect Binary Tree,' if the internal nodes have two children each, and all leaves are at the same level, the number of leaf nodes is:",
    options: ["Half the internal nodes", "Double the internal nodes", "The number of internal nodes plus 1", "Equal to the number of internal nodes", "The number of internal nodes minus 1"],
    correctAnswer: 2
  },
  {
    id: 144,
    text: "In the 'Linked Node Representation' of a binary tree, what does each node typically contain?",
    options: [
      "A pointer to the next node in a linear chain",
      "Data and an index number",
      "Data and one pointer to the parent",
      "Data and pointers to its left and right children",
      "Only data"
    ],
    correctAnswer: 3
  },
  {
    id: 145,
    text: "In Array Representation for a binary tree (where the root node is at index 0), if a parent node is at index i, at what index is its left child located?",
    options: ["i + 1", "i - 1", "2i + 1", "2i + 2", "i / 2"],
    correctAnswer: 2
  },
  {
    id: 146,
    text: "In array representation for a binary tree, for any element at position i, its parent node is found at:",
    options: ["2i", "i * 2", "i / 2", "i + 2", "i - 1"],
    correctAnswer: 2
  },
  {
    id: 147,
    text: "Which of the following is a disadvantage of the Array Representation for binary trees?",
    options: [
      "Fast access using indices",
      "Easy to navigate",
      "Memory wastage if the tree is sparse or not complete",
      "Simple to implement for complete trees",
      "No extra memory for pointers"
    ],
    correctAnswer: 2
  },
  {
    id: 148,
    text: "What is an 'Adjacency Matrix'?",
    options: [
      "A list of all vertices in a graph",
      "A 2D matrix where cell (i,j) stores information about the edge from vertex i to vertex j",
      "A linear array used to store node values",
      "A collection of leaf nodes without edges",
      "A tree structure that represents many-to-many relationships"
    ],
    correctAnswer: 1
  },
  {
    id: 149,
    text: "In an Adjacency Matrix representing an undirected graph, the matrix values are:",
    options: [
      "Asymmetrical (because edges go in one way)",
      "Symmetrical (because edges go both ways)",
      "Stored 1 in the odd column and 0 in the even column",
      "Always zero",
      "Always one"
    ],
    correctAnswer: 1
  },
  {
    id: 150,
    text: "Which algorithm is classically O(n log n) in the worst case?",
    options: ["Bubble sort", "Merge sort", "Linear search", "Accessing the top of a stack", "Selection sort"],
    correctAnswer: 1
  },
  // --- BATCH 4 (151-200) ---
  {
    id: 151,
    text: "Which of the following is considered a 'Non-Linear' data structure?",
    options: ["Arrays", "Linked Lists", "Binary Trees", "Stacks", "Queues"],
    correctAnswer: 2
  },
  {
    id: 152,
    text: "Which of the following is considered a 'Linear' data structure?",
    options: ["Tree", "Stack", "Binary Trees", "Graph", "Directed Graph"],
    correctAnswer: 1
  },
  {
    id: 153,
    text: "Which function is used to add an element to the end of an array (Python style)?",
    options: ["insert()", "extend()", "append()", "add()", "pop()"],
    correctAnswer: 2
  },
  {
    id: 154,
    text: "What does the pop() method return when no argument is given in Python?",
    options: ["The first element", "The length of the array", "The last element", "All elements", "None"],
    correctAnswer: 2
  },
  {
    id: 155,
    text: "Which of the following is an advantage of using the ADT (Abstract Data Type) approach?",
    options: [
      "It makes the code run faster",
      "The implementation can change without affecting the code that uses it",
      "It uses less memory",
      "It eliminates the need for data structures",
      "None of the above"
    ],
    correctAnswer: 1
  },
  {
    id: 156,
    text: "What is the worst-case time complexity for linear search?",
    options: ["O(n log n)", "O(log n)", "O(n)", "O(1)", "O(n²)"],
    correctAnswer: 2
  },
  {
    id: 157,
    text: "For the array [1, 2, 3, 6, 8, 10], on which call is the element 6 found using linear search?",
    options: ["4th call", "3rd call", "6th call", "5th call", "2nd call"],
    correctAnswer: 0
  },
  {
    id: 158,
    text: "Which function returns the number of elements in an array (Python style)?",
    options: ["size()", "length()", "len()", "count()", "Peek()"],
    correctAnswer: 2
  },
  {
    id: 159,
    text: "Which method removes the first occurrence of a specific value from an array?",
    options: ["pop()", "delete()", "remove()", "discard()", "append()"],
    correctAnswer: 2
  },
  {
    id: 160,
    text: "Which principle does a stack data structure follow?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random access", "Circular order", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 161,
    text: "What are the two primary operations of a stack?",
    options: ["Enqueue and Dequeue", "Push and Pop", "Insert and Delete", "Append and Remove", "Peek and Pop"],
    correctAnswer: 1
  },
  {
    id: 162,
    text: "What is the term for inserting an item into a Stack?",
    options: ["Enqueue", "Push", "Pop", "Insert", "Dequeue"],
    correctAnswer: 1
  },
  {
    id: 163,
    text: "Consider the sequence: push(5), push(3), pop(), push(7), pop(), pop(). What is the final state of the stack?",
    options: ["[5, 3]", "[5, 7]", "[] (empty)", "[5]", "[3]"],
    correctAnswer: 2
  },
  {
    id: 164,
    text: "What does 'underflow' mean in a Queue?",
    options: ["Queue is full", "Queue is empty", "Error in the queue", "Queue has one element", "Unknown state"],
    correctAnswer: 1
  },
  {
    id: 165,
    text: "In a queue, new elements are added at the ______ and removed from the ______.",
    options: ["Front, Front", "Rear, Rear", "Rear, Front", "Front, Rear", "Anywhere, Middle"],
    correctAnswer: 2
  },
  {
    id: 166,
    text: "What is the term for removing an item from a Queue?",
    options: ["Dequeue", "Pop", "Delete", "Remove", "All of above"],
    correctAnswer: 0
  },
  {
    id: 167,
    text: "What is the front of a Queue?",
    options: ["The last element added", "The first element added", "The middle element", "None of the above", "All of above"],
    correctAnswer: 1
  },
  {
    id: 168,
    text: "A queue follows which principle?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Ordered array", "Linear tree", "Circular queue"],
    correctAnswer: 0
  },
  {
    id: 169,
    text: "If elements 'A', 'B', 'C', and 'D' are placed in a queue, in what order will they be removed?",
    options: ["ABCD", "DCBA", "DCAB", "ABDC", "CADE"],
    correctAnswer: 0
  },
  {
    id: 170,
    text: "A linear list where deletion is from one end (front) and insertion at the other (rear) is a:",
    options: ["Queue", "Stack", "Tree", "Linked list", "Graph"],
    correctAnswer: 0
  },
  {
    id: 171,
    text: "What is the term for adding an item to a Queue?",
    options: ["Enqueue", "Pop", "Add", "Insert", "All of above"],
    correctAnswer: 0
  },
  {
    id: 172,
    text: "In a singly linked list, each node contains:",
    options: ["Data + prev pointer", "Data + next pointer", "Only data", "Two pointers", "All of above"],
    correctAnswer: 1
  },
  {
    id: 173,
    text: "A circular linked list is characterized by:",
    options: [
      "First node points to None",
      "Last node points back to the head",
      "Each node has two pointers",
      "It cannot be traversed",
      "None of the above"
    ],
    correctAnswer: 1
  },
  {
    id: 174,
    text: "If a linked list contains 5 → 10 → 15, how is it typically represented?",
    options: ["5->10->15", "5->10->15->None", "5 10 15 None", "15->10->5->None", "All of above"],
    correctAnswer: 1
  },
  {
    id: 175,
    text: "In a doubly linked list, how many pointers does each node contain?",
    options: ["1", "2", "3", "0", "4"],
    correctAnswer: 1
  },
  {
    id: 176,
    text: "What are the two primary components of a single node in a Singly Linked List?",
    options: ["Key and Value", "Data and Pointer to next", "Data and Pointer to prev", "Head and Tail", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 177,
    text: "What is the first node of a linked list called?",
    options: ["Root", "Head", "Top", "Base", "Start"],
    correctAnswer: 1
  },
  {
    id: 178,
    text: "In a Singly Linked List, what does the last node point to?",
    options: ["The Head", "The previous node", "None / Null", "Itself", "The final node"],
    correctAnswer: 2
  },
  {
    id: 179,
    text: "What is the worst-case time complexity of searching in a Binary Search Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)"],
    correctAnswer: 2
  },
  {
    id: 180,
    text: "What is the maximum number of children a node in a Binary Search Tree can have?",
    options: ["1", "2", "3", "4", "Any number"],
    correctAnswer: 1
  },
  {
    id: 181,
    text: "In a Binary Search Tree, what is the term for a node with no children?",
    options: ["Root", "Leaf", "Parent", "Internal node", "Branch"],
    correctAnswer: 1
  },
  {
    id: 182,
    text: "How can you determine if a Binary Tree is a Binary Search Tree?",
    options: [
      "Check if all left nodes < root and all right nodes > root",
      "Check if the tree is balanced",
      "Ensure all nodes have two children",
      "Verify the height of the tree",
      "None of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 183,
    text: "In a BST, all nodes in the left subtree of a given node have values that are:",
    options: ["Greater than root", "Less than or equal to root", "Equal to root only", "Random", "Always negative"],
    correctAnswer: 1
  },
  {
    id: 184,
    text: "Which tree traversal visits the left subtree, then the root, then the right subtree?",
    options: ["Preorder", "Inorder", "Postorder", "Breadth first", "Depth first"],
    correctAnswer: 1
  },
  {
    id: 185,
    text: "Which tree traversal visits the left subtree, then the right subtree, then the root?",
    options: ["Preorder", "Inorder", "Postorder", "Breadth first", "Depth first"],
    correctAnswer: 2
  },
  {
    id: 186,
    text: "Which tree traversal visits the root, then the left subtree, then the right subtree?",
    options: ["Preorder", "Inorder", "Postorder", "Breadth first", "Death first"],
    correctAnswer: 0
  },
  {
    id: 187,
    text: "For a BST with root=50, left=30, right=70 (and children 20,40,60,80), what is the inorder traversal?",
    options: [
      "50, 30, 20, 40, 70, 60, 80",
      "20, 30, 40, 50, 60, 70, 80",
      "20, 40, 30, 60, 80, 70, 50",
      "50, 70, 80, 60, 30, 40, 20",
      "All of above"
    ],
    correctAnswer: 1
  },
  {
    id: 188,
    text: "Given postorder: 4, 5, 2, 6, 7, 3, 1. What is the preorder traversal of the same tree?",
    options: [
      "1, 2, 4, 5, 3, 6, 7",
      "1, 2, 4, 5, 3, 6, 7 (reconstructed)",
      "4, 5, 2, 6, 7, 3, 1",
      "1, 3, 7, 6, 2, 5, 4",
      "None of above"
    ],
    correctAnswer: 0
  },
  {
    id: 189,
    text: "In a tree data structure, what is the node that has no parent called?",
    options: ["Leaf node", "Child node", "Root node", "Sibling node", "None of above"],
    correctAnswer: 2
  },
  {
    id: 190,
    text: "What is a 'Directed Graph'?",
    options: [
      "A graph where edges have a weight",
      "A graph where edges have a specific direction",
      "A graph with no cycles",
      "A graph where all vertices are connected",
      "None of above"
    ],
    correctAnswer: 1
  },
  {
    id: 191,
    text: "A Graph is primarily composed of which two elements?",
    options: ["Nodes and Leaves", "Vertices and Edges", "Roots and Branches", "Arrays and Pointers", "None of above"],
    correctAnswer: 1
  },
  {
    id: 192,
    text: "In an undirected graph, the sum of degrees of all vertices is equal to:",
    options: ["The number of vertices", "Twice the number of edges", "The number of edges", "Number of components", "All of above"],
    correctAnswer: 1
  },
  {
    id: 193,
    text: "Which sorting algorithm repeatedly compares adjacent elements and swaps them?",
    options: ["Insertion sort", "Bubble sort", "Selection sort", "Heap sort", "Quick sort"],
    correctAnswer: 1
  },
  {
    id: 194,
    text: "Which sorting algorithm works by finding the smallest element and moving it to the beginning?",
    options: ["Bubble sort", "Insertion sort", "Selection sort", "Quick sort", "Heap sort"],
    correctAnswer: 2
  },
  {
    id: 195,
    text: "Which sorting algorithm uses a divide and conquer approach and selects a pivot element?",
    options: ["Bubble sort", "Selection sort", "Insertion sort", "Quick sort", "Heap sort"],
    correctAnswer: 3
  },
  {
    id: 196,
    text: "Which term describes the number of edges touching a vertex?",
    options: ["Adjacency", "Loop", "Degree", "Path", "Vector"],
    correctAnswer: 2
  },
  {
    id: 197,
    text: "In an undirected graph, an edge between A and B means:",
    options: [
      "Can only travel A to B",
      "Can only travel B to A",
      "Can travel from A to B or B to A",
      "Cannot travel between them",
      "None of above"
    ],
    correctAnswer: 2
  },
  {
    id: 198,
    text: "What does a weighted graph attach to each edge?",
    options: ["A direction", "A color", "A number (weight)", "A vertex label", "All of above"],
    correctAnswer: 2
  },
  {
    id: 199,
    text: "What is the worst-case time complexity of bubble sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(1)", "O(n log n²)"],
    correctAnswer: 2
  },
  {
    id: 200,
    text: "Which of the following sorting algorithms is stable?",
    options: ["Selection sort", "Quick sort", "Heap sort", "Insertion sort", "None of above"],
    correctAnswer: 3
  },
  // --- BATCH 5 (201-250) ---
  {
    id: 201,
    text: "What is a data structure?",
    options: ["Programming language", "Algorithm", "Hardware device", "Database system", "Method to organize data"],
    correctAnswer: 4
  },
  {
    id: 202,
    text: "Sorting arranges data in:",
    options: ["Random order", "Specific order", "Reverse order", "Memory order", "Hierarchical order"],
    correctAnswer: 1
  },
  {
    id: 203,
    text: "A data structure that organizes data sequentially is called:",
    options: ["Linear data structure", "Non-linear data structure", "Queue", "All of the above", "Graph"],
    correctAnswer: 0
  },
  {
    id: 204,
    text: "Array elements are stored in:",
    options: ["Random memory", "Linked memory", "Contiguous memory", "Secondary storage", "Cache only"],
    correctAnswer: 2
  },
  {
    id: 205,
    text: "Index of the first element in an array:",
    options: ["1", "Depends on compiler", "-1", "0", "2"],
    correctAnswer: 3
  },
  {
    id: 206,
    text: "Time complexity of accessing an array element:",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)", "O(1)"],
    correctAnswer: 4
  },
  {
    id: 207,
    text: "Arrays can be used to implement:",
    options: ["Stack", "Queue", "Heap", "All of the above", "Tree"],
    correctAnswer: 3
  },
  {
    id: 208,
    text: "Time complexity of searching in an unsorted array:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 209,
    text: "Which is a linear data structure?",
    options: ["Tree", "Graph", "Stack", "Heap", "Binary tree"],
    correctAnswer: 2
  },
  {
    id: 210,
    text: "Which structure uses LIFO?",
    options: ["Stack", "Queue", "Array", "Graph", "Tree"],
    correctAnswer: 0
  },
  {
    id: 211,
    text: "Stack top element is accessed using:",
    options: ["pop()", "push()", "peek()", "delete()", "insert()"],
    correctAnswer: 2
  },
  {
    id: 212,
    text: "Which operation is NOT allowed in a stack?",
    options: ["Top", "Pop", "Push", "Peek", "Insert in the middle"],
    correctAnswer: 4
  },
  {
    id: 213,
    text: "Stack overflow occurs when:",
    options: ["Stack is empty", "Stack is full", "Stack is half full", "Stack is sorted", "Stack is reversed"],
    correctAnswer: 1
  },
  {
    id: 214,
    text: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Array", "Graph", "Heap"],
    correctAnswer: 1
  },
  {
    id: 215,
    text: "Which structure is best for undo operations?",
    options: ["Queue", "Array", "Graph", "Stack", "Tree"],
    correctAnswer: 3
  },
  {
    id: 216,
    text: "Stack operations: Push 10, 20, 30. Pop returns:",
    options: ["10", "20", "30", "Error", "0"],
    correctAnswer: 2
  },
  {
    id: 217,
    text: "Stack operations: Push 5, 10, 15, Pop, Pop. Remaining elements in stack:",
    options: ["[5]", "[10]", "[15]", "[]", "[5,10]"],
    correctAnswer: 0
  },
  {
    id: 218,
    text: "If you push 10, 20, 30 and then pop from a stack, which value is retrieved?",
    options: ["10", "20", "30", "Error", "-1"],
    correctAnswer: 2
  },
  {
    id: 219,
    text: "FIFO structure is used in:",
    options: ["Stack", "Queue", "Tree", "List", "Array"],
    correctAnswer: 1
  },
  {
    id: 220,
    text: "Queue deletion operation is called:",
    options: ["Pop", "Push", "Dequeue", "Remove", "Delete"],
    correctAnswer: 2
  },
  {
    id: 221,
    text: "Queue insertion occurs at:",
    options: ["Front", "Middle", "Rear", "Anywhere", "Top"],
    correctAnswer: 2
  },
  {
    id: 222,
    text: "Queue underflow occurs when:",
    options: ["Queue is empty", "Queue is full", "Queue is sorted", "Queue is inserted", "Queue is reversed"],
    correctAnswer: 0
  },
  {
    id: 223,
    text: "Queue front element is accessed by:",
    options: ["push()", "pop()", "delete()", "insert()", "peek()"],
    correctAnswer: 4
  },
  {
    id: 224,
    text: "Time complexity of dequeue in circular queue:",
    options: ["O(n)", "O(1)", "O(log n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 225,
    text: "Which data structure is used for scheduling tasks?",
    options: ["Stack", "Tree", "Graph", "Queue", "Array"],
    correctAnswer: 3
  },
  {
    id: 226,
    text: "Queue operations: Enqueue 5, 10, 15. Dequeue returns:",
    options: ["15", "10", "5", "Error", "0"],
    correctAnswer: 2
  },
  {
    id: 227,
    text: "Queue operations: Enqueue 10, 20, Dequeue, Enqueue 30, Dequeue. Final content:",
    options: ["[10,20]", "[20,30]", "[30]", "[10,30]", "[]"],
    correctAnswer: 2
  },
  {
    id: 228,
    text: "Which queue type processes highest priority first?",
    options: ["Circular queue", "Deque", "Priority queue", "Simple queue", "Linear queue"],
    correctAnswer: 2
  },
  {
    id: 229,
    text: "Linked list stores data in:",
    options: ["Continuous memory", "Random memory", "Files", "Nodes", "Arrays"],
    correctAnswer: 3
  },
  {
    id: 230,
    text: "The last node of a linked list points to:",
    options: ["First node", "Middle node", "Itself", "Random node", "NULL"],
    correctAnswer: 4
  },
  {
    id: 231,
    text: "Which data structure is dynamic in size?",
    options: ["Array", "Linked list", "Stack", "Matrix", "Graph"],
    correctAnswer: 1
  },
  {
    id: 232,
    text: "Which data structure uses pointers to connect elements?",
    options: ["Array", "Stack", "Linked list", "Queue", "Tree"],
    correctAnswer: 2
  },
  {
    id: 233,
    text: "Linked list navigation relies on:",
    options: ["Index", "Pointer", "Address", "File", "Hash"],
    correctAnswer: 1
  },
  {
    id: 234,
    text: "In a circular linked list:",
    options: ["Last node points to first node", "Each node points to next", "Last node points to NULL", "Each node has two pointers", "Nodes are sorted"],
    correctAnswer: 0
  },
  {
    id: 235,
    text: "What is a common real-world application of a linked list?",
    options: ["Scheduling system", "Resource sharing", "Music playlists", "Sorting algorithm", "Search"],
    correctAnswer: 2
  },
  {
    id: 236,
    text: "A key difference between queue and linked list is:",
    options: ["Fixed vs dynamic size", "FIFO order constraint", "Used in playlists", "No difference", "Same memory structure"],
    correctAnswer: 0
  },
  {
    id: 237,
    text: "A Linked list is best described as:",
    options: ["Fixed & contiguous", "Dynamic & non-contiguous", "Static & ordered", "Random access", "Sorted linear array"],
    correctAnswer: 1
  },
  {
    id: 238,
    text: "Which statement is FALSE regarding data structures?",
    options: ["Array allows random access", "Linked list allows random access", "Stack uses LIFO", "Queue uses FIFO", "Arrays are contiguous"],
    correctAnswer: 1
  },
  {
    id: 239,
    text: "In a binary tree, a node can have a maximum of:",
    options: ["2 children", "1 child", "3 children", "Unlimited", "0"],
    correctAnswer: 0
  },
  {
    id: 240,
    text: "Binary search tree (BST) property is:",
    options: ["Left > Right", "All nodes are equal", "Left < Root < Right", "Random placement", "Root is always smallest"],
    correctAnswer: 2
  },
  {
    id: 241,
    text: "A BST structure consists of:",
    options: ["Nodes", "Root", "Edges", "All of the above", "Leaves only"],
    correctAnswer: 3
  },
  {
    id: 242,
    text: "The path from the root to a given node is defined as:",
    options: ["Height", "Depth", "Space complexity", "Level order", "Width"],
    correctAnswer: 1
  },
  {
    id: 243,
    text: "If you insert 50, 30, 70 into an empty BST, what is the root?",
    options: ["30", "50", "70", "20", "40"],
    correctAnswer: 1
  },
  {
    id: 244,
    text: "In a tree, nodes with the same parent are called:",
    options: ["Siblings", "Same grandparent", "Direct link", "Unsorted", "Same depth"],
    correctAnswer: 0
  },
  {
    id: 245,
    text: "The time complexity of BST operations primarily depends on:",
    options: ["Number of edges", "Tree depth", "Number of nodes", "Traversal type", "Tree height"],
    correctAnswer: 4
  },
  {
    id: 246,
    text: "A balanced BST with 7 nodes has how many edges?",
    options: ["7", "5", "6", "None", "8"],
    correctAnswer: 2
  },
  {
    id: 247,
    text: "A graph data structure consists of:",
    options: ["Vertices and edges", "Edges only", "Nodes only", "Arrays", "Trees only"],
    correctAnswer: 0
  },
  {
    id: 248,
    text: "Which algorithm uses a divide-and-conquer approach recursively?",
    options: ["Bubble sort", "Stack operations", "Linear search", "Merge sort", "Insertion sort"],
    correctAnswer: 3
  },
  {
    id: 249,
    text: "The first step in Merge Sort is to:",
    options: ["Swap elements", "Divide the array", "Merge subarrays", "Compare elements", "Select pivot"],
    correctAnswer: 1
  },
  {
    id: 250,
    text: "After one pass of bubble sort on [5,3,8,4], the array becomes:",
    options: [" [3,5,8,4]", " [3,5,4,8]", " [5,3,4,8]", " [3,4,5,8]", " [5,8,3,4]"],
    correctAnswer: 1
  },
  // --- BATCH 6 (251-290) ---
  {
    id: 251,
    text: "If capacity = 8, front = 6, and rear = 1, how many elements are in the circular queue?",
    options: ["3", "4", "5", "6", "2"],
    correctAnswer: 1
  },
  {
    id: 252,
    text: "If capacity = 7, front = 2, and rear = 1, is the circular queue full?",
    options: ["Yes", "No", "Only if count = 0", "Cannot be determined", "Only if it is linear"],
    correctAnswer: 0
  },
  {
    id: 253,
    text: "In the BST formed by inserting 50, 30, 70, 20, 40, 60, 80, what is the post-order traversal?",
    options: [
      "50, 30, 20, 40, 70, 60, 80",
      "20, 30, 40, 50, 60, 70, 80",
      "20, 40, 30, 60, 80, 70, 50",
      "50, 70, 80, 30, 40, 20, 60",
      "80, 70, 60, 50, 40, 30, 20"
    ],
    correctAnswer: 2
  },
  {
    id: 254,
    text: "In a BST, searching for 65 in the tree built from 50, 30, 70, 20, 40, 60, 80 will first move from 50 to:",
    options: ["20", "30", "60", "70", "Search stops at 50"],
    correctAnswer: 3
  },
  {
    id: 255,
    text: "In the BST formed by inserting 20, 10, 30, 5, 15 in that order, where is 15 located relative to 10?",
    options: ["Left child", "Right child", "Parent", "Root", "Outside the tree"],
    correctAnswer: 1
  },
  {
    id: 256,
    text: "If a node is stored at index 4 in an array-based binary tree, what is the index of its right child?",
    options: ["8", "9", "10", "11", "12"],
    correctAnswer: 2
  },
  {
    id: 257,
    text: "What is the maximum number of leaf nodes in a perfect binary tree of height 3?",
    options: ["4", "6", "8", "15", "7"],
    correctAnswer: 2
  },
  {
    id: 258,
    text: "A circular queue has capacity = 5, front = 3, rear = 4. After one dequeue and one enqueue, what is the final rear?",
    options: ["0", "1", "3", "4", "2"],
    correctAnswer: 0
  },
  {
    id: 259,
    text: "In a singly linked list of n nodes, how many links are followed in the worst case to search for the last node's value?",
    options: ["1", "log n", "n", "n - 1", "0"],
    correctAnswer: 3
  },
  {
    id: 260,
    text: "If a BST contains the values 8, 3, 10, 1, 6, 14, what is the post-order traversal?",
    options: ["1, 6, 3, 14, 10, 8", "8, 3, 1, 6, 10, 14", "1, 3, 6, 8, 10, 14", "8, 10, 14, 3, 6, 1", "14, 10, 8, 6, 3, 1"],
    correctAnswer: 0
  },
  {
    id: 261,
    text: "What is the maximum number of nodes in a binary tree of height 4?",
    options: ["15", "16", "31", "32", "63"],
    correctAnswer: 2
  },
  {
    id: 262,
    text: "If the maximum number of nodes in a binary tree is 31, what is the height?",
    options: ["3", "4", "5", "6", "10"],
    correctAnswer: 1
  },
  {
    id: 263,
    text: "Which traversal is commonly used to delete all nodes in a tree safely?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order", "Breadth-first"],
    correctAnswer: 2
  },
  {
    id: 264,
    text: "If the in-order traversal of a tree is sorted in ascending order, the tree is most likely a:",
    options: ["queue", "stack", "BST", "graph", "heap"],
    correctAnswer: 2
  },
  {
    id: 265,
    text: "A queue is [3, 6, 8] from front to rear. After dequeue() and enqueue(10), what is the final order?",
    options: ["[3, 6, 10]", "[6, 8, 10]", "[10, 6, 8]", "[6, 10, 8]", "[3, 8, 10]"],
    correctAnswer: 1
  },
  {
    id: 266,
    text: "A stack starts empty. After push(2), push(4), push(6), pop(), pop(), what is the top?",
    options: ["2", "4", "6", "empty", "8"],
    correctAnswer: 0
  },
  {
    id: 267,
    text: "A singly linked list is 5→8→12→None. After deleting node 8, the list becomes:",
    options: ["5→12→None", "8→12→None", "5→8→None", "12→None", "Empty list"],
    correctAnswer: 0
  },
  {
    id: 268,
    text: "In a circular linked list with head = 10, which condition is commonly used to stop traversal safely?",
    options: ["current == None", "current.next == None", "current returns to head", "count == 0 only", "current matches tail"],
    correctAnswer: 2
  },
  {
    id: 269,
    text: "If matrix = [[1, 2], [3, 4], [5, 6]], what is matrix[2][1]?",
    options: ["5", "6", "4", "3", "2"],
    correctAnswer: 1
  },
  {
    id: 270,
    text: "If a 2D array has 5 rows and 3 columns, how many elements does it contain?",
    options: ["8", "15", "10", "20", "12"],
    correctAnswer: 1
  },
  {
    id: 271,
    text: "What is the maximum number of nodes at level 4 in a binary tree?",
    options: ["8", "12", "16", "32", "64"],
    correctAnswer: 2
  },
  {
    id: 272,
    text: "In a complete binary tree:",
    options: [
      "all nodes have two children",
      "all levels are completely full with no exception",
      "all levels are full except possibly the last, filled from left to right",
      "nodes are always sorted",
      "nodes are filled from right to left"
    ],
    correctAnswer: 2
  },
  {
    id: 273,
    text: "In a full binary tree, every node has:",
    options: ["0 or 2 children", "exactly 1 child", "at most 3 children", "only left children", "exactly 3 children"],
    correctAnswer: 0
  },
  {
    id: 274,
    text: "In a node-based representation of a binary tree, each node usually stores:",
    options: [
      "data only",
      "data, left reference, and right reference",
      "a matrix row",
      "head and tail only",
      "only child pointers"
    ],
    correctAnswer: 1
  },
  {
    id: 275,
    text: "If a node is stored at index i in an array-based binary tree, the left child is usually at:",
    options: ["i + 1", "2i", "2i + 1", "2i - 2", "i - 1"],
    correctAnswer: 2
  },
  {
    id: 276,
    text: "Which traversal of a BST produces sorted output?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order", "Depth-first"],
    correctAnswer: 2
  },
  {
    id: 277,
    text: "Which data structure is commonly used for level-order traversal?",
    options: ["Stack", "Queue", "Heap", "Array of size one", "Hash Grid"],
    correctAnswer: 1
  },
  {
    id: 278,
    text: "What is the average search time in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 279,
    text: "What is the worst-case search time in a skewed BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n!)"],
    correctAnswer: 2
  },
  {
    id: 280,
    text: "What is the time complexity of inserting a new node at the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)", "O(1/n)"],
    correctAnswer: 0
  },
  {
    id: 281,
    text: "If a singly linked list is 10 > 20 > 30 > … > None, what is the next node after 20?",
    options: ["10", "20", "30", "None", "Null"],
    correctAnswer: 2
  },
  {
    id: 282,
    text: "A queue starts empty. After enqueue(4), enqueue(7), enqueue(9), dequeue(), what is the new front?",
    options: ["4", "7", "9", "Empty", "10"],
    correctAnswer: 1
  },
  {
    id: 283,
    text: "A stack contains [5, 8, 12] where 12 is on top. What is the top after pop()?",
    options: ["5", "8", "12", "empty", "10"],
    correctAnswer: 1
  },
  {
    id: 284,
    text: "A circular queue has capacity = 5, front = 4, rear = 1. Which indices currently store elements?",
    options: ["4, 0, 1", "1, 2, 3, 4", "0, 1, 2, 3", "4, 1 only", "4, 0"],
    correctAnswer: 0
  },
  {
    id: 285,
    text: "A circular queue has capacity = 5, front = 0, rear = 2. After one dequeue, what is the new front?",
    options: ["0", "1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    id: 286,
    text: "What does LIFO mean in a stack?",
    options: ["Last In, First Out", "Left In, First Out", "Last In, Final Order", "Linear In, First Out", "Least In, First Out"],
    correctAnswer: 0
  },
  {
    id: 287,
    text: "What does FIFO mean in a queue?",
    options: ["First In, First Out", "Final In, First Out", "First In, Final Order", "Fast Input, Fast Output", "First In, Fast Output"],
    correctAnswer: 0
  },
  {
    id: 288,
    text: "What is the index of the first element in a Python array-like list?",
    options: ["1", "-1", "0", "2", "End"],
    correctAnswer: 2
  },
  {
    id: 289,
    text: "What is the topmost node in a tree called?",
    options: ["Leaf", "Root", "Child", "Edge", "Node"],
    correctAnswer: 1
  },
  {
    id: 290,
    text: "A node with no children is called:",
    options: ["Parent", "Root", "Leaf", "Depth", "Level"],
    correctAnswer: 2
  }
];
