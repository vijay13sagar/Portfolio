/*******************************************************************************************
* File Name          : assign2.c
* Description        : Prog8130 - Assignment 2: Binary Trees
*                      This program uses binary tree to hold and print a list of numbers
*
* Author:              Vizia vidya sagar Kasina
* Date:                February 20 2022
********************************************************************************************/

#include <stdio.h>
#include <stdlib.h>

// structure defining a binary tree node. 
// Lower sorted values will go the the left
// Otherwise to the right.
typedef struct node {
	int    data;			// the number this node holds
	struct node* left;		// pointer to the left node in the tree that is less than current node OR NULL if empty
	struct node* right;		// pointer to the right node in the tree that is greater than current node OR NULL if empty
} Node;

void addToBinaryTree(Node** head, const int number);
void printBinaryTreeInOrder(Node* head);

int main(int argc, char* argv[]) {
	Node* head = NULL;	// head of the binary tree
	int number;			// to store new number
	int i;				// used in for loop as index

	// put all the numbers into the binary tree
	// numbers will be provided from command line
	for (i = 1; i < argc; i++) {
		number = atoi(argv[i]);
		addToBinaryTree(&head, number);
	}

	// print the entire tree using In-Order
	printBinaryTreeInOrder(head);

	return 0;
}

//====================== You should not modify anything above ==============================//
//==================== You should only modify following functions ==========================//

// FUNCTION      : addToBinaryTree
//
// DESCRIPTION   :
//   This function will add a new number into a binary tree
//
// PARAMETERS    :
//   number - the number that is to be stored in the binary tree
//
// RETURNS       :
//   Nothing
void addToBinaryTree(Node** head, const int number) {
	// add code to put the new number into the binary tree
	//Node* p = *head;
	// if (node == NULL) {
	// 	return; // don't handle the error for now
	// }
	Node *dupli = NULL;
	if(!(*head)){
		Node* node = (Node*)malloc(sizeof(Node));
		node->data = number;
		node->left = NULL;
		node->right = NULL;
		*head = dupli;
		return;
	}
	 if(number < (*head)->data) {
      addToBinaryTree(&(*head)->left, number);
   } else if(number > (*head)->data) {
     addToBinaryTree(&(*head)->right, number);
   }

	// in case it is the first node
	// Think: why do we use *head?
	//        comparing to assignment 1, can you think of a way 
	// 		  by changing the function signature to not use *head?
	//        (however, don't change here, show it during demo)
	// if (*head == NULL) {
	// 	*head = node;
	// 	return;
	// }

	// implement your logic

	return;
}

// FUNCTION      : printBinaryTreeInOrder
//
// DESCRIPTION   :
//   This function will print the entire binary tree out using In-Order.
//   See lecture slide if you cannot remember what In-Order is.
//
// PARAMETERS    :
//   None
//
// RETURNS       :
//   Nothing
void printBinaryTreeInOrder(Node* head) {
	// add code to print data using In-Order starting at the "head" pointer
	// one number per line
	// printf("%d\n");
	if (head) {
printBinaryTreeInOrder(head->left);
printf("%d\n",head->data);
printBinaryTreeInOrder(head->right);
}
}
