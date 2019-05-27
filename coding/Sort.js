function swap(a,b){
    [a,b] = [b,a];
}

function insertSort (arr){
	for(let i = 1;i<arr.length;i++){
        let item = arr[i];
        for(let j = i;j>0;j--){
            if(arr[j]>item){
                arr[j+1]=arr[j];
            }else{
                break;
            }
        }
        arr[j] = item;
	}
}

function bubbleSort(arr){
	for(let i = 0;i<arr.length;i++){
        let flag = false;
		for(let j = 0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1])
                flag = true;
			}
        }
        // 没有数据交换则都是都是有序的，应该提前结束
        if(flag){
            break;
        }
	}
}


function selectSort (arr){
    for(let i = 0;i<arr.length;i++){
        let itemIndex = i;
        for(let j=i;j<arr.length;j++){
            let item = arr[j];
            if(arr[j]<item){
                item = arr[j+1];
                itemIndex = j;
            }
        }
        swap(arr[i],arr[itemIndex]);
    }
}


function merge(arr,l,m,r){
    var temp =[];
    var index1 = l,index2=m;
    for(let i =0 ;i<arr.length;i++){
        if(arr1[index2]>arr2[index1]&& index1<=m){
            temp[i] = arr2[index1];
            index2++;
        }else if(index2<=r){
            temp[i] = arr1[index2];
            index2++;
        }
    }
}

function mergeSort(arr,l,r){
    var m = Number.parseInt((l+r)/2);
    if(l>r){
        return ;
    }
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,r,m,l);
}



function quickSort(arr,l,r){
    if(l>=r){return };
    var m = partision(arr,l,r);
    quickSort(arr,l,m-1);
    quickSort(arr,m+1,r);

}

function partision(arr,l,r){
    var i =l,j=r;
    var item = arr[l];
    while(i<j){
        while(j>l){
            if(arr[j]>item){
                j--;
            }else{
                arr[i] = arr[j];
                break;
            }
        }
        while(i<r){
            if(arr[i]<item){
                i++;
            }else{
                arr[j] = arr[i];
                break;
            }
        }

    }
    return i+1;
}
