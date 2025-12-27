import pandas as pd
import numpy as np

# Load the dataset
df = pd.read_csv('HDFC_Dataset.csv', header=0)

# columns of interest
columns = ['Applicant_Income', 'Loan_Amount', 'Age']

# Print header
print(f"{'Variable':<20} | {'Mean':<15} | {'Median':<15} | {'Mode':<15} | {'Variance':<20} | {'Std Dev':<20}")
print("-" * 115)

for col in columns:
    mean_val = df[col].mean()
    median_val = df[col].median()
    # Mode can have multiple values, we take the first one usually for scalar representation or list all
    mode_series = df[col].mode()
    mode_val = mode_series.iloc[0] if not mode_series.empty else np.nan
    var_val = df[col].var()
    std_val = df[col].std()
    
    print(f"{col:<20} | {mean_val:<15.2f} | {median_val:<15.2f} | {mode_val:<15.2f} | {var_val:<20.2f} | {std_val:<20.2f}")
