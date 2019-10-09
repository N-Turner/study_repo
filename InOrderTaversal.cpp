In order Traverval in C++

/* you only have to complete the function given below.  
Node is defined as  

struct node
{
    int data;
    node* left;
    node* right;
};

*/

void inOrder(node *root)
{
	node* temp = new node;
    temp = root;
	if (temp != NULL)
	{
	   inOrder (temp -> left);
	   cout<<temp ->data<< " ";
	   inOrder(temp -> right);
	}
}
