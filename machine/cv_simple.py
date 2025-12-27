import pandas as pd

# 1. Load the data
df = pd.read_csv('HDFC_Dataset.csv')

# 2. Select the columns
income = df['Applicant_Income']
household = df['Annual_Household_Income']

# 3. Calculate CV = (Standard Deviation / Mean) * 100
cv_income = (income.std() / income.mean()) * 100
cv_household = (household.std() / household.mean()) * 100

# 4. Print the results
print(f"Applicant Income CV: {cv_income:.2f}%")
print(f"Household Income CV: {cv_household:.2f}%")
