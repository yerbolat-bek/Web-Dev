def caught_speeding(speed, is_birthday):
    limit1 = 60
    limit2 = 80
    
    if is_birthday:
        limit1 += 5
        limit2 += 5
        
    if speed <= limit1:
        return 0
    elif speed <= limit2:
        return 1
    else:
        return 2