def r(a,b):
    return a**b

if __name__ == "__main__":
    try:
        a = list(map(float, input().split()))
        
        result = r(a[0], a[1])
        print(result)
    except (ValueError, IndexError):
        pass