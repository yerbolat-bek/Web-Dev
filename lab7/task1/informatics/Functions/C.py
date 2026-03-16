def xor(x,y):
    if(x == y):
        return 0
    else:
        return 1

if __name__ == "__main__":
    try:
        a = list(map(int,input().split()))

        res = xor(a[0], a[1])
        print(res)
    except (ValueError, IndexError):
        pass