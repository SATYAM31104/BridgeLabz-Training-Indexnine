import re 

def validate(email, phone_number):
    email_pattern = r".+@.+\..+"
    phone_number_pattern = r"^[6-9][0-9]{9}$"

    if re.search(email_pattern, email):
        print("Email is valid")
    else:
        print("Email is invalid")

    if re.search(phone_number_pattern, phone_number):
        print("Phone number is valid")
    else:
        print("Phone number is invalid")


validate("s*#atyam@gmail.com" , "6912345")