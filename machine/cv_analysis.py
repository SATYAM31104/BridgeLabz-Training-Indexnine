import pandas as pd
import numpy as np

# Load the dataset
try:
    df = pd.read_csv('HDFC_Dataset.csv')
    print("Dataset loaded successfully.")
except FileNotFoundError:
    print("Error: HDFC_Dataset.csv not found.")
    exit()

# Check structure
print("\n--- Data Structure Info ---")
# Check if columns exist
cols_to_check = ['Applicant_Income', 'Annual_Household_Income']
missing_cols = [col for col in cols_to_check if col not in df.columns]

if missing_cols:
    print(f"Error: Missing columns: {missing_cols}")
    exit()

df_subset = df[cols_to_check]
print(df_subset.info())

print("\n--- Descriptive Statistics ---")
print(df_subset.describe())

# Function to calculate CV
def calculate_cv(series, name):
    mean = series.mean()
    std_dev = series.std()
    if mean == 0:
        cv = 0
        print(f"Warning: Mean for {name} is 0, CV cannot be calculated (undefined).")
    else:
        cv = (std_dev / mean) * 100
    return mean, std_dev, cv

# Calculate for Applicant_Income
mean_ai, std_ai, cv_ai = calculate_cv(df['Applicant_Income'], 'Applicant_Income')

# Calculate for Annual_Household_Income
mean_ahi, std_ahi, cv_ahi = calculate_cv(df['Annual_Household_Income'], 'Annual_Household_Income')

print("\n--- Coefficient of Variation (CV) Analysis ---")
print(f"\n1. Applicant_Income:")
print(f"   Mean: {mean_ai:,.2f}")
print(f"   Standard Deviation: {std_ai:,.2f}")
print(f"   CV: {cv_ai:.2f}%")

print(f"\n2. Annual_Household_Income:")
print(f"   Mean: {mean_ahi:,.2f}")
print(f"   Standard Deviation: {std_ahi:,.2f}")
print(f"   CV: {cv_ahi:.2f}%")

print("\n--- Interpretation ---")
print("CV represents the variability of the data relative to the mean.")
if cv_ai > cv_ahi:
    print(f"Applicant_Income (CV={cv_ai:.2f}%) varies MORE relative to its average than Annual_Household_Income (CV={cv_ahi:.2f}%).")
else:
    print(f"Annual_Household_Income (CV={cv_ahi:.2f}%) varies MORE relative to its average than Applicant_Income (CV={cv_ai:.2f}%).")
