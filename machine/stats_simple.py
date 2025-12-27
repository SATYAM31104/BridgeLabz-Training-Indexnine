import pandas as pd
import numpy as np

# Load the dataset
df = pd.read_csv('HDFC_Dataset.csv', header=0)

print("------------------------------------------------")
# 1. Applicant_Income
print("Statistics for Applicant_Income:")
print("Mean:", df['Applicant_Income'].mean())
print("Median:", df['Applicant_Income'].median())
print("Mode:", df['Applicant_Income'].mode()[0])
print("Variance:", df['Applicant_Income'].var())
print("Standard Deviation:", df['Applicant_Income'].std())

print("\n------------------------------------------------")
# 2. Loan_Amount
print("Statistics for Loan_Amount:")
print("Mean:", df['Loan_Amount'].mean())
print("Median:", df['Loan_Amount'].median())
print("Mode:", df['Loan_Amount'].mode()[0])
print("Variance:", df['Loan_Amount'].var())
print("Standard Deviation:", df['Loan_Amount'].std())

print("\n------------------------------------------------")
# 3. Age
print("Statistics for Age:")
print("Mean:", df['Age'].mean())
print("Median:", df['Age'].median())
print("Mode:", df['Age'].mode()[0])
print("Variance:", df['Age'].var())
print("Standard Deviation:", df['Age'].std())
