#include <iostream>
using namespace std;
int main(){
    // ? MULTPLE CORES SHOULD BE USED
    int a=10;
    for (int i=0;i<10000000000;i++){
a+=i;
}
cout <<a;
}