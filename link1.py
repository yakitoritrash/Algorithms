class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insertAtBegin(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return 
        else:
            new_node.next = self.head
            self.head = new_node
    def printlinkedlist(self):
        tmp_node = self.head
        while tmp_node is not None:
            print(tmp_node.data)
            tmp_node = tmp_node.next


llist = LinkedList()
llist.insertAtBegin('c')
llist.insertAtBegin('a')
llist.insertAtBegin('b')
llist.insertAtBegin('d')
llist.insertAtBegin('l')
llist.printlinkedlist()
