from models import Product, Electronics, Clothing

def main():
    phone = Electronics("Samsung S2", 999, 10, 12)
    tshirt = Clothing("Nike", 45, 50, "L")
    item = Product("Item", 5, 100)

    catalog = [phone, tshirt, item]

    for i in catalog:
        print(i.getDescription())

    
    print(tshirt.applyDiscount(10))

if __name__ == "__main__":
    main()