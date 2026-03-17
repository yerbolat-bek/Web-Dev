class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def getDescription(self):
        return f"Product: {self.name}, Price: ${self.price}"
    
    def applyDiscount(self, percent):
        self.price -= self.price * (percent / 100)
        return f"New price for {self.name} after discount: ${self.price:.2f}"
    
    def __str__(self):
        return f"{self.name} (${self.price})"
    

class Electronics(Product):
    def __init__(self, name, price, quantity, warranty):
        super().__init__(name, price, quantity)
        self.warranty = warranty
    
    def getDescription(self):
        return f"Electronic: {self.name}, Price: {self.price}, Warranty: {self.warranty} month"
    
    def __str__(self):
        return f"{self.name} (${self.price}) (Warranty:{self.warranty})"
    

class Clothing(Product):
    def __init__(self, name, price, quantity, size):
        super().__init__(name, price, quantity)
        self.size = size
    
    def getDescription(self):
        return f"Clothing: {self.name} Price: ${self.price} Size: {self.size}"
    
    def __str__(self):
        return f"{self.name} (${self.price}) ({self.size})"