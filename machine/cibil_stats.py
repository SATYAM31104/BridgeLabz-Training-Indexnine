import pandas as pd

# Load the dataset
df = pd.read_csv('HDFC_Dataset.csv', header=0)

# Calculate five-number summary for CIBIL_Score
cibil = df['CIBIL_Score']

min_val = cibil.min()
q1_val = cibil.quantile(0.25)
median_val = cibil.median()
q3_val = cibil.quantile(0.75)
max_val = cibil.max()

print("Five-Number Summary for CIBIL_Score:")
print(f"Minimum: {min_val}")
print(f"1st Quartile (25%): {q1_val}")
print(f"Median (50%): {median_val}")
print(f"3rd Quartile (75%): {q3_val}")
print(f"Maximum: {max_val}")

# Also useful for explanation: Boxplot stats usually
print("\nDescriptive Stats:")
print(cibil.describe())
