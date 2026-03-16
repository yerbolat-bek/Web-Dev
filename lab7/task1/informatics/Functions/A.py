def min_four(a, b, c, d):
    return min(a, b, c, d)

if __name__ == "__main__":
    try:
        a = list(map(int, input().split()))
        
        result = min_four(a[0], a[1], a[2], a[3])
        print(result)
    except (ValueError, IndexError):
        pass