def squirrel_play(temp, is_summer):
    if is_summer:
        limit = 100
    else:
        limit = 90
        
    return 60 <= temp <= limit