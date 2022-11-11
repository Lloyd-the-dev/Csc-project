#include <iostream>
#include <bits/stdc++.h>
using namespace std;

//To sum up all even numbers in a given range
int main(){
	int start;
    int end;
    int sum;
    std::queue<int> arr;
    cout << "Enter your starting value: ";
    cin >> start;
    cout << "Enter your ending value: ";
    
    cin >> end;
    for(int i = start; i <= end; i++){
    	if(i % 2 == 0){
    		sum = sum + i;
    		arr.push(i);
		}
	}
    

	std::cout << "The number of even numbers in this range is: " << arr.size() << std::endl;
	cout << "The sum of even numbers from " << start << " to " << end << " is " << sum;
}
