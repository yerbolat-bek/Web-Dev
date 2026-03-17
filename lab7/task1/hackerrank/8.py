n = int(input())
arr = map(int, input().split())

u = set(arr)
u1 = sorted(list(u))

print(u1[-2])