n = int(input())
a = list(map(int, input().split()))

f = False

for i in range(1, n):
    if a[i] * a[i-1] > 0:
        f = True
        break

if f:
    print("YES")
else:
    print("NO")