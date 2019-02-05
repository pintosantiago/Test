#include <iostream>
using namespace std;


void foo(){
	cout<<"This is foo"<<endl;
}

int main(){
	cout<<"Hello world!"<<endl;
	cout<<"This is a new line !"<<endl;
	cout<<"This is a new line from second repo"<<endl;

	for (int i = 0; i<10; ++i){

		if (i == 2)
			cout<<"two"<<endl;
		else
			cout<<"not two"<<endl;
	}


	foo();
	return 0;
}
