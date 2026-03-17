N = int(input())
l = []

for i in range(N):
    s = input().split()
    smd = s[0]
    
    if smd == "insert":
        i = int(s[1])
        e = int(s[2])
        l.insert(i, e)
    elif smd == "print":
        print(l)
    elif smd == "remove":
        e = int(s[1])
        l.remove(e)
    elif smd == "append":
        e = int(s[1])
        l.append(e)
    elif smd == "sort":
        l.sort()
    elif smd == "pop":
        l.pop()
    elif smd == "reverse":
        l.reverse()