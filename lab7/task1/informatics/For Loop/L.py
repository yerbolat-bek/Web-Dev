a = input()
n = 0

for i, j in enumerate(a[::-1]):
    if j == '1':
        n += 2 ** i

print(n)