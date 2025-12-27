import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
sns.set_theme(style='white')

# Load HDFC Dataset
# Read the CSV file
df = pd.read_csv('HDFC_Dataset.csv', header=0)

# Display first few rows and info
print("Data Head:")
print(df.head())
print("\nData Info:")
print(df.info())

# Calculate Mean of Applicant Income
print("\nMean Applicant Income:", df['Applicant_Income'].mean())

# Descriptive Statistics
print("\nDescriptive Statistics:")
print(df.describe())

# Group by Customer Name and mean income
print("\nTop Mean Applicant Income by Customer:")
print(df.groupby("Customer_Name")['Applicant_Income'].mean().sort_values(ascending=False).head())

# Plot Histogram
plt.figure(figsize=(10, 6))
sns.histplot(data=df, x="Applicant_Income", hue="Loan_Status", kde=True)
plt.title("Applicant Income Distribution by Loan Status")
print("\nSaving histogram to histogram.png...")
plt.savefig('histogram.png')
plt.close()

# Plot Boxplot - Fixed column names here
plt.figure(figsize=(10, 6))
# Fixed: LoanAmount -> Loan_Amount, LoanStatus -> Loan_Status
sns.boxplot(x="Loan_Amount", y="Loan_Status", data=df)
plt.title("Loan Amount by Loan Status")
print("Saving boxplot to boxplot.png...")
plt.savefig('boxplot.png')
plt.close()

print("\nAnalysis complete. No errors found in the corrected script.")
